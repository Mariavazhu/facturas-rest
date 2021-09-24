pipeline {
    agent any
    stages{

        stage("Descargar código de la aplicación"){
            steps{
                git "https://github.com/Mariavazhu/facturas-rest.git"
            } 
        }        

        stage("Creación de imagen"){
            steps{
                bat "docker build -t maria.a.vazquez/factura-node ."
            } 
        }

       stage("Ejecución de contenedor"){
           steps {
               bat "docker run -d --name app1 -p 8081:8080 maria.a.vazquez/fatura-node"
           }
           
        }

        stage("Test del servicio"){
            steps {
                echo "Probando el servicio ..."
            }
        }

        stage("Cerrar recursos"){
           steps {
                bat "docker stop facturas-node"
                bat "docker container rm facturas-node" 

            }            
        }
    }
}
