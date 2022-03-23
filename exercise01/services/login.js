const { user } = require("../models/user");

const login = async(email, password) => {

    if (!email || !password) {
        return { "status": "false", "message": "Enter an email or password" };
    } else {
        try {
            const userFind = await user.findOne({
                email
            });
            // console.log(userFind.email);
            if (userFind.email != email) {
                return { "status": "false", "message": "Email or password is incorrect" };
            } else {
                if (password != userFind.password) {
                    return { "status": "false", "message": "Email or password is incorrect" };
                } else {
                    return { "status": "true", "message": "Log in successful", "data": userFind };
                }
            }
        } catch (error) {
            return { "status": "false", "message": error }
        }
    }
}
module.exports = {
    login,
}