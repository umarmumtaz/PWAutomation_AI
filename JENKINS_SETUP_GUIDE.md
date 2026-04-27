# Jenkins CI/CD Integration - Step by Step Guide

## Prerequisites

Before starting, ensure you have:
- ✅ Jenkins server running and accessible
- ✅ Code pushed to GitHub repository (`https://github.com/umarmumtaz/PWAutomation_AI`)
- ✅ Jenkinsfile in the repository root
- ✅ Required Jenkins plugins installed

---

## Step 1: Install Required Jenkins Plugins

### Access Jenkins Plugin Manager

1. Go to your Jenkins URL: `http://YOUR-JENKINS-IP:8080`
2. Click **Manage Jenkins** (left sidebar)
3. Click **Manage Plugins**
4. Click **Available** tab

### Install These Plugins

Search and install each one:

| Plugin Name | ID | Purpose |
|-------------|-----|---------|
| **GitHub** | github | GitHub integration |
| **GitHub Branch Source** | github-branch-source | Multibranch pipeline support |
| **HTML Publisher** | htmlpublisher | Display HTML test reports |
| **Pipeline: GitHub Groovy Libraries** | pipeline-github-lib | GitHub libraries for pipeline |
| **Git** | git | Git repository support |

**Steps to install:**
1. Search for plugin name
2. Check the checkbox
3. Click **Download now and install after restart**
4. ✅ Check **Restart Jenkins when installation is complete**

Jenkins will restart automatically.

---

## Step 2: Create GitHub Personal Access Token

### Generate Token from GitHub

1. Go to GitHub: `https://github.com/settings/tokens`
2. Click **Generate new token** → **Generate new token (classic)**
3. Fill in:
   - **Note**: `Jenkins CI/CD Access`
   - **Expiration**: 90 days (or as needed)
   - **Scopes** (checkboxes):
     - ✅ `repo` (full control of private repositories)
     - ✅ `admin:repo_hook` (write access to hooks)
     - ✅ `admin:org_hook` (organization hooks)
4. Scroll down, click **Generate token**
5. **Copy the token** (you'll only see it once!)

### Add Token to Jenkins Credentials

1. Go to Jenkins: `http://YOUR-JENKINS-IP:8080/credentials`
2. Click **System** → **Global credentials (unrestricted)**
3. Click **Add Credentials** (left sidebar)
4. Fill in:
   - **Kind**: `Username with password`
   - **Username**: `GitHub` (or your GitHub username)
   - **Password**: Paste the token you copied
   - **ID**: `github-token`
   - **Description**: `GitHub Personal Access Token for CI/CD`
5. Click **Create**

---

## Step 3: Create Jenkins Pipeline Job

### Create New Job

1. Click **New Item** (Jenkins home)
2. Enter name: `Playwright-Tests` (or any name)
3. Select **Pipeline**
4. Click **OK**

### Configure Git Repository

Under **Pipeline** tab:

1. **Definition**: Select `Pipeline script from SCM`
2. **SCM**: Select `Git`
3. Fill in Git details:
   - **Repository URL**: `https://github.com/umarmumtaz/PWAutomation_AI.git`
   - **Credentials**: Select `github-token` (from Step 2)
   - **Branch Specifier**: `*/master` (your current branch)
   - **Script Path**: `Jenkinsfile` (default - matches your repo root)

### Example Configuration

```
Repository URL:  https://github.com/umarmumtaz/PWAutomation_AI.git
Credentials:     [github-token] (your credential from Step 2)
Branches to build:
    Branch Specifier (blank for 'any'): */master
Script Path:     Jenkinsfile
```

### Build Triggers (Setup Auto-Trigger)

Enable these to automatically run tests on GitHub push:

- ✅ **GitHub hook trigger for GITScm polling**
- ✅ **Poll SCM** (optional, for fallback):
  - Schedule: `H/15 * * * *` (every 15 minutes)

---

## Step 4: Set Up GitHub Webhook

### Add Webhook to GitHub Repository

1. Go to your repo: `https://github.com/umarmumtaz/PWAutomation_AI/settings`
2. Click **Webhooks** (left sidebar)
3. Click **Add webhook**
4. Fill in:
   - **Payload URL**: `http://YOUR-JENKINS-IP:8080/github-webhook/`
     - Replace `YOUR-JENKINS-IP` with your actual Jenkins server IP/hostname
   - **Content type**: `application/json`
   - **Events**: Select `Just the push event`
   - **Active**: ✅ (checked)
5. Click **Add webhook**

### Verify Webhook Connection

1. After adding, GitHub will test the webhook
2. In webhook settings, scroll down to **Recent Deliveries**
3. You should see a green checkmark ✅ on the test delivery
4. Click on it to see the response details

---

## Step 5: Test the Connection

### Manual Trigger (First Time)

1. Go to your Jenkins job: `http://YOUR-JENKINS-IP:8080/job/Playwright-Tests/`
2. Click **Build Now** (left sidebar)
3. Watch the build execute in real-time:
   - Go to **Build History** → Click the build number (e.g., `#1`)
   - Click **Console Output** to see logs
   - Wait for completion

### Expected Output

```
Started by user admin
[Pipeline] Start of Pipeline
[Pipeline] node
[Pipeline] stage
[Pipeline] checkout
Checking out git https://github.com/umarmumtaz/PWAutomation_AI.git
...
[Pipeline] stage
...
Run Playwright tests
Run Playwright tests
+ npx playwright test
...
[Pipeline] End of Pipeline
Finished: SUCCESS
```

### View Test Report

After successful build:
1. Go to build page (e.g., `http://YOUR-JENKINS-IP:8080/job/Playwright-Tests/1/`)
2. Look for **Playwright Test Report** link in left sidebar
3. Click to view HTML report with test results

---

## Step 6: Automatic Trigger from GitHub

### Push a Commit to Trigger Build

```bash
# Make a small change to your code
echo "# Updated" >> README.md

# Commit and push
git add README.md
git commit -m "Trigger Jenkins build"
git push origin master
```

### Monitor Automatic Build

1. GitHub webhook sends event to Jenkins
2. Jenkins automatically creates build #2
3. Tests run automatically
4. View results same way as manual trigger

---

## Troubleshooting Connection Issues

### Issue: "Webhook delivery failed"

**Cause**: Jenkins URL not reachable from GitHub
**Fix**:
- For local Jenkins: Use `ngrok` to expose Jenkins publicly
  ```bash
  ngrok http 8080
  # Use generated URL in webhook payload URL
  ```
- For cloud Jenkins: Ensure security group allows GitHub IPs

### Issue: "Repository not found"

**Cause**: Wrong credentials or private repo access
**Fix**:
- Ensure GitHub token has `repo` scope
- Verify token isn't expired
- Test credentials in Jenkins:
  1. Pipeline → Definition → SCM → Test Connection
  2. Should show "Connection successful"

### Issue: "Jenkinsfile not found"

**Cause**: Script path incorrect
**Fix**:
- Verify file exists: `ls Jenkinsfile` in your repo
- Check **Script Path** setting: Must be `Jenkinsfile` (exact name)
- Ensure Jenkinsfile is committed to GitHub

### Issue: Tests run but report not showing

**Cause**: HTML Publisher plugin not installed
**Fix**:
- Install **HTML Publisher** plugin
- Restart Jenkins
- Rebuild job

---

## Verify Full CI/CD Flow

✅ **Complete Checklist:**

- [ ] Jenkins plugins installed (GitHub, HTML Publisher, etc.)
- [ ] GitHub personal access token created & added to Jenkins
- [ ] Jenkins job created with GitHub repo URL
- [ ] Jenkinsfile path configured (`Jenkinsfile`)
- [ ] GitHub hook trigger enabled in Jenkins
- [ ] GitHub webhook created & showing ✅ green checks
- [ ] Manual build triggered successfully
- [ ] Test report displays in Jenkins
- [ ] Git push triggers automatic build
- [ ] Webhook notification appears in GitHub

---

## Sample Commands for Testing Locally First

Before relying on Jenkins, test locally:

```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps

# Run tests locally
npx playwright test

# See the report
npx playwright show-report
```

If tests pass locally, they should pass in Jenkins too.

---

## Next Steps

Once everything is connected:

1. **Monitor builds**: `http://YOUR-JENKINS-IP:8080/job/Playwright-Tests/`
2. **View trends**: Track pass/fail over time
3. **Add notifications**: Slack, email alerts on failure
4. **Scale up**: Add more test suites or different browser configurations

Your CI/CD pipeline is now **automated end-to-end**! 🎉

