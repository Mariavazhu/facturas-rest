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
                script{
                    if(isUnix()){
                        bat "docker build -t maria.a.vazquez/factura-node ."

                    }else{
                        bat "docker build -t maria.a.vazquez/factura-node ."

                    }
                }
                
            } 
        }

       stage("Ejecución de contenedor"){
           steps {
                script{
                    if(isUnix()){
                         bat "docker run -d --name factura-node -p 8081:8080 maria.a.vazquez/fatura-node"

                    }else{
                        bat "docker run -d --name factura-node -p 8081:8080 maria.a.vazquez/fatura-node"

                    }
                }
               bat "docker run -d --name factura-node -p 8081:8080 maria.a.vazquez/fatura-node"
           }
           
        }

        stage("Test del servicio"){
            steps {
                echo "Probando el servicio ..."
            }
        }

        stage("Cerrar recursos"){
           steps {
               script{
                   if(isUnix()){
                        bat "docker stop factura-node"
                        bat "docker container rm factura-node"
                        bat "docker image rm maria.a.vazquez/factura-node"

                   }else{ 
                         bat "docker stop factura-node"
                        bat "docker container rm factura-node"
                        bat "docker image rm maria.a.vazquez/factura-node"


                   }
               }
               



            }            
        }
    }
}
