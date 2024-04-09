const express = require('express');
var cors = require('cors');
const buyerRouter = require('./routes/buyer')
const mongoose = require("mongoose");
const apiRouter = require('./api/api')
const {PORT, mongoDBURL} = require("./config")

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use('/', buyerRouter)
app.use('/api', apiRouter)

mongoose.connect(mongoDBURL).then(() =>{
    console.log("Database connected succesfully")
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    })
}).catch((error) => {
    console.log(`Error: ${error}`);
});
