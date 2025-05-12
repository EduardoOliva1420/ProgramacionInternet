import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import boletosRoutes from './routes/boletos.routes.js';
import orderRoutes from './routes/order.routes.js'; // Asegúrate de importar correctamente las rutas de órdenes
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // Permite procesar cuerpos de solicitudes en formato JSON
app.use(morgan('dev')); // Muestra peticiones en el servidor
app.use(cors());

// Rutas
app.use('/api/boletos', boletosRoutes);
app.use('/api/orders', orderRoutes); // Ruta para manejar las órdenes

// Configuración del puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
