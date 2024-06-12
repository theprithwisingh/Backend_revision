const userModel = require("../model/userSchema");
const emailValidator = require("email-validator")

const signup = async (req, res, next)=>{
    const {name,email, password,confirmPassword} = req.body;
    console.log(name,email, password,confirmPassword);
    //Every field is required-logic
    if (!name ||!email||!password ||!confirmPassword ) {
        return res.status(400).json({
            success:false,
            message:'Every field is required'
        })
    }
   //Please provide a valid email id -logic
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success:false,
            message:'Please provide a valid email id'
        })
    }
    //Password and confirm password doesn't match-logic
    if (password!==confirmPassword) {
        return res.status(400).json({
            success:false,
            message:"Password and confirm password doesn't match"
        })
    }


try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
    sucess:true,
    data:result
});
    } catch (e) {
        //Account already exists with provided email id -logic
        if (e.code===11000) {
            return res.status(400).json({
                sucess:false,
                message:'Account already exists with provided email id'
            })
        }
        return res.status(400).json({
            sucess:false,
            message:e.message
        })
    }
    
}

//SIGNIN CONTROLLER
const signin =async(req, res)=>{
    const {email, password}  =req.body;

    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message:'Every field is mandatory'
        })
    }
   //send req to database for valid user and passward 
    const user = await userModel
          .findOne({
            email
          })
          .select('+password');

    if (!user|| user.password!==password) {
        return res.status(400).json({
            success:false,
            message:'invalid credentials'
        })
    }
    
    
}

module.exports = {
    signup,
    signin
}