const mongoose =require('mongoose');

const MyDataSchema = new mongoose.Schema({
    username:{
        type:String
    }
})


const MyData = new mongoose.model('MyData',MyDataSchema)

module.exports=MyData;