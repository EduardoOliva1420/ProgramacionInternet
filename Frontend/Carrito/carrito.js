async function cargarOrdenes() {
  try {
    const res = await fetch('http://localhost:5000/api/orders');
    const data = await res.json();
    const ordenes = data.orders;

    const container = document.getElementById('ordenes-container');
    if (!container) {
      console.error("Elemento 'ordenes-container' no encontrado en el DOM");
      return;
    }

    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas órdenes

    if (ordenes.length === 0) {
      container.innerHTML = '<p class="empty-message">No tienes órdenes en tu carrito.</p>';
      return;
    }

    ordenes.forEach((orden, index) => {
      const fecha = new Date(orden.fecha).toLocaleString();

      let boletosHTML = '';
      orden.boletos.forEach(boleto => {
        boletosHTML += `
          <li class="list-group-item">
            <strong>${boleto.zona}</strong> - Tipo: ${boleto.tipo}, 
            Cantidad: ${boleto.cantidad}, Precio Unitario: $${boleto.precioUnitario}, 
            Total: $${boleto.precioUnitario * boleto.cantidad}
          </li>
        `;
      });

      const ordenCard = `
        <div class="card">
          <div class="card-header">
            <strong>Orden #${index + 1}</strong> - ${fecha}
          </div>
          <ul class="list-group list-group-flush">
            ${boletosHTML}
          </ul>
          <div class="order-total">
            Total de la Orden: $${orden.boletos.reduce((acc, boleto) => acc + (boleto.precioUnitario * boleto.cantidad), 0)}
          </div>
        </div>
      `;

      container.innerHTML += ordenCard;
    });
  } catch (error) {
    console.error('Error al cargar órdenes:', error);
  }
}

cargarOrdenes();
