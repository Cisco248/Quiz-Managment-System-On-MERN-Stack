const User = require('../models/user');

const getProfile = async (req, res) => {
     try {
         const userId = req.user; // userId is added by middleware
         const user = await User.findOne({ userId });

         if (!user) {
             return res.status(404).json({ message: 'User not found' });
         } else {
             res.json(user);
         }
     } catch (error) {
         console.error('Error fetching profile:', error);
         res.status(500).json({ message: 'Server error' });
     }
    // try {
    //     // Extract User ID from Request Object (Provide by Authentication Token Middleware)
    //     const userId = req.user.id;
    //     // Fetch Quizzes Created by the Logged-In User
    //     const user = await User.find(userId);
    //     res.json(user);
    //   } catch (error) {
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   }
};

const updateProfile = async (req, res) => {
    try {
        const userId = req.userId; // userId is added by middleware
        const updatedProfile = req.body;
        const user = await User.findOneAndUpdate(userId, updatedProfile, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const uploadProfilePicture = async (req, res) => {
    try {
        const userId = req.userId; // userId is added by middleware
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No Image Uplaod' })
        }

        // Save image URL to user profile
        user.profilePictureUrl = req.file.path;
        await user.save();
        res.json({ message: 'Profile Picture Uploaded Successfully' });
    } catch (error) {
        console.error('Error Uploading Picture: ', error);
        res.status(500).json({ message: 'Server Error'});
    }
};

module.exports = {
    getProfile,
    updateProfile,
    uploadProfilePicture
};