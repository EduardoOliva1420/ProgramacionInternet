// controllers/boletos.controller.js
const Boleto = require('../models/Boleto');

// Ver todos los boletos
exports.obtenerBoletos = async (req, res) => {
    try {
        const boletos = await Boleto.find();
        res.json(boletos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener boletos' });
    }
}
   

// Crear un nuevo boleto
exports.crearBoleto = async (req, res) => {
    try {
        const { tipo, precio } = req.body;
        const nuevoBoleto = new Boleto({ tipo, precio });
        await nuevoBoleto.save();
        res.status(201).json(nuevoBoleto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear boleto' });
    }
};

// Comprar un boleto (poner disponible: false)
exports.comprarBoleto = async (req, res) => {
    try {
        const { id } = req.params;
        const boleto = await Boleto.findByIdAndUpdate(id, { disponible: false }, { new: true });
        res.json(boleto);
    } catch (error) {
        res.status(500).json({ error: 'Error al comprar boleto' });
    }
};

// Eliminar un boleto
exports.eliminarBoleto = async (req, res) => {
    try {
        const { id } = req.params;
        await Boleto.findByIdAndDelete(id);
        res.json({ mensaje: 'Boleto eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar boleto' });
    }
};
