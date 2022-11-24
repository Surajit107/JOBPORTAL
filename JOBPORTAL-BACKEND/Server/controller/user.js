import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'

const secret = "test";

export const sigin=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const oldUser=await userModel.findOne({email})

        if(!oldUser){
            return res.status(400).json({'message':"user not exist"})
        }
        const isPassword=await bcrypt.compare(password,oldUser.password)
        if(!isPassword){
            return res.status(400).json({'message':"invalid credential"})
        }
        const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"1h"})
        res.status(201).json({result:oldUser,token})

    }catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }

}

export const singup= async(req,res)=>{
    const { email, password, firstName, lastName } = req.body;
    try{
        const oldUser=await userModel.findOne({email});
        if(oldUser){
            return res.status(400).json({'message':"user already exist"})

        }
        const hashPassword=await bcrypt.hash(password,12);
        const result=await userModel.create({
            email,
            password:hashPassword,
            name:`${firstName} ${lastName}`,
        });
        const token=jwt.sign({email:result.email,id:result._id},secret,{expiresIn:"1h"})
         res.status(201).json({result,token})
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
}


export const googleSignIn = async (req, res) => {
    const { email, name, token, googleId } = req.body;
  
    try {
      const oldUser = await userModel.findOne({ email });
      if (oldUser) {
        const result = { _id: oldUser._id.toString(), email, name };
        return res.status(200).json({ result, token });
      }
  
      const result = await userModel.create({
        email,
        name,
        googleId,
      });
  
      res.status(200).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };