const express = require('express');
const router = express.Router();
const cors = require('cors')
const authenticateToken = require('../middleware/authMiddleware')
const profileController = require('../controllers/profileController')

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173'
};

router.use(cors(corsOptions));

router.get("/profile", profileController.getProfile );
router.post("/profile", profileController.updateProfile)
router.post("/upload", profileController.uploadProfilePicture)

module.exports = router;