pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    parameters {
        string(
            name: 'PORT',
            defaultValue: '3000',
            description: 'Puerto en el que se servirá la aplicación'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/QA']],
                    userRemoteConfigs: scm.userRemoteConfigs
                ])
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    # Instalar serve si no está disponible
                    npm list -g serve || npm install -g serve

                    # Reiniciar o crear el proceso PM2
                    pm2 delete total-singers || true
                    pm2 serve dist ${params.PORT} --name total-singers --spa
                    pm2 save
                """
            }
        }
    }

    post {
        success {
            echo "✓ Desplegado en http://localhost:${params.PORT}"
        }
        failure {
            echo "✗ El despliegue falló. Revisa los logs arriba."
        }
    }
}
