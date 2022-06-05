const express =require('express')
const app = express()
const ConnectDb = require('./config/connectDb')
const userRouter = require('./routes/user.routes')
require('dotenv').config() 

app.use(express.json())
app.use('/user',userRouter)
const PORT = 5000 ||process.env.PORT;
ConnectDb()

app.listen(PORT,(err)=>{
if (err) throw console.log(err)
console.log('listen to port '+PORT)
})