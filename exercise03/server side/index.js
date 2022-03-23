const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//allow api to access any port
app.use(cors({
    origin: '*',
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const router = require('./routes');
app.use(router);

app.listen(3001, () => {
    console.log("The server: http://localhost:3001");
})