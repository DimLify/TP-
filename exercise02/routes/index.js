const express = require('express');
const { joiValidation } = require('../middlewares/joiValidate');
const { registerSchema, loginSchema } = require('../schemas');
const { login } = require('../services/login');
const { register } = require('../services/register');
const router = express.Router();

router.post('/login', joiValidation(loginSchema), async(req, res) => {
    const { email, password } = req.body;

    const result = await login(email, password);
    res.json(result);
})

router.post('/register', joiValidation(registerSchema), async(req, res, next) => {
    const result = await register(req.body)
    res.json(result);
})

module.exports = router;