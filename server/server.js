const express = require('express');
var cors = require('cors');
const session = require('express-session')
var cookieParser = require('cookie-parser');

const buyerRouter = require('./routes/buyer')
const mongoose = require("mongoose");
const apiRouter = require('./api/api')
const adminRouter = require('./routes/admin')
const sellerRouter = require('./routes/seller')
const authRouter = require('./routes/auth')
const signUpRouter = require('./routes/signUp')
const {PORT, mongoDBURL} = require("./config")

const app = express();

//app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the origin of your client application
    credentials: true
  }));
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy

app.use(session({
    secret: 'wsuEcommerce',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false 
    }
  }))

app.use('/', buyerRouter)
app.use('/api', apiRouter)
app.use('/admin',adminRouter)
app.use('/seller',sellerRouter)
app.use('/auth', authRouter)
app.use('/signup', signUpRouter)

mongoose.connect(mongoDBURL).then(() =>{
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    })
}).catch((error) => {
    console.log(`Error: ${error}`);
});