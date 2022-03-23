const { readUsers } = require("../db/db")

const login = async(email, password) => {
    const users = await readUsers();
    var status = 1;

    if (!email || !password) {
        return { "status": "false", "message": "Enter an email or password" };
    } else {
        //chack if username or email and password matched
        for (user in users) {
            if ((users[user].email == email || users[user].username == email) && users[user].password == password) {
                status = 0;
                return { "status": "true", "message": "Log in successfull", "data": users[user] };
            }
        }
        //check if email or username is not existed or wrong password
        if (status == 1) {
            return { "status": "false", "message": "Email or Password is incorrect" };
        }
    }
}

module.exports = {
    login,
}