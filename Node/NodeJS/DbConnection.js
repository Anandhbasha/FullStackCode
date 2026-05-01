import mongoose from "mongoose";

const Db = (URL)=>{
    try{
        mongoose.connect(URL);
        const dataBase = mongoose.connection
        dataBase.once("open", () => {
        console.log("Connected to MongoDB");
        });
    }
    catch(err){
        console.log("Error connecting to MongoDB:", err);
    }
}

export default Db