import express from 'express';
import Db from './DbConnection.js';
import router from './Router/router.js';

const app = express();
app.use(express.json());

app.use("/stu",router)

const PORT = 3000;

Db("mongodb://127.0.0.1:27017/Newone")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});