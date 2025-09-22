# Automation Anywhere Assignment – Cypress Automation Suite

This repository contains Cypress-based UI and API automation for three use cases targeting Automation Anywhere's Community Edition platform
---
Use Cases Covered
Use Case 1: Message Box Task (UI Automation)
**Steps Automated:**
- Login to the application
- Navigate to Automation → Create → Task Bot
- Fill mandatory fields and create task
- Add Message Box from Actions panel
- Verify UI interactions and save configuration
- 
**Assertions:**
- Element visibility
- Data entry validation
- Confirmation message
- Functional flow validation

---

Use Case 2: Form with Upload Flow (UI Automation)

**Steps Automated:**
- Login and navigate to Automation → Create → Form
- Fill mandatory fields and create form
- Drag and drop Textbox and Select File
- Interact with right panel properties
- Enter text and upload document
- Save and validate upload success

**Assertions:**
- UI visibility and functionality
- File upload status
- Form submission and backend response

---

Use Case 3: Learning Instance API Flow (API Automation)

**Steps Automated:**
- Perform login using credentials from `API.json`
- Create a Learning Instance via API
- Validate instance creation and details

**Assertions:**
- HTTP status codes (200, 201)
- Response time checks
- Schema validation (`id`, `name`, `status`)
- Functional accuracy

---

Setup Instructions

Clone the Repository
```bash
git clone https://github.com/your-username/Automation-Anywhere-Assignment.git
cd Automation-Anywhere-Assignment

 Environment & Configuration
Credentials stored in cypress/fixtures/API.json
File uploads use local shared folder path
Tests use Page Object Model (POM) for maintainability

Plugins used:
cypress-iframe
@4tw/cypress-drag-drop
cypress-real-events



