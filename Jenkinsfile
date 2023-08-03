pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm i --force'
        sh 'ionic cap sync'
      }
    }

    stage('beta') {
      steps {
        sh '''cd ios/App
fastlane beta'''
        sh '''cd android
fastlane beta'''
      }
    }

  }
  tools {
    nodejs 'node'
  }
  environment {
    PATH = '/usr/local/bin:/usr/bin:/bin:/Users/hoanganh/.nvm/versions/node/v16.20.0/bin:/Users/hoanganh/.rvm/gems/ruby-3.2.1/bin'
  }
}
