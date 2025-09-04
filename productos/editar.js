const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Editar un producto existente');
});     
app.listen(port, () => {
  console.log(`API escuchando en	https://www.panaderialaesperanza.com/productos/editar/15: ${port}`);
});