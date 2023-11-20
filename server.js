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

app.post('/api/emailForm', async (req, res, next) => {
    let { from, subject, text } = req.body;
    let ret = {};
    let error = "";

    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        secure: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    mailOptions={
        to : process.env.NODEMAILER_EMAIL,
        from: process.env.NODEMAILER_EMAIL,
        subject : "Tutoring Services Inquiry",
        html: "Hello,<br> You have recieved an inquiry from your webite.<br><br> Email From: "+from+"<br><br> Subject: "+subject+"<br><br> Body: "+text+""
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(e, response){
        if(e){
            error = e;
        }
        else{
            console.log("Message sent: " + response.message);
        }
    });

    ret["error"] = error;
    res.status(200).json(ret);
});




app.listen(PORT, () =>{
    console.log('Server listening on port ' + PORT);
});