const User = require('../models/user');
const { hashPassword, comparePassword } = require('../middleware/passwordEncrypt');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

// Register Endpoint 
const registerUser = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is Required'
            })
        };

        // Check if password was good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is Required, Should be at Least 6 Characters Long'
            });
        }

        // Check email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                error: 'Email is Already Taken'
            });
        }

        const hashedPassword = await hashPassword(password)

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            mobile,
            password: hashedPassword,
        });

        // Return the new user object
        return res.json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// Login End Point
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                error: 'No User Found'
            });
        }

        // Check password match
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).json({
                error: "Password Does Not Match"
            });
        }

        // Generate JWT token
        const token = jwt.sign({ 
            id: user._id, 
            email: user.email, 
            name: user.name
        }, process.env.JWT_SECRET);

        // Send JWT token as part of the response
        res.cookie('token', token).json({
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
module.exports = {
    test,
    registerUser,
    loginUser
};