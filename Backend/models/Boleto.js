import mongoose from 'mongoose';

const boletoSchema = new mongoose.Schema({
  zona: { type: String, required: true },
  tipo: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precioUnitario: { type: Number, required: true },
  total: { type: Number, required: true }
});

const Boleto = mongoose.model('Boleto', boletoSchema);

export default Boleto;
