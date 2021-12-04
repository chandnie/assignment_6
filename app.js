require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const mongoose = require("mongoose");

const RegistrationRoutes = require("./Routers/RegistrationRoute");
const WalletRoutes = require("./Routers/AmazonPocketRoute");


app.use("/Registration", RegistrationRoutes);
app.use("/Wallet", WalletRoutes);



// const url = "mongodb+srv://chandni:chandni123@@@cluster0.fwd1g.mongodb.net/testing?retryWrites=true&w=majority"
const url = "mongodb+srv://chandni:chandni123@@@cluster0.fwd1g.mongodb.net/test"
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://chandni:chandni123@@@cluster0.fwd1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });





app.get('/', (req, res) => res.send('Welcome to Amazon Pocket Book Management System!'))
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });