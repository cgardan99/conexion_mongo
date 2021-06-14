import connectDB from './backend/config/db.js'
import clientsRoutes from './backend/routes/clientRoute.js';
import mensualidad1Routes from './backend/routes/mensualidad1Route.js';
import mensualidad2Routes from './backend/routes/mensualidad2Route.js';
import asistencia1Routes from './backend/routes/asistencia1Route.js';
import asistencia2Routes from './backend/routes/asistencia2Route.js';
import ejercicioRoutes from './backend/routes/ejercicioRoute.js';
import progresoRoutes from './backend/routes/progresoRoute.js';
import tiempoProgresoRoutes from './backend/routes/tiempoProgresoRoute.js';
import express from 'express'
import dotenv  from 'dotenv'
import bodyParser from 'body-parser';

//Socket imports 

import { createServer } from "http";
import { Server } from "socket.io";
//dotenv config
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var messages = [{ 
    text: "Bienvenidos a la sala de chat del gimnasio", 
    author: "~Entrenador" 
  }]; 

//Creating API 
app.use('/api/clients', clientsRoutes)
app.use('/api/mensualidad1', mensualidad1Routes)
app.use('/api/mensualidad2', mensualidad2Routes)
app.use('/api/asistencia1', asistencia1Routes)
app.use('/api/asistencia2', asistencia2Routes)
app.use('/api/ejercicio', ejercicioRoutes)
app.use('/api/progreso', progresoRoutes)
app.use('/api/tp', tiempoProgresoRoutes)

const PORT = process.env.PORT || 5000

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", function(socket){
    console.log('Alguien se ha conectado al chat con Sockets');   
    socket.emit('messages', messages); 
    socket.on('new-message', function(data) { 
      messages.push(data); 
      io.sockets.emit('messages', messages); 
    }); 
});

httpServer.listen(3000,console.log('Corriendo servidor para websockets en el puerto 3000'));

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))