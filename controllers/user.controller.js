const userSchema=require('../models/user.model')



exports.getAllUser = async(req,res)=>{
    try {
      const users = await userSchema.find();
      if(!users){
          return res.status(400).send({msg:'user collections is empty'})
      } 
      return res.status(200).send({users}) 
    } catch (error) {
        return res.status(500).send({msg:error})
        
    }
}

exports.addOneUser = async(req,res)=>{
    const{email} = req.body
    try {
      const userExist = await userSchema.findOne({email:email});
      if(userExist){
          return res.status(400).send({msg:'user exist'})
      } 
      const newuser = new userSchema(req.body)
      
      await newuser.save()
      return res.status(200).json({msg:'succefully added to user collection'})
    } catch (error) {
        return res.status(500).send({msg:error})
        
    }
}

exports.updateOneUser = async(req,res)=>{
    const {id} = req.params
    try {
        
      const updateUser = await userSchema.findByIdAndUpdate(id,{$set:{...req.body}});
      if(!updateUser){
          return res.status(400).send({msg:'user not exist'})
      } 
      return res.status(200).send({msg:'user updated'}) 
    } catch (error) {
        return res.status(500).send({msg:error})
        
    }
}

exports.deleteOneUser = async(req,res)=>{
    const {id} = req.params
    try {
      const deleteUser = await userSchema.findByIdAndDelete(id);
      if(!deleteUser){
          return res.status(400).send({msg:'user not exist'})
      } 
      return res.status(200).send({msg:'user deleted'}) 
    } catch (error) {
        return res.status(500).send({msg:error})
        
    }
}
