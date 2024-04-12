const express = require('express');
var cors = require('cors');
const session = require('express-session')

const buyerRouter = require('./routes/buyer')
const mongoose = require("mongoose");
const apiRouter = require('./api/api')
const adminRouter = require('./routes/admin')
const sellerRouter = require('./routes/seller')
const loginRouter = require('./routes/login')
const signUpRouter = require('./routes/signUp')
const {PORT, mongoDBURL} = require("./config")

const app = express();
app.use(cors());
app.use(express.static("public")); 
app.use(express.json());

app.use(session({
    secret: 'wsuEcommerce',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.use('/', buyerRouter)
app.use('/api', apiRouter)
app.use('/admin',adminRouter)
app.use('/seller',sellerRouter)
app.use('/login', loginRouter)
app.use('/signup', signUpRouter)

mongoose.connect(mongoDBURL).then(() =>{
    console.log("Database connected succesfully")
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    })
}).catch((error) => {
    console.log(`Error: ${error}`);
});