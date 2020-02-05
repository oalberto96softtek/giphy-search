pipeline {
    agent {
        docker {
            image 'node:8'
            args '-p 3002:3002'
        }
    }
    stages { 
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
    }
}
