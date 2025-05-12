// models/orders.models.js
import mongoose from 'mongoose';

const ordenSchema = new mongoose.Schema({
  boletos: [
    {
      zona: String,
      tipo: String,
      cantidad: Number,
      precioUnitario: Number,
      total: Number
    }
  ],
  fecha: {
    type: Date,
    default: Date.now
  }
});

// Especifica el nombre exacto de la colección
const Orden = mongoose.model('Orden', ordenSchema, 'orders'); // 'orders' es el nombre de la colección

export default Orden;
