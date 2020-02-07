pipeline {
    agent {
        docker {
            image 'node:8'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages { 
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps {
                sh 'echo $WORKSPACE'
                sh -x '$WORKSPACE/post-deploy.sh'
            }
        }
    }
}
