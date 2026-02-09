import json
import csv
import os

def calculate_subscales(item):
    # Normalize Q8 (1-10) to 1-5 scale for subscale averaging
    q8_norm = item['q8_likely_to_use_future'] / 2.0
    
    usability = (item['q1_easy_to_use'] + item['q2_easy_to_navigate']) / 2.0
    trust = (item['q3_confident_using'] + item['q4_trust_info']) / 2.0
    appearance = (item['q5_visually_appealing'] + item['q6_looks_professional']) / 2.0
    loyalty = (item['q7_likely_to_recommend'] + q8_norm) / 2.0
    
    # Overall SUPR-Q Average (all 8 questions, normalized)
    scores = [
        item['q1_easy_to_use'],
        item['q2_easy_to_navigate'],
        item['q3_confident_using'],
        item['q4_trust_info'],
        item['q5_visually_appealing'],
        item['q6_looks_professional'],
        item['q7_likely_to_recommend'],
        q8_norm
    ]
    avg = sum(scores) / len(scores)
    
    return {
        "usability_score": round(usability, 2),
        "trust_score": round(trust, 2),
        "appearance_score": round(appearance, 2),
        "loyalty_score": round(loyalty, 2),
        "overall_average": round(avg, 2)
    }

# Load raw data
with open('data/benchmark/raw_evaluations.json', 'r') as f:
    raw_data = json.load(f)

processed_data = []

for entry in raw_data:
    subscales = calculate_subscales(entry)
    # Combine data
    merged = {**entry, **subscales}
    processed_data.append(merged)

# Save processed JSON
with open('data/benchmark/benchmark_database.json', 'w') as f:
    json.dump(processed_data, f, indent=2)

# Save CSV
keys = processed_data[0].keys()
with open('data/benchmark/benchmark_database.csv', 'w', newline='') as f:
    dict_writer = csv.DictWriter(f, fieldnames=keys)
    dict_writer.writeheader()
    dict_writer.writerows(processed_data)

# Generate Supplemental Justification Markdown
with open('data/benchmark/scoring_justification.md', 'w') as f:
    f.write("# Hospitality Tech SUPR-Q Scoring Justification\n\n")
    f.write("This document provides the rationale for the synthetic scores assigned to each competitor.\n\n")
    for entry in processed_data:
        f.write(f"## {entry['product_name']} ({entry['company_name']})\n")
        f.write(f"- **Overall Score:** {entry['overall_average']}/5\n")
        f.write(f"- **Notes:** {entry['notes']}\n\n")
        f.write("| Subscale | Score | Rationale |\n")
        f.write("| --- | --- | --- |\n")
        f.write(f"| **Usability** | {entry['usability_score']} | Score reflects {entry['q1_easy_to_use']} (Ease) and {entry['q2_easy_to_navigate']} (Nav). |\n")
        f.write(f"| **Trust** | {entry['trust_score']} | Score reflects {entry['q3_confident_using']} (Conf) and {entry['q4_trust_info']} (Trust). |\n")
        f.write(f"| **Appearance** | {entry['appearance_score']} | Score reflects {entry['q5_visually_appealing']} (Appeal) and {entry['q6_looks_professional']} (Prof). |\n")
        f.write(f"| **Loyalty** | {entry['loyalty_score']} | Score reflects {entry['q7_likely_to_recommend']} (Rec) and {entry['q8_likely_to_use_future']}/10 (Future). |\n\n")

print("Processing complete. Files generated in data/benchmark/")
