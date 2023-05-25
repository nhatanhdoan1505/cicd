pipeline {
    agent {
        // Define the agent for running the pipeline
    }
    stages {
       stage('Checkout Source Code') {
        when {
            changeset "*"
            branch 'main'
        }
        steps {
        echo "Source code change"
        }
    }
    }
}
