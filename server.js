const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const bodyParser =require('body-parser');
const cors =require('cors');
require('dotenv').config();
const {readdirSync}=require("fs");
const cookieParser = require('cookie-parser');
const fileRoute = require('./routes/file');
const path = require('path');


require('./db/db');


const app= express();

//mongo
mongoose.connect(process.env.DATABASE)
.then(()=> console.log("DB connected"))
.catch((err)=> console.log("DB Error",err));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
// app.use(cors());
app.use(cookieParser());
app.use(cors({
    origin: '*'
  }));
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.use(fileRoute);
  
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });

//routes middleware
readdirSync("./routes").map((r)=> app.use("/api",require("./routes/"+r)));

//port
const port=process.env.PORT || 8001;

app.listen(port,()=>console.log(`Server is running on port ${port}`));
