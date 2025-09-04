const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Editar los datos de un cliente!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/clientes/editar/20:${port}`);
});