const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Registro entrada de insumos!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/inventario/entrada:${port}`);
});