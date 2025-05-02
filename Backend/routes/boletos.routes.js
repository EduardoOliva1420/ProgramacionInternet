import express from 'express';
import {obtenerBoletos,agregarBoletos, eliminarBoletos} from '../controllers/boletos.controllers.js';

const router = express.Router();

router.get('/', obtenerBoletos);
router.post('/', agregarBoletos);
router.delete('/:boletoId', eliminarBoletos);


export default router;

