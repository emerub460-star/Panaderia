const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Ver inventario completo!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/inventario:${port}`);
});