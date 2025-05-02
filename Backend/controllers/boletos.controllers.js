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

  export const agregarBoletos = async (req,res) => {
    try {
      const newBoleto = new Boleto(req.body);
     if(!newBoleto) {
      return res.status(404).json({ error: "Campos incompletos" });
     } else {
      await newBoleto.save();
      return res.status(201).json(newBoleto);
     }
  } catch (error) {
      console.error(error);
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
  
  
