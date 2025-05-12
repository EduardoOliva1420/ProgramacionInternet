// routes/order.routes.js
import express from 'express';
import { crearOrden, obtenerOrdenes } from '../controllers/order.controller.js';

const router = express.Router();

// Ruta para crear una nueva orden
router.post('/', crearOrden);

// Ruta para obtener todas las órdenes
router.get('/', obtenerOrdenes);

export default router;
