const { raw } = require('body-parser');
const fs = require('fs');
const path = require('path');

const readUsers = () => {
    let rawdata = fs.readFileSync(path.join(process.cwd(), 'db/user.json'), 'utf8');
    if (!rawdata)
        return [];

    return JSON.parse(rawdata);
}

const writeUsers = async(data) => {
    fs.writeFileSync(path.join(process.cwd(), 'db/user.json'), JSON.stringify(data), 'utf8');
}

module.exports = {
    readUsers,
    writeUsers
}