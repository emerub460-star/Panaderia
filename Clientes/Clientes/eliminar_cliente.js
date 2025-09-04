const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Elimina un cliente!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/clientes/eliminar/20:${port}`);
});