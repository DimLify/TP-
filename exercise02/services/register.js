const { readUsers, writeUsers } = require("../db/db")

const register = async(params) => {
    const { email, username, firstname, lastname, password } = params;

    const users = await readUsers();
    var status = 1;

    //check if user input empty
    if (!email || !username || !firstname || !lastname || !password) {
        return { "status": "false", "message": "Enter all the info" };
    } else {
        //check if user existed
        for (user in users) {
            if (users[user].email == params.email) {
                status = 0;
                return { "status": "false", "message": "This email already existed!" };
            } else if (users[user].username == params.username) {
                status = 0;
                return { "status": "false", "message": "This username already existed!" };
            }
        }

        if (status == 1) {
            const newUser = {
                "email": email,
                "username": username,
                "firstname": firstname,
                "lastname": lastname,
                "password": password
            }

            //add newUser to users
            users.push(newUser);

            //write users to DB
            await writeUsers(users);
            return { "status": "true", "message": "User create successfull", "data": newUser };
        }
    }
}

module.exports = {
    register,
}