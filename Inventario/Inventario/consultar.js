const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Rconsultar insumos especifico!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/inventario/insumo/10:${port}`);
});