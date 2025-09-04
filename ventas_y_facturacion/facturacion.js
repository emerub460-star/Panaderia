const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Generar factura de una venta');
});     
app.listen(port, () => {
  console.log(`API escuchando en	5.	https://www.panaderialaesperanza.com/ventas/factura/25: ${port}`);
});