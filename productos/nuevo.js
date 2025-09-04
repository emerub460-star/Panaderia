const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Registrar un nuevo producto');
});     
app.listen(port, () => {
  console.log(`API escuchando en	https://www.panaderialaesperanza.com/productos/crear: ${port}`);
});
