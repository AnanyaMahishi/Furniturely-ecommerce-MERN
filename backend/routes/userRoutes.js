import express from "express";
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter=express.Router();

userRouter.post(
    '/login',
    expressAsyncHandler(async(req,res)=>{
        const user=await User.findOne({email:req.body.email});
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user),
                  });
                  return;
            }
        }
        res.status(401).send({message:'Invalid email or password'});
    })
);

export default userRouter;