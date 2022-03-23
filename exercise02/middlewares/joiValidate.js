const joiValidation = (schema) => {
    return async(req, res, next) => {
        try {
            await schema.validateAsync(req.body)
        } catch (error) {
            return res.json({ "status": "false", "message": error })
        }
        next();

    }
}

module.exports = {
    joiValidation,
}