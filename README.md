# FinDefender Solution

This is the **solution/ script** for the Findefender Fraud Detection System. It is implemented above the Open Finance platform so as to allow users to report potential fraud by submitting images and descriptions. The system processes these reports, extracts text from images, and analyzes the fraud percentage.

## **Table of Contents**
- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Video Demo](#video-demo)
- [Installation Guide](#installation-guide)
---

## **Project Description**

The **User Portal** allows individuals to report potential fraud by submitting images and descriptions. The system:
1. Extracts text from images.
2. Compares the description text with the extracted image text.
3. Calculates fraud percentages and provides a summary.

If the fraud percentage exceeds a threshold (70%), the report is flagged as fraud.

---

## **Tech Stack**
- **Frontend:** NextJS
- **Backend (optional):**
- **Database:** Supabase
- **Others:** OpenAI, Gemini

---

## **Features**
- Upload images and add descriptions to reports.
- Receive fraud analysis with percentage results.
- View alerts based on fraud percentage.

---

## **Video Demo**
[![FinDefender Solution Demo](https://img.youtube.com/vi/7Xe9eRHtFU0/0.jpg)](https://www.youtube.com/watch?v=7Xe9eRHtFU0)

Click above to watch a demo showcasing the **FinDefender Solution** in action.

---

## **Installation Guide**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiowYenChong/FinDefender.git
