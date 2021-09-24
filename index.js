
const express = require("express");
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const cors = require("cors");
const app=express();
app.use(express.json());

app.use(cors());

 



const connectionString = "mongodb+srv://administrador:administrador@clustercurso.rlfof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const port = 8080;

mongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {

        // Todo el codigo de acceso a bases de datos
        console.log("Conectado a base de datos");

        const facturas = client.db("myFirstDatabase").collection('facturas');
        //gestion de factura

        //crear factura

        app.post("/facturas", function (req, res) {

            let factura = request.body;

            facturas.insertOne(factura).then(result => {
                console.log(result);
            }).catch(err =>{
                console.error(err);
            });

            response.send("ok");

        }),


        // Recuperar facturas
        app.get("/facturas", (request, response) => {

            // recuperar la factura de la base de datos
            facturas.find().toArray().then(facturas => {
                response.json(facturas);
            }).catch(err => {
                console.error(err);
            });
        });


        //recuperar factura por id

        app.get("/facturas/:facturaId", (request, response) => {

            let facturaId = request.params.facturaId;

            let o_id = new mongo.ObjectId(facturaId);
            let query = { _id: o_id };

            // recuperar la factura de la base de datos
            facturas.findOne(query).then(factura => {
                response.json(factura);
            }).catch(err => {
                console.error(err);
            });
        });

        //actualizar factura


        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        });



    }).catch(error => console.error(err));


