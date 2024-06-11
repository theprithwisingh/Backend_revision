const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    name: {
      type: String,
      required:[true,'user name is Required'],
      minLength:[5,'Name must be at least 5 char'],
      maxLength:[50,'Name must be at less 50 char'],
      trim:true
    },
    email: {
      type: String,
      required:[true,'user email is required'],
      unique:true,
      lowercase:true,
      unique:[true, 'already registered']

    },
    password: {
      type: String,
      select:false,
      required:true
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiryDate: {
      type: Date,
    }
  }, {
    timestamps: true
  });

const userModel= mongoose.model('user', userSchema);
module.exports = userModel;