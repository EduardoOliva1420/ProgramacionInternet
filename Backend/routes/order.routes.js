import express from 'express';
import {obtenerOrders, agregarOrder} from '../controllers/order.controller.js';


const router = express.Router();

router.get('/', obtenerOrders);
router.post('/', agregarOrder);

export default router;