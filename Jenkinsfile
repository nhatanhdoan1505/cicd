pipeline {
    agent any
    
    parameters {
        string(name: 'nhatanh', defaultValue: 'ok', description: 'Enter the Name Service')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Check out'
                }
                // git branch: 'main', url: 'https://github.com/nhatanhdoan1505/cicd.git/'
            }
        }

        stage('Echo Source Code Change') {
            when {
                anyOf {
                    // changeset "*"
                    expression { 
                        params.nhatanh == 'ok' 
                    }
                }
                anyOf{
                    branch 'main'
                }
            }
            steps {
                script {
                    echo 'Source code change'
                }
            }
        }
    }
}
