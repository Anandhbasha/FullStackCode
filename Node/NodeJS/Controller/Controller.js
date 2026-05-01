import { Aggregate } from "mongoose"
import student from "../Model/crudSchema.js"

export const readData = async(req,res)=>{
    try{
        const data = await student.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

export const insertData = async(req,res)=>{
    try{
        const { name, email, age ,password} = req.body;
        const existUser = await student.findOne({ email });
        if (existUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const data = await student.insertOne({ name, email, age ,password});
        res.status(201).json(data);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}


export const updateData = async(req,res)=>{
    try{
        const { email } = req.params;
        const { age } = req.body;
        const existUser = await student.findOne({ email })
        if (!existUser) {
            return res.status(404).json({ error: "User not found" });
        }
        const data = await student.updateOne({email}, {$set:{age: age}});
        res.status(200).json(data);
    }   
    catch(err){
        res.status(500).json({error: err.message});
    }       
}


export const deleteUser = async(req,res)=>{
    try{
        const { email } = req.params;
        const existUser = await student.findOne({ email })
        if (!existUser) {
            return res.status(404).json({ error: "User not found" });
        }
        const data = await student.deleteOne({email});
        res.status(200).json("User deleted successfully");
    }   
    catch(err){
        res.status(500).json({error: err.message});
    }       
}