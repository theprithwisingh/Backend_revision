const userModel = require("../model/userSchema");
const emailValidator = require("email-validator")
const bcrypt = require('bcrypt');

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
 //if validation is wrong 
    if (!user|| (await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
            success:false,
            message:'invalid credentials'
        })
    }
    }
    
    try {
        const token= user.jwtToken();
        user.password = undefined;
    
        //security purpose
        const cookieOption = {
            maxAge:24*60*60*1000,
            httpOnly:true
        };
    
        res.cookie("token", token, cookieOption);
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (e) {
        res.status(400).json({
            success:false,
            massage:e.message
        })
    }

    const getUser =async (req,res)=>{
     const userId  =req.user.id;
     try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success:true,
            data:user
        });
    } 
    catch (error) { 
        res.status(400).json({
            success:false,
            massage:e.message
        })
    }
    }

    const logout=(req,res)=>{
        try {
            const cookieOption={
                expires: new Date,
                httpOnly:true
            };
            res.cookie("token",null,cookieOption);
            res.status(200).json({
                success:false,
                massage:"Loggged Out"
            })
        } catch (e){
            res.status(400).json({
                success:false,
                massage:e.message
            })
        }
    }
    module.exports = {
    signup,
    signin,
    getUser,
    logout
    }