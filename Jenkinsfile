pipeline {

agent any

environment {
    IMAGE_NAME = "girish8764/omega-restaurant-frontend"
    APP_SERVER = "52.66.206.25"
}

stages {

    stage('Checkout') {
        steps {
            git branch: 'master',
                url: 'https://github.com/Girish8764/restaurant-frontend.git'
        }
    }

    stage('Build Image') {
        steps {
            sh '''
            docker build \
            -t $IMAGE_NAME:latest \
            -t $IMAGE_NAME:${BUILD_NUMBER} .
            '''
        }
    }

    stage('Push Image') {
        steps {
            withCredentials([
                usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )
            ]) {
                sh '''
                echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                docker push $IMAGE_NAME:latest
                docker push $IMAGE_NAME:${BUILD_NUMBER}
                '''
            }
        }
    }

    stage('Deploy Frontend') {
        steps {
            sshagent(['ec2-ssh-key']) {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@$APP_SERVER "

                cd /node

                sed -i 's/^FRONTEND_TAG=.*/FRONTEND_TAG=latest/' .env

                docker compose pull frontend

                docker compose up -d frontend

                docker image prune -f

                "
                '''
            }
        }
    }

    stage('Health Check') {
        steps {
            sshagent(['ec2-ssh-key']) {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@$APP_SERVER "

                for i in {1..10}; do
                    curl -f http://localhost:3000 && exit 0
                    echo Waiting for frontend...
                    sleep 5
                done

                exit 1

                "
                '''
            }
        }
    }
}

post {
    always {
        cleanWs()
    }
}

}

