const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Lista de todos los clientes!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/clientes:${port}`);
});