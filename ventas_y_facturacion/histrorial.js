const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Ver historial de ventas por fecha');
});     
app.listen(port, () => {
  console.log(`API escuchando en	https://www.panaderialaesperanza.com/ventas/historial/2025-08-19: ${port}`);
});