const { raw } = require('body-parser');
const fs = require('fs');
const path = require('path');

//read user from database user.json
const readUsers = () => {
    let rawdata = fs.readFileSync(path.join(process.cwd(), 'db/user.json'), 'utf8');
    if (!rawdata)
        return [];

    return JSON.parse(rawdata);
}

//write user to database user.json
const writeUsers = async(data) => {
    fs.writeFileSync(path.join(process.cwd(), 'db/user.json'), JSON.stringify(data), 'utf8');
}

module.exports = {
    readUsers,
    writeUsers
}