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
        script {
            if (env.BRANCH_NAME == 'dev')
            {
                sh '''cd ios/App
                    fastlane beta'''
                sh '''cd android
                    fastlane beta'''
            }
            else {
                echo "====++++ nothing to do ++++===="
            }
        }
      }
    }

    stage('deploy') {
      steps {
        script {
            if (env.BRANCH_NAME == 'release')
            {
                sh '''cd ios/App
                    fastlane deploy'''
                sh '''cd android
                    fastlane deploy'''
            }
            else {
                echo "====++++ nothing to do ++++===="
            }
        }
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
