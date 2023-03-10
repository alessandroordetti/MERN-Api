//THIS WILL BE OUR ENTRYPOINT
const exp = require('constants');
const colors = require('colors')
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

connectDB(); 

const port = process.env.PORT || 5000;

//Initialize express
const app = express();


/* When a request with a JSON payload is received, 
this middleware will parse the payload and make it available on the req.body property of the request object. */
app.use(express.json())

/* When a request with a URL-encoded payload is received, 
this middleware will parse the payload and make it available on the req.body property of the request object. 
The extended option is set to false, which means that the values 
in the URL-encoded payload will be strings or arrays, but not complex objects. */
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler);

// THIS IS THE SERVER THAT LISTENS TO PORT 5000
app.listen(port, () => {console.log(`Server running at port ${port}`)})