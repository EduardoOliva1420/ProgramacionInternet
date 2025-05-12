const ORDER_URL = 'http://localhost:5000/api/orders'; // Endpoint para agregar la orden

const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
};

const procesarOrden = async () => {
    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    try {
        const response = await fetch(ORDER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: carrito.map(item => ({
                    productId: item._id,
                    name: item.tipo,
                    quantity: 1,  // Por defecto se asume cantidad 1
                    price: item.price,
                })),
            }),
        });

        const data = await response.json();
        if (data.message) {
            alert('Orden procesada correctamente');
            localStorage.removeItem('cart'); // Limpiar el carrito después de la compra
            actualizarContadorCarrito(); // Actualizar el contador
        }
    } catch (error) {
        console.error('Error al procesar la orden:', error);
        alert('Hubo un problema al procesar la orden');
    }
};

document.getElementById('checkout-btn').addEventListener('click', procesarOrden);


