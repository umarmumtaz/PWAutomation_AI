# Playwright Automation Framework with CI/CD, Docker & Kubernetes

## Overview

This project is a scalable end-to-end automation framework built using:

* Playwright with TypeScript
* Page Object Model (POM)
* Data-Driven Testing
* JSON-based data handling
* Jenkins CI/CD Pipeline
* Docker Containerization
* Kubernetes Deployment
* GitHub Integration
* HTML & Allure Reporting

The framework automates a complete job application workflow including:

* Candidate Registration Flow
* Job Search & Apply
* Multi-Step Wizard Forms
* CV Upload
* Education & Employment Sections
* Supporting Information
* Equal Opportunities
* Declaration & Submission
* Candidate Data Extraction
* JSON Data Comparison

---

# Tech Stack

| Tool          | Purpose                 |
| ------------- | ----------------------- |
| Playwright    | End-to-End Automation   |
| TypeScript    | Programming Language    |
| Jenkins       | CI/CD Pipeline          |
| GitHub        | Source Control          |
| Docker        | Containerization        |
| Kubernetes    | Container Orchestration |
| Allure Report | Advanced Reporting      |
| HTML Report   | Test Execution Report   |
| JSON          | Test Data Management    |

---

# Framework Architecture

```bash
PWAutomation_AI_clean/
│
├── pages/                  # Page Object Model Classes
├── tests/                  # Test Specs
├── utils/                  # Utilities & Helpers
├── docs/                   # Upload Files (CVs/Documents)
├── storage/                # Storage State & User Data
├── test-data/              # JSON Test Data
├── playwright-report/      # HTML Reports
├── allure-results/         # Allure Results
├── Jenkinsfile             # Jenkins Pipeline
├── Dockerfile              # Docker Configuration
├── k8s/                    # Kubernetes YAML Files
└── playwright.config.ts    # Playwright Configuration
```

---

# Features

## Automation Features

* Multi-tab form handling
* Dynamic candidate registration
* Random email generation
* File upload handling
* JSON export/import
* Candidate vs Employer data comparison
* Modular Page Object Model
* Retry mechanism
* Parallel execution support
* CI/CD integration

---

# Page Object Model Structure

## ApplyWizardPage

Central page manager handling all modules:

* RegisterPage
* ApplyForJobPage
* AboutYouPage
* SupportingInfoPage
* EqualoppsPage
* DeclarationPage

---

# Data-Driven Testing

## Candidate Data Extraction

Application data is extracted dynamically from the candidate portal and saved into JSON format.

Example:

```json
{
  "personalDetails": {
    "title": "Mr",
    "city": "London"
  },
  "education": {
    "university": "Punjab University"
  }
}
```

---

# Reporting

## HTML Report

```bash
npx playwright show-report
```

## Allure Report

```bash
npx allure serve allure-results
```

---

# Playwright Commands

| Command                         | Description        |
| ------------------------------- | ------------------ |
| npx playwright test             | Run all tests      |
| npx playwright test tests/Login | Run specific suite |
| npx playwright show-report      | Open HTML report   |
| npx playwright codegen          | Generate locators  |
| npx playwright install          | Install browsers   |
| npx allure serve allure-results | Open Allure report |

---

# Jenkins CI/CD Pipeline

## Pipeline Stages

1. Install Dependencies
2. Install Browsers
3. Execute Playwright Tests
4. Generate Reports
5. Build Docker Image
6. Push Docker Image to Docker Hub
7. Run Docker Container
8. Deploy to Kubernetes

---

# Docker Integration

## Build Docker Image

```bash
docker build -t pw-tests .
```

## Run Docker Container

```bash
docker run --rm pw-tests
```

---

# Kubernetes Deployment

## Apply Deployment

```bash
kubectl apply -f k8s/
```

## Verify Pods

```bash
kubectl get pods
```

## Verify Services

```bash
kubectl get svc
```

---

# Jenkinsfile Highlights

The framework supports:

* Windows Jenkins Agent
* Docker Hub Authentication
* Kubernetes Deployment
* HTML Report Publishing
* Artifact Archiving
* CI Environment Support

---

# Local CI/CD Flow

```text
VS Code
   ↓
Playwright
   ↓
GitHub
   ↓
Jenkins
   ↓
Docker
   ↓
Kubernetes
```

---

# Enterprise-Level Improvements

Implemented enterprise automation concepts:

* Scalable Framework Design
* Modular Utilities
* Reusable Components
* Data Separation
* CI/CD Pipeline
* Containerization
* Orchestration
* Reporting Strategy
* JSON-Based Validation
* Environment Stability

---

# Future Improvements

* API Automation
* Database Validation
* Azure DevOps Integration
* GitHub Actions
* AWS EKS Deployment
* Playwright Fixtures
* Parallel Distributed Execution
* Visual Testing
* AI-Based Reporting

---

# Author

## Umar Mumtaz

Senior Software Quality Assurance Engineer

Specialized in:

* Automation Testing
* CI/CD
* Playwright
* Performance Testing
* Docker & Kubernetes
* End-to-End Test Framework Design

---


