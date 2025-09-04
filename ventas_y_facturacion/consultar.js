const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Consultar detalles de una venta');
});     
app.listen(port, () => {
  console.log(`API escuchando en		https://www.panaderialaesperanza.com/ventas/25: ${port}`);
});