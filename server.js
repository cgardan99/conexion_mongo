import connectDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoute.js';
import clientsRoutes from './backend/routes/clientRoute.js';
import mensualidad1Routes from './backend/routes/mensualidad1Route.js';
import mensualidad2Routes from './backend/routes/mensualidad2Route.js';
import ejercicioRoutes from './backend/routes/ejercicioRoute.js';
import progresoRoutes from './backend/routes/progresoRoute.js';
import tiempoProgresoRoutes from './backend/routes/tiempoProgresoRoute.js';
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
app.use('/api/mensualidad1', mensualidad1Routes)
app.use('/api/mensualidad2', mensualidad2Routes)
app.use('/api/ejercicio', ejercicioRoutes)
app.use('/api/progreso', progresoRoutes)
app.use('/api/tp', tiempoProgresoRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))