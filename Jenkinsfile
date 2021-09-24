pipeline {
    agent any
    stages{

        stage("Descargar código de la aplicación"){
            steps{
                git "url"
            } 
        }        

        stage("Creación de imagen"){
            steps{
                bat "docker build -t jsalinas/app1 ."
            } 
        }

       stage("Ejecución de contenedor"){
           steps {
               bat "docker run -d --name app1 -p 8081:8080 jsalinas/app1"
           }
           
        }

        stage("Test del servicio"){
            steps {
                echo "Probando el servicio ..."
            }
        }

        stage("Cerrar recursos"){
           steps {
                bat "docker stop app1"
                bat "docker container rm app1" 
                
            }            
        }
    }
}
