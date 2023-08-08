const express = require('express')
var cors = require('cors')
const router = require('./routes/router')
const { default: mongoose } = require('mongoose')
const uri = "mongodb+srv://hritik:DV3zW2dyz5sd8Dd4@cluster0.7xhuq.mongodb.net/moviefinder?retryWrites=true&w=majority";
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})

// const db = mongoose.connection

// db.on('error', (err)=>{
//   console.log(err);
// })

// db.once('open', () => {
//   console.log('Database connected');
// })

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })

// //routing
// app.use(router)
app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });
  
app.listen(3000)

module.exports = app;