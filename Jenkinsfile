pipeline {
    agent { docker { 
        image 'node:16.13.1-alpine' 
        args '-p 3000:3000'
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
