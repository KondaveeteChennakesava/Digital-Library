import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from 'cors';
import Register from "./models/Register.js"

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Kesava:Library2123@Library.mzbwxdi.mongodb.net/Library?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to Database & Listining to localhost 5000")
    )
    .catch((err) => console.log(err));

app.post('/register', (req, res, next) => {
    console.log(req.body.formdata)
    const { user, email, password } = req.body.formdata
    const reg = new Register({
        user,
        email,
        password
    })
    try {
        reg.save()
        // var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chennak993@gmail.com',
                pass: 'nktd hqxj ctpd blbo'
            }
        });

        var mailOptions = {
            from: 'chennak993@gmail.com',
            to: email,
            subject: 'Registration Successful',
            text: 'Hello '+`${reg.user}`+'Thanx for registring to Digital Library. You are one step away to improve your knowledge on your intrested sector. All the best for your reading.'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send("Success")
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    return res.send({ msg: "inserted", result: reg })
})

app.get('/getcred', async (req, res, next) => {
    // res.send("success")
    let creddata
    try {
        creddata = await Register.find()
    }
    catch (err) {
        console.log(err)
    }
    if (!creddata) {
        console.log("No credentials data")
    }
    return res.status(200).json({ creddata })
})