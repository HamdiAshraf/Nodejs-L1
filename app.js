const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");



app.get('/', (req, res) => {
    res.sendFile('./views/homePage.html', { root: __dirname });
})




mongoose.connect('mongodb+srv://hamdiashraf:3pyQBRV5atlV6XS1@cluster0.rempz7k.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
    })

}).catch((err) => console.log(err))