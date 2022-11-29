import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoutes.js';
import data_livingroom from './data_livingroom.js';
import data_bedroom from './data_bedroom.js';
import data_diningroom from './data_diningroom.js';
import {dirname} from 'path'
import path from 'path'


dotenv.config(); //fetches variables from dotenv file
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err.message);
  });

  const app=express(); //creating express app
  app.use(express.static('static'))
 
//url, function that responds to object 

  app.get('/api/products/livingroom', (req, res) => {
      res.send(data_livingroom.products);
      console.log(data_livingroom.products);
    });

  app.get('/api/products/bedroom', (req, res) => {
    res.send(data_bedroom.products);
    console.log(data_bedroom.products);
  });

  app.get('/api/products/diningroom', (req, res) => {
    res.send(data_diningroom.products);
    console.log(data_diningroom.products);
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

app.use('/api/seed',seedRouter);
app.use('/api/users',userRouter);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});
const port=process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`serve at  http://127.0.0.1:${port}`);
});


 