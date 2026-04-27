pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        CI = "true"
        DOCKER_IMAGE = "infodocker7410/pw-tests"
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test tests/Login --reporter=html --workers=2 --retries=1'
            }
        }

        // ✅ Only build if tests pass
        stage('Build Docker Image') {
            when {
                expression { currentBuild.result == null }
            }
            steps {
                bat "docker build -t %DOCKER_IMAGE%:${BUILD_NUMBER} ."
                bat "docker tag %DOCKER_IMAGE%:${BUILD_NUMBER} %DOCKER_IMAGE%:latest"
            }
        }

        // ✅ Secure Docker login
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
                )]) {

                    bat """
                    echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                    docker push %DOCKER_IMAGE%:${BUILD_NUMBER}
                    docker push %DOCKER_IMAGE%:latest
                    """
                }
            }
        }

        // ✅ OPTIONAL: Only if you want to validate container
        stage('Run Tests in Docker (Optional)') {
            steps {
                bat "docker run --rm -e CI=true %DOCKER_IMAGE%:${BUILD_NUMBER}"
            }
        }

        // ✅ Kubernetes Deployment
        stage('Deploy to Kubernetes') {
            steps {
                bat """
                kubectl set image deployment/pw-tests pw-tests=%DOCKER_IMAGE%:${BUILD_NUMBER}
                kubectl rollout status deployment/pw-tests
                """
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }

        success {
            echo '✅ Pipeline Successful'
        }

        failure {
            echo '❌ Pipeline Failed'
        }
    }
}




/*

//Purpose: Build and run the image locally, without Docker Hub.

stage('Build Docker Image') {
    steps {
        bat 'docker build -t pw-tests .'
    }
}
//this command or stage us run without docker hub, running form the local machine, so we can test the docker image before pushing to hub
        stage('Run Playwright in Docker') {
            steps {
                // Mount Jenkins workspace into container so reports are accessible
                bat 'docker run --rm -e CI=true pw-tests'
            }
        }
    }



*/