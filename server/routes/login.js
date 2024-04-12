const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email, password})

        console.log('user', user)
        if (user) {
            res.json(user)
        } else {
            res.status(401).json({error: 'user does not exist'})
        }
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router