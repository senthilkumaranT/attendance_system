const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Adjust the path as necessary
const bcrypt = require('bcrypt');

// @route   POST /signup
// @desc    Register user
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            email,
            password: await bcrypt.hash(password, 10), // Hash the password
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 