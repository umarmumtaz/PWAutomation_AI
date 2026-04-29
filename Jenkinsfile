
pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        CI = "true"
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

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

        stage('Run Login Test Suite') {
            steps {
                bat 'npx playwright test tests/Login --reporter=html'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t infodocker7410/pw-tests:${BUILD_NUMBER} ."
                bat "docker tag infodocker7410/pw-tests:${BUILD_NUMBER} infodocker7410/pw-tests:latest"
            }
        }

        stage('Push Docker Image') {
            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {

                    bat "docker login -u %DOCKER_USER% -p %DOCKER_PASS%"

                    bat "docker push infodocker7410/pw-tests:${BUILD_NUMBER}"

                    bat "docker push infodocker7410/pw-tests:latest"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {

                bat """
                kubectl set image deployment/pw-tests ^
                pw-tests=infodocker7410/pw-tests:${BUILD_NUMBER}
                """

                bat 'kubectl rollout status deployment/pw-tests'
            }
        }
    }

    post {

        always {

            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )

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
            echo '✅ Pipeline Passed Successfully'
        }

        failure {
            echo '❌ Pipeline Failed'
        }
    }
}




//updated
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