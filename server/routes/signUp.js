const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const {name, email, password, role} = req.body

        const user = await User.findOne({email})

        if (user) {
            res.status(400).json({error: 'user already exists'})
            return
        }
        
        const newUser = await User.create({
            name,
            email,
            password,
            role
        })

        res.json(newUser)
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router