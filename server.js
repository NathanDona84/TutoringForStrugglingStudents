const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { error } = require('console');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
app.set('port', (process.env.PORT || 5000));

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('appfrontend/build'));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'appfrontend', 'build', 'index.html'));
    });
}

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});






app.listen(PORT, () =>{
    console.log('Server listening on port ' + PORT);
});