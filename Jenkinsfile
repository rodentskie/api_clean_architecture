pipeline {
    agent {
        docker {
            image 'node:16.13.1-alpine'
            args '-u root'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
