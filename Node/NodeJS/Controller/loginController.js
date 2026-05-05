import student from "../Model/crudSchema.js"
import bcrypt from "bcryptjs"

export const registerUser = async(req,res)=>{
    try{
        const {name,email,age,password} = req.body
        const registeredUser = await student.findOne({email})
        if(registeredUser){
            res.json(402).json("User Already exist")
        }
        else{
            const Salt = await bcrypt.genSalt(10)
            const hassedPassword = await bcrypt.hash(password,Salt)
            const inserNewuser = await student({name:name,email:email,age:age,password:hassedPassword}).save()
            return res.status(201).json("New user Addes succesfully")
        }
    }catch(err){
        return res.status(404).json("Unable to add New user")
    }
}

export const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body
        const exist = await student.findOne({email})
        if(!exist){
            res.status(404).json("User not found")
        }
        const match = await bcrypt.compare(password,exist.password)
        if(!match){
            res.status(402).json("invalid email or password")
        }
        res.status(201).json("Logged in sucessfully")
    }catch(err){
        res.status(421).json(err)
    }
}