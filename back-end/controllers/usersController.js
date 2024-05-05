require('dotenv').config();
const User = require('../models/user');

const fetchUsers = async (req, res) => {
    try {
        // Extract User ID from Request Object (Provide by Authentication Token Middleware)
        const userId = req.body.user;
        const users = await User.find(userId);
        console.log(users);

        if (!users) {
            res.status(403).json({ error: 'User Details Not Found!' })
            console.log(error);
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log({ message: 'Internal Server Error!', error});
    }
};

module.exports = {
    fetchUsers
};