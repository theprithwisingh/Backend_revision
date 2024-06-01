const User = require('../models/userModel.js');

exports.home=(req, res)=>{
    res.send('hello world');
}

exports.createrUser = async(req,res)=>{
    //extract info
    try{
     const{name, email} = req.body

      if(!name||!email){
       throw new error('Name and email are required')
     }
     //finding user exitance
     const userExists = User.findOne({email});
      if(userExists){
         throw new Error('User already exists')
      }
     const user = await User.create({
        name,
        email
     })

     res.status(201).json({
        sucess:true,
        massege:"User create Successfully",
        user
     })
    }catch(error){
     console.log(error);
     res.status(400).json({
        sucess:false,
        message:"error.message",
        user
     })
    }
}

exports.getUsers = async(req, res)=>{
    try {
      const users = await User.find({})
       res.status(200).json({
         success:true,
         users
       })
    } catch (error) {
      console.log(error);
      res.status(400).json({
         success:false,
         message:error.message
      })
    }
}


exports.deleteUsers = async(req, res)=>{
   try {
     const userId = req.params.id;
     const user = await User.findByIdAndDelete(userId)
     res.status(200).json({
      success:true,
      message:"User deleted successfully"
     })
   } catch (error) {
     console.log(error);
     res.status(400).json({
        success:false,
        message:error.message
     })
   }
}

exports.editUsers = async(req, res)=>{
   try {
     const user = await User.findByIdAndDelete(req.params.id,req.body)
     res.status(200).json({
      success:true,
      message:'User updated successfulluy'
     })
   } catch (error) {
      console.log(error);
      res.status(400).json({
         success:false,
         message:error.message
      })
   }
}