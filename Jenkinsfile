pipeline {
    agent any

    options {
        timeout(time: 60, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo '🌐 Installing Playwright browsers and system dependencies...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Playwright tests...'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo '📊 Archiving test reports...'
            
            // Archive HTML report
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])

            // Publish test results
            junit testResults: 'test-results.json', 
                  allowEmptyResults: true,
                  skipPublishingChecks: true

            // Archive test results and traces
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
