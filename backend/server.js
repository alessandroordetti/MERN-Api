//THIS WILL BE OUR ENTRYPOINT
const exp = require('constants');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

//Initialize express
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

// THIS IS THE SERVER
app.listen(port, () => {console.log(`Server running at port ${port}`)})