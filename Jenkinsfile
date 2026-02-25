pipeline {
    agent any

    tools {
         git 'Default'   // must match the name you configured

        nodejs "NodeJS"   // must match the name you configured in Jenkins
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/umarmumtaz/PWAutomation_AI.git',
                    credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo '🌐 Installing Playwright browsers and system dependencies...'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Playwright tests...'
                bat 'npx playwright test --reporter=junit --reporter=html'
            }
        }
    }

    post {
        always {
            echo '📊 Archiving test reports...'

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])

            junit testResults: 'test-results/results.xml',
                  allowEmptyResults: true,
                  skipPublishingChecks: true

            archiveArtifacts artifacts: 'test-results/**,playwright-report/**',
                             allowEmptyArchive: true,
                             onlyIfSuccessful: false
        }

        success {
            echo '✅ All tests passed!'
        }

        failure {
            echo '❌ Tests failed! Check the Playwright report for details.'
        }

        unstable {
            echo '⚠️ Tests are unstable. Review the report.'
        }
    }
}