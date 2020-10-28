@Library('jenkins_shared') _

node {
    env.NODEJS_HOME = "${tool 'NodeJsv12.16.2'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    sh 'npm --version'
    stage('Preparation') { 
       }
}

pipeline {
    agent any
    stages {
         stage("Using curl example") {
            steps {
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc"
                    final String response = sh(script: "curl -s -o public/teaching.txt $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md"
                    final String response = sh(script: "curl -s -o public/idc.txt $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
                    final String response = sh(script: "curl -s -o public/milestones.txt $url", returnStdout: true).trim()
                    echo response
                }
            }
        }
    }
}