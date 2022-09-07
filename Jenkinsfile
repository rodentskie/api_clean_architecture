pipeline {
    agent {
        docker {
            image 'node:16.13.1-alpine'
            alwaysPull true
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
