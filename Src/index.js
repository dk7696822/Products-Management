const express = require("express");
const router = require("./Router/route");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/url_shortner?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then(()=> console.log("Mongodb is connected"))
.catch(err => console.log(err))

app.use('/',router)

app.listen(3000, function(){
    console.log(`Express app running on this PORT address ${3000}`)
})