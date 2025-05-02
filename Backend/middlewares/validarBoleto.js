// middlewares/validarBoleto.js

module.exports = (req, res, next) => {
    const { tipo, precio } = req.body;

    if (!tipo || !precio) {
        return res.status(400).json({ error: 'Tipo y precio son requeridos' });
    }

    if (typeof precio !== 'number' || precio <= 0) {
        return res.status(400).json({ error: 'Precio debe ser un número positivo' });
    }

    next(); // continúa al controlador si todo está bien
};
