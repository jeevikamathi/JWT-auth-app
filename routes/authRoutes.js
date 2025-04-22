const express = require('express');
const { login, protected } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/protected', authMiddleware, protected);

module.exports = router;
