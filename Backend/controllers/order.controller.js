import Order from "../models/orders.models.js";

export const obtenerOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        if (!orders || orders.length === 0) {
            res.status(404).json({ mensaje: "No se encontraron ordenes" });
        } else {
            return res.json(orders);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const agregarOrder = async (req, res) => {
    const { items } = req.body;
    if (!items || !items.length) {
        return res.status(400).json({ error: "Carrito incompleto" });
    }
    try {
        const newOrder = new Order({items: items.map((item) =>({productId: item.productId, name: item.name, quantity: item.quantity, price: item.price})),
         totalPrice: items.reduce((total, item) => total + item.price * item.quantity, 0),
        })
        await newOrder.save();
        return res.status(201).json({message: "Orden agregada",newOrder});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};