---
title: "End User License Agreement"
description: "End User License Agreement for Taskusanakirja"
layout: "single"
---

# End User License Agreement

**Effective Date:** August 16, 2025

This End User License Agreement ("Agreement") is between you ("User", "you") and the developers of Taskusanakirja ("we", "us", "our") for the use of the Taskusanakirja software application and associated services (the "Software").

## 1. License Grant

### 1.1 Free Edition

We grant you a non-exclusive, non-transferable, revocable license to use the Free Edition of Taskusanakirja for personal, non-commercial purposes only, subject to the terms of this Agreement. The Free Edition includes, but is not limited to, the following features:

- Interactive Terminal User Interface (TUI) for dictionary browsing.
- Command-line word lookup (`find`).
- Reverse English-to-Finnish definition search (`rfind`).
- A local web server for browser-based use (`serve`).

Examples: Use for academic research, personal study, and language learning is permitted. Use for corporate training, paid translation services, or integration into a commercial product requires a separate commercial license.

### 1.2 Pro Edition

Upon valid purchase of a Taskusanakirja Pro license, we grant you a non-exclusive, non-transferable license to use the Pro Edition features for personal, non-commercial purposes only. These features include, but are not limited to:

- Complete lemmatization of Finnish word forms, allowing you to find the base form (lemma) of an inflected word (`lemma` command).
- Access to downloading the inflections database, which is required for lemmatization and must be downloaded separately by the user.

### 1.3 License Restrictions

You may not:

- Use the Software for any commercial purposes without obtaining a separate commercial license from us.
- Share, distribute, or transfer your Pro license key to others.
- Reverse engineer, decompile, or disassemble the Software, or otherwise attempt to circumvent technical measures such as code obfuscation.
- Remove or alter any proprietary notices or labels.
- Use the Software to create derivative or competing products.
- Sublicense, rent, or lease the Software.
- Attempt to bypass or tamper with the license validation mechanism.

## 2. Intellectual Property

The Software and all associated content, including but not limited to the source code, dictionary database, user interface, and documentation, are protected by copyright and other intellectual property laws. All rights not expressly granted are reserved.

## 3. Pro License Terms

### 3.1 License Key

Your Pro license is activated through a unique license key, which must be in the valid 8-8-8-8 UUID format. This key:

- Is for your use only.
- Is validated against a unique machine identifier (a cryptographically secure, salted hash) and is limited to one device at a time. Use on an unauthorized machine may result in revocation of the license.
- Must be kept confidential.
- Will be revoked if found to be shared or misused.

To prevent license misuse, this identifier is processed through a one-way cryptographic hash on your device. This secure hash is the only identifier transmitted to our servers for validation and is not reversible.

### 3.1.1 License Transfer

To transfer your Pro license from one device to another, you must contact support at `support@taskusanakirja.com`. For verification and to authorize the transfer, **you will be required to provide your original, complete license key.**

Upon successful verification, we will deactivate the license from the previously registered device. This will permit you to perform the activation process on a new machine using your existing key. Please note that we cannot assist with license transfers if you are unable to provide your original license key.

### 3.2 Updates

Your Pro license is a perpetual license for the major version of the Software for which it was purchased. For example, a license purchased for version 1 (v1.x.x) entitles you to all subsequent minor and patch updates within that version series (e.g., v1.1.0, v1.2.1, etc.) at no additional cost.

This license is provided as a one-time purchase for the current major version of the Software. It is not a subscription and will not be subject to automatic renewal or recurring charges.

We reserve the right to charge for major version upgrades (e.g., an upgrade from v1.x.x to v2.x.x), which may require the purchase of a new license. We may, at our sole discretion, offer discounts to existing license holders for such major upgrades. The current major version of the software at the time of writing is v1.0.0.

_Please note_: While your license to use the software is perpetual, features that depend on external servers, such as initial license activation and periodic validation checks, are provided on an "as-available" basis and are not guaranteed to be available indefinitely.

## 4. Data and Privacy

### 4.1 Local Processing

Taskusanakirja is designed to work offline. The core dictionary data is embedded within the application, and all dictionary lookups are processed locally on your device. No search queries or usage data are transmitted to external servers during normal operation.

### 4.2 License Validation and Data Downloads

Certain features require an internet connection:

- **License Activation and Validation:** Activating a Pro license requires an internet connection to contact our license server. To ensure the license remains valid, the Software must periodically connect to the server to refresh its activation status.

- **Inflections Database:** Pro users must download the inflections database from our servers to enable the lemmatization feature.

Information sent to our servers are, at the time of writing, the license key and the one-way securely hashed machine identifier.

## 5. Disclaimer of Warranties

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

The dictionary content is provided for linguistic reference purposes. This data is aggregated from third-party sources (see Section 9), and we do not guarantee its accuracy, completeness, or suitability for any specific purpose.

We do not warrant that the Pro Edition's inflection search will find the base form for every possible inflected Finnish word, or that its results will always be linguistically perfect.

The Software employs code obfuscation to protect its internal logic. We do not warrant that the Software will be compatible with all third-party security, antivirus, or firewall software.

While the Software includes a feature that attempts to automatically launch a new terminal window when run from a graphical environment, we do not warrant that this feature will function correctly on all operating system configurations.

## 6. Limitation of Liability

IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

Our total liability shall not exceed the amount paid for your Pro license, if applicable.

## 7. Termination

### 7.1 Termination by You

You may terminate this Agreement at any time by ceasing use of the Software and removing it and any associated configuration files (such as `license.bin`) from your devices.

_Please be aware_: The license.bin file is stored _only_ on your local device and is critical for the operation of Pro features. We do not store this file on our servers and have no way to recover it if you delete it. Loss of this file may require you to reactivate your license, which may not be possible in all circumstances.

The command `taskusanakirja license clear` is the recommended way to remove the license.bin file from your device. This command will also disable Pro features and prevent any further use of the Pro license.

### 7.2 Termination by Us

We may terminate this Agreement if you violate any of its terms, particularly those related to license misuse, unauthorized distribution, or attempts to circumvent the Software's technical protection measures.

### 7.3 Effect of Termination

Upon termination, the following effects will apply, including but not limited to:

- Your license to use the Software ends immediately.
- Pro features will be disabled.
- We may block or delete your license key on our validation servers to prevent future use.
- No refunds will be provided for terminations due to license violations.

### 8. Updates, Upgrades, and Modifications

We reserve the right, at our sole discretion, to:

- Provide updates to the Software, which may include bug fixes, patches, and new features for the current major version.
- Offer major version upgrades, which may be subject to separate terms and fees as described in Section 3.2 of this Agreement.
- Modify this Agreement with reasonable notice.
- Change or discontinue features of the Software with reasonable notice.

Continued use of the Software after any modifications constitutes your acceptance of the updated terms.

## 9. Third-Party Content

The Software incorporates dictionary content and linguistic data from various sources. These materials are used under their respective licenses and remain the property of their original creators. Specifically:

- Dictionary data is from Wiktionary, licensed under CC BY-SA 4.0 & GFDL.
- Example sentences are from Tatoeba, licensed under CC-BY 2.0 FR.

For more detailed information on our data sources, visit <https://taskusanakirja.com/data-sources/> .

## **10. Export Compliance & Geographic Restrictions**

### **10.1 Export Compliance**

You agree to comply with all applicable export and re-export control laws and regulations in your use of the Software. You may not use or otherwise export or re-export the Software except as authorized by United States law and the laws of the jurisdiction in which the Software was obtained.

### **10.2 Geographic Restrictions**

The Software is intended for use worldwide, but you are responsible for ensuring that your use of the Software complies with the laws of your local jurisdiction. We make no representation that the Software or its features are appropriate or available for use in any particular location.

## **11. Governing Law & Dispute Resolution**

### **11.1 Governing Law**

This Agreement shall be governed by and construed in accordance with the laws of **Finland**, without regard to its conflict of law principles.

While this Agreement is governed by the laws of Finland, you may also be entitled to the protection of certain mandatory consumer protection provisions of the country in which you reside. Nothing in this Agreement is intended to limit or waive such rights under your local law.

### **11.2 Dispute Resolution**

Any dispute, controversy, or claim arising out of or relating to this Agreement, or the breach, termination, or invalidity thereof, shall be settled by the competent courts of Finland.

## **12. General Provisions**

### **12.1 Severability**

If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.

### **12.2 Waiver**

Any failure by us to enforce any right or provision of this Agreement will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of us.

### **12.3 Entire Agreement**

This Agreement constitutes the entire agreement between you and us regarding the Software and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Software.

## **13. Refund Policy**

Purchases of a Taskusanakirja Pro license are processed through our authorized third-party reseller, Gumroad. All refund requests are therefore also governed by Gumroad's own refund policies and terms of service.

Subject to the terms outlined herein and on the Gumroad platform, you may request a refund within fourteen (14) days of your purchase date.

### 13.1 Eligibility and Exclusions

To be eligible for a refund, you must not have initiated a download of the separate inflections database required for Pro features. Due to the nature of this digital content, the purchase is considered final and non-refundable once the database download has commenced.

### 13.2 How to Request a Refund

To initiate a refund request, please reply to your original purchase receipt email from Gumroad or contact us directly at `support@taskusanakirja.com` with your full license key and proof of purchase. All refunds are processed through Gumroad and are subject to their processing times and terms.

## **14. Contact Information**

For questions about this Agreement or the Software, please visit [https://taskusanakirja.com](https://taskusanakirja.com) or email <support@taskusanakirja.com>.

## **15. Acknowledgment**

BY INSTALLING, COPYING, OR OTHERWISE USING TASKUSANAKIRJA, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS.
