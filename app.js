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
mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Mongo connected!"));





app.get('/', (req, res) => res.send('Welcome to Amazon Pocket Book Management System!'))
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });