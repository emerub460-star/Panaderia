const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Registro salida de insumos!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/inventario/salida:${port}`);
});