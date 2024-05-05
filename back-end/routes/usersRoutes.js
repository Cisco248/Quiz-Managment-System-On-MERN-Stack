const express = require("express");
const router = express.Router();
const { fetchUsers } = require('../controllers/usersController')

// Routes
router.get('/users', fetchUsers)

module.exports = router;