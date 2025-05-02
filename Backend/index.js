import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import boletosRoutes from './routes/boletos.routes.js';
import Order from './routes/order.routes.js';


dotenv.config();

connectDB();

const app = express();

app.use(express.json());//permite procesar cuerpos de solicitudes en formato JSON
app.use(morgan('dev'));//muestra peticiones en el servidor


//configuracion del puerto
const PORT = process.env.PORT || 3000;

//rutas
app.use('/api/boletos', boletosRoutes);
app.use('/api/orders', Order);


//ponemos en escucha al servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});