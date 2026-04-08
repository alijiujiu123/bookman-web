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
        HOST_WORKSPACE_ROOT = '/opt/jenkins/data/workspace'
        IMAGE_ARCHIVE_DIR = '/tmp'
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
                      -v "${HOST_WORKSPACE_ROOT}/${JOB_NAME}":/app \
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
                    docker save -o "${IMAGE_ARCHIVE_DIR}/bookman-web-${SHORT_SHA}.tar" "bookman-web:${SHORT_SHA}"
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
                        export IMAGE_ARCHIVE_PATH="${IMAGE_ARCHIVE_DIR}/bookman-web-${SHORT_SHA}.tar"
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
        always {
            sh '''
                rm -f "${IMAGE_ARCHIVE_DIR}/bookman-web-${SHORT_SHA}.tar"
            '''
        }
    }
}
