import express from 'express'
import router from './Router/router.js'

const app = express()
app.use(express.json())

const PORT = 3256

app.use("/crud",router)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})