const { user } = require("../models/user");

const register = async(params) => {
    const { email, username, firstname, lastname, password } = params;


    try {
        const newUser = {
            "email": email,
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "password": password
        }

        //add newUser to users
        const createUser = await user.create(newUser);
        //write users to DB
        return { "status": "true", "message": "User create successfull", "data": createUser };

    } catch (error) {
        return { "status": "false", "message": error };
    }
}

module.exports = {
    register,
}