pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    environment {
        DEPLOY_HOST = '115.191.18.218'
        DEPLOY_USER = 'root'
        DEPLOY_PATH = '/opt/bookman-web'
        APP_DOMAIN = 'www.bookman.chat'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.SHORT_SHA = sh(script: 'git rev-parse --short=12 HEAD', returnStdout: true).trim()
                }
            }
        }

        stage('Verify') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$PWD":/app \
                      -w /app \
                      node:20-alpine \
                      sh -lc "npm ci && npm test && npm run build"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t "bookman-web:${SHORT_SHA}" .
                '''
            }
        }

        stage('Deploy To Huoshan') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'huoshan-root-deploy',
                        keyFileVariable: 'SSH_KEY_PATH',
                        usernameVariable: 'SSH_REMOTE_USER'
                    )
                ]) {
                    sh '''
                        export DEPLOY_USER="${SSH_REMOTE_USER}"
                        export SHORT_SHA="${SHORT_SHA}"
                        chmod 600 "${SSH_KEY_PATH}"
                        bash scripts/deploy.sh
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Bookman deployed successfully (${env.SHORT_SHA})"
        }
        failure {
            echo '❌ Bookman deployment failed'
        }
    }
}
