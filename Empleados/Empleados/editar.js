const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Editar informacion de un empleado!');
});
app.listen(port, () => {
  console.log(`https://www.panaderialaesperanza.com/empleados/editar/7:${port}`);
});