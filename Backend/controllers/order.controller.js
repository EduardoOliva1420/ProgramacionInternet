import Order from '../models/orders.models.js';

export const crearOrden = async (req, res) => {
  try {
    const { boletos } = req.body;

    if (!boletos || boletos.length === 0) {
      return res.status(400).json({ mensaje: 'Debe seleccionar al menos un boleto.' });
    }

    // Verifica los boletos que se están enviando
    console.log('Boletos recibidos:', boletos);

    const nuevaOrden = new Order({ boletos });
    await nuevaOrden.save();

    return res.status(201).json({ mensaje: 'Orden creada correctamente', orden: nuevaOrden });
  } catch (error) {
    console.error('Error al crear la orden:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor', error: error.message });
  }
};

export const obtenerOrdenes = async (req, res) => {
  try {
    const ordenes = await Order.find();
    return res.json(ordenes);
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
