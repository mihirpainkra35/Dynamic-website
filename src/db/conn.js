const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/dynamic",{
    useCreateIndex:false,
    useNewUrlParser:false,
    useUnifiedTopology:false
}).then(() => {
    console.log("connection successfull").catch((error) => {
        console.log(error);
    })
})