import {Schema,model} from 'mongoose';

const boletoSchema = new Schema({
  tipo: {type: String, required: true},
  zona: {type: String, required: true},
  price: {type: Number, required: true},
  descripcion: String,
});

export default model('Boleto', boletoSchema);

