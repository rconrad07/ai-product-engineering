# Project State: Automated Dynamic Pricing Parity

## Problem Context

Hotels currently manually update room rates across various distribution channels (Expedia, Booking.com, Brand Website). This lag results in "rate parity" violations where the brand website is more expensive than an OTA, or vice versa, leading to contract penalties and customer confusion.

## Business Goal

Develop an automated system that monitors competitor rates and OTA rates in real-time, automatically adjusting the brand's direct rates to ensure it is always the lowest available (or at least equal), while maintaining a minimum floor margin.

## Key Constraints

- Must integrate with existing Property Management Systems (PMS).
- Must respect minimum floor prices set by Revenue Managers.
- Must provide an audit log of price changes.
