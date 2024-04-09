const express = require('express');
var cors = require('cors');
const buyerRouter = require('./routes/buyer')
const apiRouter = require('./api/api')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use('/', buyerRouter)
app.use('/api', apiRouter)

app.listen(4000, () => console.log("Listening on port 4000!"));