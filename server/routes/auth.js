const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email, password})

        if (user) {
            req.session.user = user
            res.json(user)
            
        } else {
            res.status(401).json({error: 'user does not exist'})
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/logout', function(req,res){
    if(req.session.user){
      req.session.destroy()
    }
    res.status(200).json({ message: 'Logout successful' });
})

router.get('/user', function(req,res) {
    if(req.session.user){
      res.json(req.session.user)
    } else {
    res.status(401).json({ message: 'No user logged in' });
    }
})

module.exports = router