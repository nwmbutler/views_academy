@Library('jenkins_shared') _

pipeline {
    agent any
    stages {
         stage("Using curl example") {
            steps {
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc"
                    final String response = sh(script: "curl -s -o public/teaching2.doc $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md"
                    final String response = sh(script: "curl -s $url", returnStdout: true).trim()
                    echo response
                }
                script {
                    final String url = "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
                    final String response = sh(script: "curl -s $url", returnStdout: true).trim()
                    echo response
                }
            }
        }
    }
}