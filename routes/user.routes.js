const {getAllUser,addOneUser,deleteOneUser,updateOneUser} = require('../controllers/user.controller')

const express = require('express')
const userRouter = express.Router()


userRouter.get('/',getAllUser)
userRouter.post('/add',addOneUser)
userRouter.delete('/:id',deleteOneUser)
userRouter.put('/:id',updateOneUser)

module.exports = userRouter