const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const MyData = require('./models/myDataSchema')

app.set('view engine','ejs');

app.get('/', (req, res) => {
    MyData.find().then((result)=>{
        res.render('home',{myTitle:'Home Page',arr:result});
    })
    .catch((err)=>{
        console.log(err)
    })

    
})



app.get('/index.html', (req, res) => {
    res.send(" <h1>Submitted Data Successfully😃</h1>")
})
app.post('/', (req, res) => {
    console.log(req.body);

    const myData = new MyData(req.body);


    myData.save().then(() => {
        res.redirect('/index.html')
    }).catch(err => {
        console.log(err);
    })

})


mongoose.connect('mongodb+srv://hamdiashraf:3pyQBRV5atlV6XS1@cluster0.rempz7k.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
    })

}).catch((err) => console.log(err))