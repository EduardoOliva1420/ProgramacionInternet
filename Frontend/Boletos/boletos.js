document.getElementById('boletos-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const boletos = [];

  const zonas = [
    { id: 'sol-sur', nombre: 'Zona Sol Sur', precioAdulto: 200 },
    { id: 'sol-norte', nombre: 'Zona Sol Norte', precioAdulto: 350 },
    { id: 'preferente', nombre: 'Zona Preferente', precioAdulto: 500 },
    { id: 'vip', nombre: 'Zona VIP', precioAdulto: 800 }
  ];

  zonas.forEach(zona => {
    const tipo = document.getElementById(zona.id).value;
    const cantidad = parseInt(document.getElementById(`cantidad-${zona.id}`).value, 10);

    if (cantidad > 0) {
      let precioUnitario = 0;
      if (tipo === 'adulto') precioUnitario = zona.precioAdulto;
      
      boletos.push({
        zona: zona.nombre,
        tipo,
        cantidad,
        precioUnitario,
        total: precioUnitario * cantidad
      });
    }
  });

  if (boletos.length === 0) {
    alert('Debes seleccionar al menos un boleto.');
    return;
  }

  // Guarda los boletos en localStorage
  localStorage.setItem('boletosSeleccionados', JSON.stringify(boletos));

  // Muestra un mensaje de éxito y redirige al carrito
  alert('Boletos agregados al carrito.');
  window.location.href = '/Frontend/carrito.html';
});
