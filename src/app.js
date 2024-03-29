const express = require('express');
const path = require('path');
const hbs = require('hbs')
// require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath = path.join(__dirname,"../public");
const templete = path.join(__dirname,"../templates/views");
const partials = path.join(__dirname,"../templates/partials");

//middlware
app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/bootstrap/dist")));
app.set("view engine","hbs"); 
app.set("views",templete);
hbs.registerPartials(partials)

//routing
app.get('/',(req,res)=>{

    res.render("index");

})
app.get('/contact',(req,res)=>{

    res.render("contact");

})

app.listen(port,()=>
console.log(`http://localhost:${port}`)
)