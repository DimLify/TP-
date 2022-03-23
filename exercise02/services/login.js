const { user } = require("../models/user");
const bcrypt = require('bcrypt');

const login = async(email, password) => {
    try {
        const userFind = await user.findOne({
            email
        });
        if (userFind == null) {
            return { "status": "false", "message": "Email or password is incorrect" };

        }
        // console.log(userFind.email);
        if (userFind.email != email) {
            return { "status": "false", "message": "Email or password is incorrect" };
        } else {
            if (!bcrypt.compareSync(password, userFind.password)) {
                return { "status": "false", "message": "Email or password is incorrect" };
            } else {
                return { "status": "true", "message": "Log in successful", "data": userFind };
            }
        }
    } catch (error) {
        return { "status": "false", "message": error }
    }
}
module.exports = {
    login,
}