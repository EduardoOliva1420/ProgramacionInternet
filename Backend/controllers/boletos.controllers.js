import Boleto from "../models/Boleto.js";


export const obtenerBoletos = async (req, res) => {
  try {
    const boletos = await Boleto.find();
    if(!boletos || boletos.length === 0) {
      res.status(404).json({ error: "No se encontraron boletos" });
    } else {
      return res.json(boletos);
    }
  
  } catch (error) {
      console.error(error);
       return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  

  export const agregarBoletos = async (req, res) => {
    try {
      const boletos = req.body;
  
      if (!Array.isArray(boletos) || boletos.length === 0) {
        return res.status(400).json({ error: "Debes enviar al menos un boleto" });
      }
  
      // Validar campos esenciales
      for (const boleto of boletos) {
        if (!boleto.zona || !boleto.tipo || !boleto.cantidad || !boleto.precioUnitario || !boleto.total) {
          return res.status(400).json({ error: "Faltan campos en uno o más boletos" });
        }
      }
  
      const boletosGuardados = await Boleto.insertMany(boletos);
      return res.status(201).json({ mensaje: "Boletos agregados correctamente", boletos: boletosGuardados });
  
    } catch (error) {
      console.error("Error al agregar boletos:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  


  export const eliminarBoletos = async (req, resp) => {
    try{
      const eliminarBoleto = await Boleto.findByIdAndDelete(req.params.boletoId);
      if(!eliminarBoleto) {
        return resp.status(404).json({ error: "Boleto no encontrado" });
      } else {
        return resp.status(201).json({mensaje:"Boleto eliminado"});
      }
      } catch (error) {
        console.error(error);
         return resp.status(500).json({ error: "Error interno del servidor" });
      }
  }
  
  
