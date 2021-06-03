import connectDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoute.js';
import clientsRoutes from './backend/routes/clientRoute.js';
import express from 'express'
import dotenv  from 'dotenv'
import bodyParser from 'body-parser';

//dotenv config
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Creating API for user
app.use('/api/users', userRoutes)
app.use('/api/clients', clientsRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))