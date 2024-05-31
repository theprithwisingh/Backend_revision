const express = require('express');
const {home,createUser,getUsers,deleteUsers,editUsers} = require('../controllers/userController.js')
const router = express.Router();
router.get('/',home);
router.post('/createuser',createUser);
router.get('getusers',getUsers);
router.delete('/deleteuser/:id',deleteUsers);
router.put('/edituser/:id',editUsers);

module.exports = router;