const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('registrar un nuevo cliente!');
});
app.listen(port, () => {
  console.log(`2.	https://www.panaderialaesperanza.com/clientes/registrar:${port}`);
});