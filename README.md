
# Node.js DevOps Lab: GitHub Actions & Workflows

This repository was created to understand the fundamentals of **GitHub Actions** and **CI/CD Workflows**. It is a simple Node.js Express server, with automated testing using Jest, and a basic deployment pipeline.

## 📁 Project Structure


```plaintext
devops-test/
├── .github/
│   └── workflows/
│       └── node-ci.yml      # The CI/CD "brain" (GitHub Actions)
├── public/
│   └── index.html           # Simple Frontend
├── server.js                # Express Backend (Exported for testing)
├── server.test.js           # Automated test suite (Jest + Supertest)
├── package.json             # Dependencies and Test scripts
└── README.md                # Project documentation
```

---

## ⚙️ How the Workflow Works

The GitHub Action defined in `.github/workflows/node-ci.yml` follows a strict lifecycle every time you interact with the code:

1. **Trigger**: You `push` code to the `main` branch or open a `Pull Request`.
2. **Environment**: GitHub spins up a fresh **Ubuntu Linux** virtual machine.
3. **Build**: It installs Node.js and your dependencies using `npm ci` (npm clean install).
4. **Test**: It runs `npm test`. If any test fails, the workflow stops and marks the build as **Red**.
5. **Deploy**: If (and only if) the tests pass, it sends a trigger to your hosting provider (like Render or Netlify) to update the live site.
    

---

## 🛠️ Setup & Installation

### 1. Local Development

To run this app on your own machine:
```bash
# Install dependencies
npm install
# Run the server
npm start
# Run the tests locally
npm test
```

### 2. Setting up the CD (Deployment)

To make the **Deploy** stage work, you need to connect your hosting provider:

1. Get a **Deploy Hook URL** from your host (e.g., [Render.com](https://render.com) or [Netlify.com](https://netlify.com)).
2. In this GitHub Repo, go to **Settings > Secrets and variables > Actions**.
3. Create a **New repository secret** named `DEPLOY_HOOK_URL`.
4. Paste your hook link as the value.

---

## 🧪 Testing Strategy

I used **Jest** and **Supertest** to ensure the API is healthy.
- **Jest**: The test runner that executes our logic.    
- **Supertest**: Simulates HTTP requests to our Express app without needing to manually start the server.

> **Note:** The `server.js` file uses `module.exports = app` to allow the test suite to "peer" into the code during the CI process.
