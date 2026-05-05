import express from 'express';
import Db from './DbConnection.js';
import router from './Router/router.js';
import cors from "cors"

const app = express();
app.use(express.json());



const PORT = 4820;

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:['Content-Type','Authorization']
}))
app.use("/stu",router)

Db("mongodb://127.0.0.1:27017/Newone")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});