# careProtocol Development Workflow Setup

This document outlines the setup steps for establishing the development workflow for the careProtocol project. This setup will cover project planning, version control, CI/CD configuration, tooling installation, and documentation management.

---

## 1. Project Planning and Collaboration Setup

### Set Up GitHub Projects and Wiki
- **GitHub Projects**: Use GitHub Projects to manage tasks and track the progress of each phase.
  - Create a **project board** for high-level tasks, milestones, and phase-based tracking.
  - Set up columns for task statuses (e.g., "To Do," "In Progress," "Done") to visualize workflows.
- **GitHub Wiki**: Use the GitHub Wiki to maintain project documentation, including:
  - **Project Overview** and **Architecture**: High-level information on the project and technical details.
  - **Development Phases**: Document each phase with relevant goals, features, and components.
  - **Knowledge Base**: Add non-technical content and contextual information relevant to mutual aid principles.

---

## 2. Version Control and Repository Setup on GitHub

### Create GitHub Repository
- **Repository Structure**:
  - `frontend/`: Code for the React Native application.
  - `backend/`: Code for Motoko on the Internet Computer (ICP).
  - `docs/`: Documentation files.
  - `tests/`: Cypress E2E test files.

### Define Branching Strategy
- **Main Branch**: Stable, production-ready code.
- **Development Branch**: Active development branch.
- **Feature Branches**: Create a new branch for each feature or phase, e.g., `feature-authentication`, `feature-payment-integration`.

---

## 3. Continuous Integration/Continuous Deployment (CI/CD) Configuration with GitHub Actions

### Create a GitHub Actions Workflow
- Set up GitHub Actions for automated testing and deployment. Add a `.github/workflows/ci.yml` file with the following steps:
  - **Install Dependencies**: Steps for React Native, Motoko, Axios, Redux, and Cypress.
  - **Run Cypress Tests**: E2E tests to validate critical user flows.
  - **Deploy to Staging Environment (Optional)**: Deployment steps for internal testing in later phases.

### Add Secrets to GitHub
- Store sensitive information securely in **GitHub Secrets**, such as:
  - API keys
  - ICP credentials
  - Payment processor details

---

## 4. Tooling Installation for Development

### Front-End and Back-End Tools

- **React Native and Expo CLI**: Install for front-end development.
  - **Installation**: Run `npm install -g expo-cli` to install Expo globally.
  
- **Motoko SDK**: Set up DFINITY SDK (`dfx`) for Internet Computer development and Motoko testing.
  - **Installation**: Follow the [DFINITY SDK setup guide](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html) to install `dfx`.

- **Redux**: Install Redux and Redux Toolkit for state management in the React Native app.
  - **Installation**: Run `npm install @reduxjs/toolkit react-redux` to set up Redux in the project.

- **Axios**: Install Axios for HTTP requests between the front end and back end.
  - **Installation**: Run `npm install axios`.

- **Cypress for E2E Testing**: Install Cypress and set up initial E2E tests (e.g., user login and navigation flows).
  - **Installation**: Run `npm install cypress --save-dev` to include Cypress as a dev dependency.

### GitHub Copilot for Coding Assistance
- Ensure developers have access to GitHub Copilot for support with writing Motoko and JavaScript.

---

## 5. Project Documentation Setup on GitHub Wiki

### Initialize GitHub Wiki
- Use the GitHub Wiki to host all technical documentation and guides:
  - **Phase Documentation**: Document each phase’s features and goals.
  - **API Reference and Architecture**: Maintain technical references, including API documentation and system architecture.
  - **User Guide**: Include a user guide for app features and workflows.

### Document Transfer from Notion (Optional)
- If initial drafts are in Notion, transfer them to the GitHub Wiki for version control and team accessibility.

---

## 6. Basic Monitoring and Feedback Setup

### User Feedback Collection (Optional)
- Add a feedback form within the app to gather early impressions, focusing on authentication and navigation.

### Tracking Initial Metrics
- Track metrics such as E2E test success rates and duration within GitHub Projects for analysis and workflow improvement.

---

This setup will provide a robust foundation for development, version control, testing, and documentation management throughout the careProtocol project.
