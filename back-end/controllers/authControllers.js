const User = require('../models/user');

const test = (req, res) => {
    res.json('test is working');
};

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

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            mobile,
            password
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

module.exports = {
    test,
    registerUser
};
