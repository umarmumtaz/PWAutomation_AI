Here’s a polished `README.md` you can drop straight into your **PWAutomation_AI_clean** project. It captures the full CI/CD framework you’ve built with Playwright, TypeScript, Jenkins, Docker, and Kubernetes:

```markdown
# Playwright + TypeScript + Jenkins + Docker + Kubernetes CI/CD Framework

## Overview
                This framework is designed for:
- End-to-End UI Automation
- Scalable Playwright Framework
- CI/CD Integration
- Dockerized Test Execution
- Kubernetes Deployment
- GitHub Integration
- Jenkins Pipeline Automation

            It follows enterprise-level automation architecture using:
- **Playwright + TypeScript**
- **Page Object Model (POM)**
- **Data-Driven Testing**
- **Storage State Authentication**
- **Docker**
- **Jenkins**
- **Kubernetes**

---

## Technology Stack

| Tool        | Purpose                |
|-------------|------------------------|
| Playwright  | UI Automation          |
| TypeScript  | Programming Language   |
| Node.js     | Runtime                |
| GitHub      | Source Control         |
| Jenkins     | CI/CD Pipeline         |
| Docker      | Containerization       |
| Kubernetes  | Container Orchestration|
| Docker Hub  | Image Registry         |
| VS Code     | IDE                    |

---

## Project Architecture
```
VS Code
   ↓
Playwright Framework
   ↓
GitHub Repository
   ↓
Jenkins Pipeline
   ↓
Docker Image Build
   ↓
Docker Hub Push
   ↓
Kubernetes Deployment
```

---

## Framework Folder Structure
```
project-root/
│
├── pages/
│   ├── RegisterPage.ts
│   ├── ApplyWizardPage.ts
│   ├── AboutYouPage.ts
│   ├── SupportingInfoPage.ts
│   ├── EqualoppsPage.ts
│   └── DeclarationPage.ts
│
├── tests/
│   ├── applyJob.spec.ts
│   ├── login.spec.ts
│   └── dataComparison.spec.ts
│
├── test-data/
│   ├── applicationData.json
│   └── users.json
│
├── utils/
│   ├── dataUtils.ts
│   ├── fileUtils.ts
│   ├── compareUtils.ts
│   └── userUtils.ts
│
├── storage/
│   └── state.json
│
├── playwright-report/
├── test-results/
│
├── Dockerfile
├── Jenkinsfile
├── deployment.yaml
├── service.yaml
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Prerequisites
Install the following tools before execution:

1. **Node.js** → [Download](https://nodejs.org)  
   Verify: `node -v`, `npm -v`

2. **VS Code** → [Download](https://code.visualstudio.com)  
   Recommended Extensions: Playwright Test, ESLint, Prettier, Docker

3. **Playwright**  
   ```bash
   npm init -y
   npm install -D @playwright/test
   npx playwright install
   ```

4. **Docker Desktop** → [Download](https://www.docker.com/products/docker-desktop)  
   Verify: `docker --version`

5. **Jenkins** → [Download](https://www.jenkins.io/download/)  
   Plugins: Git, Pipeline, HTML Publisher, NodeJS, Docker

6. **Kubernetes (via Docker Desktop)**  
   Enable in Docker Desktop → Settings → Kubernetes  
   Verify: `kubectl get nodes`

---

## Playwright Configuration
`playwright.config.ts` includes:
- retries
- screenshots
- trace
- HTML/JSON reports
- storage state
- parallel execution

Example:
```ts
use: {
  baseURL: 'https://test.jobtrain.co.uk',
  headless: true,
  screenshot: 'on',
  trace: 'on-first-retry',
  storageState: 'storage/state.json',
}
```

---

## Running Tests Locally
- Run all tests:  
  `npx playwright test`

- Run specific suite:  
  `npx playwright test tests/Login`

- Run headed mode:  
  `npx playwright test --headed`

- Run specific browser:  
  `npx playwright test --project=chromium`

Reports:  
- HTML → `playwright-report/index.html`  
- Show report → `npx playwright show-report`

---

## Docker Integration
- Build image:  
  `docker build -t pw-tests .`

- Run container:  
  `docker run --rm pw-tests`

- Push to Docker Hub:  
  ```bash
  docker login
  docker tag pw-tests infodocker7410/pw-tests:latest
  docker push infodocker7410/pw-tests:latest
  ```

---

## Jenkins Integration
Pipeline stages:
1. Checkout Source Code  
2. Install Dependencies  
3. Install Playwright Browsers  
4. Run Test Suite  
5. Build Docker Image  
6. Push Docker Image  
7. Deploy to Kubernetes  
8. Publish Reports  

Configure Jenkins pipeline with SCM → GitHub repo → Jenkinsfile path.

---

## Kubernetes Integration
- Deploy:  
  `kubectl apply -f deployment.yaml`  
  `kubectl apply -f service.yaml`

- Commands:  
  `kubectl get pods`  
  `kubectl get deployments`  
  `kubectl get services`  
  `kubectl rollout restart deployment pw-tests`

---

## Best Practices
- Page Object Model  
- Utility-based architecture  
- Centralized test data  
- Modular framework  
- CI/CD automation with retries, parallel execution, Dockerized tests, Kubernetes orchestration

---

## Author
Framework created by **Umar Mumtaz**  
*SQA Lead | Automation Engineer*

---

## Final Notes
This framework demonstrates:
- Enterprise Playwright Automation  
- Real CI/CD Pipeline  
- Docker + Kubernetes Integration  
- Scalable Automation Architecture  
- End-to-End DevOps Workflow  

Suitable for:
- Enterprise automation projects  
- Portfolio demonstrations  
- DevOps learning  
- CI/CD implementation  
- Interview preparation
```

---

This `README.md` is structured for **VS Code** and GitHub, so anyone cloning your repo will immediately understand the architecture, prerequisites, and execution flow.  









-------------------------------------------------------------
=====================================================================





# Jenkins Pipeline + Global Setup for Playwright CI/CD

## Overview
This document describes the Jenkins global tool configuration and pipeline stages used to run the **Playwright + TypeScript + Docker + Kubernetes** automation framework.

---

## Global Tool Configuration

### Git
- Path: `C:\Program Files\Git\bin\git.exe`
- Used for SCM checkout.
- Credentials: GitHub token stored in Jenkins credentials.

### NodeJS
- Installed via Jenkins NodeJS plugin.
- Provides `npm` and `npx` for Playwright commands.

### Allure Commandline
- Name: `allure`
- Installed automatically from Maven Central (version `2.39.0`).
- Path:  
  `C:\Users\urmz\.jenkins\tools\org.allurereport.jenkins.tools.AllureCommandlineInstallation\allure\bin\allure.bat`

### Docker
- Configured in Jenkins global tools.
- Used for `docker build` and `docker push`.
- Credentials: Docker Hub username/password stored in Jenkins credentials.

### Kubernetes CLI (kubectl)
- Installed on Jenkins agent machine.
- Used directly in pipeline stages for `kubectl apply`, `kubectl rollout`.

---

## Jenkins Pipeline Stages

### 1. Checkout SCM
- Source: GitHub repository  
  `https://github.com/umarmumtaz/PWAutomation_AI.git`
- Credentials: `github-token`

### 2. Install Dependencies
```bat
npm ci
```

### 3. Install Playwright Browsers
```bat
npx playwright install
```

### 4. Run Test Suite
```bat
npx playwright test tests/Login --reporter=line,allure-playwright
```

### 5. Build Docker Image
```bat
docker build -t infodocker7410/pw-tests:${BUILD_NUMBER} .
docker tag infodocker7410/pw-tests:${BUILD_NUMBER} infodocker7410/pw-tests:latest
```

### 6. Push Docker Image
```bat
docker login -u infodocker7410 -p ****
docker push infodocker7410/pw-tests:${BUILD_NUMBER}
docker push infodocker7410/pw-tests:latest
```

### 7. Deploy to Kubernetes (locally)


```bat
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl set image deployment/pw-tests pw-tests=infodocker7410/pw-tests:${BUILD_NUMBER}
kubectl rollout status deployment/pw-tests
```

### 8. Publish Reports
- **Playwright HTML Report** via `htmlpublisher`.
- **Allure Report** via Jenkins Allure plugin.

---

## Best Practices
- Store all credentials (GitHub token, Docker Hub creds, AWS/EKS kubeconfig) in Jenkins credentials store.
- Configure global tools once (Git, NodeJS, Docker, Allure).
- Use declarative pipeline with clear stages for SCM, test, build, push, deploy, and report.
- Integrate both Playwright HTML and Allure reports for visibility.

---

## Example Pipeline Flow
```mermaid
flowchart TD
    A[GitHub SCM] --> B[Jenkins Pipeline]
    B --> C[Install Dependencies]
    C --> D[Run Playwright Tests]
    D --> E[Build Docker Image]
    E --> F[Push to Docker Hub]
    F --> G[Kubernetes Deployment]
    G --> H[Publish Reports (HTML + Allure)]
```

---

## Author
Framework and Jenkins pipeline created by **Umar Mumtaz**  
*SQA Lead | Automation Engineer*
```

---

This `README.md` gives you a **central reference** for both Jenkins global setup and pipeline execution.  



          <----------------------------------------------->


Here’s a **comprehensive `README.md`** you can use to document the full CI/CD flow with **AWS EKS / Azure AKS / GKE** integration. It covers every step from VS Code to cloud deployment.


# Playwright + TypeScript + Jenkins + Docker + Kubernetes CI/CD Framework

## Overview
This framework demonstrates a complete CI/CD pipeline for Playwright automation using:
- **VS Code** → Development
- **GitHub** → Source Control
- **Jenkins** → CI/CD Automation
- **Docker Hub** → Image Registry
- **AWS EKS / Azure AKS / GKE** → Cloud Kubernetes Deployment

---

## CI/CD Flow

flowchart TD
    A[VS Code] --> B[GitHub Repository]
    B --> C[Jenkins Pipeline]
    C --> D[Docker Build]
    D --> E[Docker Hub Registry]
    E --> F[Cloud Kubernetes (EKS/AKS/GKE)]
    F --> G[Automated Tests + Reports]
```

---

## Step-by-Step Setup

### 1. Development in VS Code
- Write Playwright tests in TypeScript.
- Use Page Object Model (POM) for scalability.
- Store test data in JSON files.
- Configure Playwright in `playwright.config.ts`.

---

### 2. GitHub Integration
- Push project to GitHub.
- Protect branches with PR reviews.
- Store Jenkinsfile in repo for pipeline automation.

---

### 3. Jenkins Pipeline
Stages:
1. **Checkout SCM** → Pull code from GitHub.
2. **Install Dependencies** → `npm ci`.
3. **Install Playwright Browsers** → `npx playwright install`.
4. **Run Tests** → `npx playwright test`.
5. **Build Docker Image** → `docker build`.
6. **Push Image to Docker Hub** → `docker push`.
7. **Deploy to Kubernetes** → `kubectl apply`.
8. **Publish Reports** → Playwright HTML + Allure.

---

### 4. Docker Hub
- Login: `docker login`
- Build: `docker build -t pw-tests .`
- Tag: `docker tag pw-tests infodocker7410/pw-tests:latest`
- Push: `docker push infodocker7410/pw-tests:latest`

---

## Cloud Kubernetes Integration

### 🔹 AWS EKS
1. **Create Cluster**
   ```bash
   eksctl create cluster --name pw-tests-cluster --region ap-south-1 --nodes 2
   ```
2. **Configure kubeconfig**
   ```bash
   aws eks update-kubeconfig --region ap-south-1 --name pw-tests-cluster
   ```
3. **Create ECR Repository**
   ```bash
   aws ecr create-repository --repository-name pw-tests
   ```
4. **Push Image to ECR**
   ```bash
   aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.ap-south-1.amazonaws.com
   docker tag pw-tests:latest <account-id>.dkr.ecr.ap-south-1.amazonaws.com/pw-tests:latest
   docker push <account-id>.dkr.ecr.ap-south-1.amazonaws.com/pw-tests:latest
   ```
5. **Deploy to EKS**
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   kubectl rollout status deployment/pw-tests
   ```

---

### 🔹 Azure AKS
1. **Create Cluster**
   ```bash
   az aks create --resource-group myResourceGroup --name pw-tests-cluster --node-count 2 --enable-addons monitoring --generate-ssh-keys
   ```
2. **Configure kubeconfig**
   ```bash
   az aks get-credentials --resource-group myResourceGroup --name pw-tests-cluster
   ```
3. **Push Image to ACR**
   ```bash
   az acr login --name myRegistry
   docker tag pw-tests myRegistry.azurecr.io/pw-tests:latest
   docker push myRegistry.azurecr.io/pw-tests:latest
   ```
4. **Deploy to AKS**
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

---

### 🔹 Google GKE
1. **Create Cluster**
   ```bash
   gcloud container clusters create pw-tests-cluster --num-nodes=2 --region=us-central1
   ```
2. **Configure kubeconfig**
   ```bash
   gcloud container clusters get-credentials pw-tests-cluster --region us-central1
   ```
3. **Push Image to GCR**
   ```bash
   docker tag pw-tests gcr.io/<project-id>/pw-tests:latest
   docker push gcr.io/<project-id>/pw-tests:latest
   ```
4. **Deploy to GKE**
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

---

## Kubernetes Manifests

### deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pw-tests
spec:
  replicas: 2
  selector:
    matchLabels:
      app: pw-tests
  template:
    metadata:
      labels:
        app: pw-tests
    spec:
      containers:
      - name: pw-tests
        image: <cloud-registry>/pw-tests:latest
        ports:
        - containerPort: 3000
```

### service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: pw-tests-service
spec:
  type: LoadBalancer
  selector:
    app: pw-tests
  ports:
  - port: 80
    targetPort: 3000
```

---

## Verification
- Check pods: `kubectl get pods`
- Check deployments: `kubectl get deployments`
- Check services: `kubectl get services`
- Restart deployment: `kubectl rollout restart deployment pw-tests`

---

## Author
Framework created by **Umar Mumtaz**  
*SQA Lead | Automation Engineer*

---
```

This README now covers **all three cloud providers (AWS EKS, Azure AKS, GKE)** with exact commands, plus the full CI/CD flow from VS Code to cloud deployment.  
