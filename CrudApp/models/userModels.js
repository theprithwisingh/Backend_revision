const mongoose  = require;

const userSchema = new mongoose.schema({
    name:{
        type:String,
        required:[true,'Name is requires'],
        trim:true,
        maxLength:[20,'Name must be less than 20 char']
    },

    email:{
        type:String,
        required:[true,'Email is requires'],
        unique: true
    }
})

module.exports  = mongoose.model("User", userSchema)