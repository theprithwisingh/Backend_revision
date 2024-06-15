const express = require('express');
const {signup, signin, getUser} = require('../controller/autoController');
const authRouter = express.Router();
const jwtAuth = require('../middleware/jwtAuth');

authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.get('/user',jwtAuth,getUser);
authRouter.get('/logout',jwtAuth,logout);
module.exports = authRouter;