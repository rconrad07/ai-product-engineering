<!--
Template Name: Initiative
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->
## 🤔 Problem Statement

1. **Why This Matters:**
   * Many patients experience simple dermatological needs that can be easily diagnosed and treated with over-the-counter drugs/medicines, but go undiagnosed due to fear of visiting a medical practitioner. This fear may stem from cost concerns (insurance, copays, time off work), anxiety about medical environments, perceived inconvenience, uncertainty about whether the concern warrants professional attention, or embarrassment about minor conditions. Based on experience from a physician assistant in dermatology in Florida, many patients present with relatively easy, acute cases or very minor conditions that could be easily treated with OTC medications once diagnosed by a trained authority figure (PA, NP, or MD).

2. **Expected Impact:**
   * _< Missing: Specific business impact metrics (revenue, margin, transactions, or other objectives). >_

3. **Success Metrics:**
   * Users can successfully upload photos and receive diagnoses
   * The app provides clear confidence levels for each diagnosis
   * The app correctly identifies conditions that require immediate attention vs. those treatable with OTC medications
   * Users report feeling more confident about their decision to seek or not seek professional care
   * High accuracy in identifying conditions that require immediate attention (safety-critical)
   * Appropriate confidence calibration (low confidence for uncertain cases)
   * User trust and satisfaction with recommendations
   * Reduction in unnecessary healthcare visits for minor conditions
   * Increased appropriate care-seeking for serious conditions

---

## 🥇 RICE Score

https://wyndhamexchangeandrentals.atlassian.net/wiki/spaces/DTS/pages/5374476379

| **Category**   | **Score** | **Reasoning** |
| -------------- | --------- | ------------- |
| **Reach**      |           | _< Missing: Target user reach data >_ |
| **Impact**     |           | _< Missing: Impact assessment >_ |
| **Confidence** |           | _< Missing: Confidence level >_ |
| **Effort**     |           | _< Missing: Effort estimation >_ |

**Overall RICE Score:**
_< Missing: RICE scoring data not provided >_

---

## 🎯 Scope Delimitation

| **Is*** | **Isn’t*** |
| ------- | ---------- |
| Mobile application for dermatological photo assessment | Replacement for professional medical diagnosis |
| AI-powered preliminary diagnosis with confidence levels | Final medical diagnosis or treatment prescription |
| Guidance on OTC treatment options | Direct medication sales or prescription fulfillment |
| Clear recommendations on when to seek professional care | Telemedicine or direct provider consultation |
| Educational content about conditions and treatments | Ongoing patient monitoring or follow-up care |

| **Does*** | **Doesn’t*** |
| --------- | ------------ |
| Empower users to take photos of dermatological concerns | Provide definitive medical diagnosis |
| Bridge gap between no treatment and seeking professional help | Replace in-person medical consultations for serious conditions |
| Address fear barrier preventing medical visits for minor conditions | Handle emergency or life-threatening conditions |
| Provide actionable guidance on next steps | Guarantee treatment outcomes |

---

## ⚽ Solution

**Selected Approach:**
Mobile application that empowers users to take a photo of a dermatological concern, receive an AI-powered preliminary diagnosis with confidence levels, and get clear guidance on whether the condition can be treated with over-the-counter medications or requires immediate professional medical attention.

**High-Level Technical Approach:**

```
[User Mobile App] 
    │
    ├─> Photo Capture & Upload
    │
    ├─> [Backend API]
    │       │
    │       ├─> Image Processing Service
    │       │       │
    │       ├─> [AI/ML Model Service]
    │       │       ├─> Condition Classification
    │       │       ├─> Confidence Scoring
    │       │       └─> Severity Assessment
    │       │
    │       ├─> [Medical Knowledge Base]
    │       │       ├─> OTC Treatment Recommendations
    │       │       └─> Condition Information
    │       │
    │       └─> Response Generation
    │
    └─> Results Display (Diagnosis + Guidance)
```

**Key System Components:**
- Mobile client application (iOS/Android native or cross-platform)
- Backend API service for request handling and orchestration
- AI/ML inference service for image analysis and diagnosis
- Medical knowledge base for treatment recommendations
- Secure image storage and processing pipeline
- User data management with privacy controls

**Technical Constraints & Considerations:**

**Regulatory Compliance:**
- HIPAA compliance required for Protected Health Information (PHI) handling
- FDA classification determination needed (likely Class I/II medical device software)
- State medical board regulations may apply depending on jurisdiction
- Medical disclaimer requirements for preliminary assessments
- Data retention and deletion policies for PHI

**Security & Privacy:**
- End-to-end encryption for photo transmission
- Secure storage of user photos and health data
- Authentication and authorization mechanisms
- Audit logging for medical data access
- Data anonymization capabilities for model training

**Performance & Scalability:**
- Image processing latency requirements (target: <30 seconds for diagnosis)
- Concurrent user capacity planning
- AI model inference optimization (on-device vs. cloud-based)
- Image quality validation and preprocessing
- Offline capability considerations

**Integration Dependencies:**
- AI/ML model training and validation infrastructure
- Medical expert review and validation workflow
- Third-party medical knowledge base or content licensing
- Analytics and monitoring services
- User feedback collection mechanism

**Non-Functional Requirements:**
- Accessibility: WCAG 2.1 AA compliance for mobile app
- Reliability: High availability for critical safety recommendations
- Usability: Intuitive photo capture guidance for optimal image quality
- Maintainability: Model versioning and update capabilities
- Observability: Monitoring and alerting for model performance degradation

**Technical Risks:**
- Model accuracy degradation over time (drift detection needed)
- Image quality variability affecting diagnosis reliability
- Scalability challenges with high-volume image processing
- Regulatory approval timeline uncertainty
- Integration complexity with medical knowledge sources

**Options Not Considered:**
_< Missing: Information about alternative solutions that were evaluated or eliminated >_

---

## 📡 Early Detection Matrix

| **Risks*** | **Assumptions*** |
| ---------- | ---------------- |
| Safety risk: Incorrect identification of conditions requiring immediate attention | AI model can accurately distinguish between minor and serious conditions |
| Legal/regulatory risk: Medical app classification and compliance requirements | Users understand this is preliminary assessment, not definitive diagnosis |
| User trust risk: Low confidence in AI recommendations may reduce adoption | Users will follow recommendations appropriately (seek care when advised) |
| Privacy risk: Handling of personal health information and photos | Users are comfortable sharing photos of dermatological concerns |
| Accuracy risk: False positives/negatives in condition identification | OTC treatment recommendations are appropriate for identified minor conditions |
| Technical risk: Model accuracy degradation over time (drift detection needed) | Model versioning and update capabilities can maintain accuracy |
| Technical risk: Scalability challenges with high-volume image processing | Infrastructure can scale to meet demand |
| Technical risk: Integration complexity with medical knowledge sources | Third-party medical knowledge base integration is feasible |
| Market risk: Established competitors with large user bases (SkinVision: 1M+ users) | Market demand exists for OTC-focused dermatology guidance |
| Market risk: Industry concerns about AI app validation and clinical evidence gaps | Product can differentiate through OTC treatment focus and confidence transparency |
| Market risk: Regulatory scrutiny on AI dermatology apps due to validation issues | Regulatory pathway is achievable with proper clinical validation |

| **Issues*** | **Dependencies*** |
| ----------- | ----------------- |
| _< None identified at this stage >_ | AI/ML model development and training |
| | Medical expert validation of diagnosis logic |
| | Regulatory compliance (FDA, HIPAA, etc.) |
| | Photo quality and image processing capabilities |
| | Third-party medical knowledge base or content licensing |
| | Analytics and monitoring services for model performance |
| | User feedback collection mechanism for continuous improvement |

| **Questions*** |
| -------------- |
| What is the target user reach (number of users expected)? |
| What is the expected business impact (revenue, margin, transactions, or other objectives)? |
| What regulatory approvals or compliance requirements apply (FDA, HIPAA, state medical board regulations)? |
| What is the AI model training data source and validation approach? |
| What is the business model (freemium, subscription, per-use, etc.)? |
| What are the technical constraints or platform requirements (iOS, Android, both)? |
| What is the target timeline for MVP launch? |
| What alternative solutions were considered and why were they eliminated? |
| What is the expected cost structure and pricing model? |
| Who are the key stakeholders and decision-makers for this initiative? |

---

## 🚩 Business milestones and deadlines

_Think: External deadlines, release planning, financial deadlines, vendor commitments. This should not be a product/delivery roadmap (don’t include Sprint dates)._

| **Milestone**         | **Owner**        | **Deadline**        | **Status**    |
| --------------------- | ---------------- | ------------------- | ------------- |
| _< Brief description >_ | _< @ a name >_   | _< // to add date >_ | Not started   |
|                       |                  |                     |               |
|                       |                  |                     |               |

---

## 🔗 Reference materials

**Competitive Landscape Analysis:**

**Direct Competitors:**
- **SkinVision** - Skin cancer risk assessment app with 1M+ users. Provides low/high-risk indications within 30 seconds. Focuses on cancer detection rather than OTC treatment guidance. [Source: https://www.skinvision.io/]
- **DermoScanner** - AI-powered mole analysis app trained on tens of thousands of hospital photos. Identifies multiple skin cancer types with comparison reports. [Source: https://dermoscanner.ai/]
- **Skinive** - CE-marked medical software analyzing 50+ skin conditions (acne, melanoma, fungal infections). Features 3D full-body mole-mapping with 94.7% sensitivity. Available for patients and professionals. [Source: https://skinive.com/]

**Market Context:**
- Diagnostic dermatology imaging devices market valued at USD 4.93 billion in 2024, projected 9.4% CAGR through 2030
- Approximately 9,500 Americans diagnosed with skin cancer daily; over 1 million living with melanoma
- Research on 41 AI dermatology apps identified concerns: insufficient clinical evidence, inadequate clinician input, algorithm opacity, questionable data practices, privacy issues
- Market gap: Most competitors focus on cancer detection/triage rather than OTC treatment guidance for minor conditions

**Key Differentiators:**
- Focus on OTC treatment recommendations (vs. cancer-focused competitors)
- Explicit confidence level transparency
- Guidance on when professional care is needed vs. OTC treatment
- Addresses fear barrier for minor conditions (vs. serious condition detection focus)

**Market Risks:**
- Established competitors with significant user bases and brand recognition
- Industry validation concerns may affect user trust
- Regulatory scrutiny on AI dermatology apps due to validation gaps

[Sources: CB Insights, Grand View Research, JAMA Dermatology research on AI dermatology apps]

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name**        | **Date Completed**   |
| -------------------- | --------------- | -------------------- |
| PCI-DSS Compliant    | _< @ a name >_  | _< // to add date >_ |
| System Architecture  | _< @ a name >_  | _< // to add date >_ |
| Legal                | _< @ a name >_  | _< // to add date >_ |
| ADA Compliance       | _< @ a name >_  | _< // to add date >_ |
