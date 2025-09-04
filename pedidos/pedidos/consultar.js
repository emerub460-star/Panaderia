const express = require ('express');
const app = express();
const port = 300;

app.get('/', (req, res)=>{
    res.send ('Consultar un pedido específico');

});

app.listen(port, ()=>{
    console.log(`API escuchando en https://www.panaderialaesperanza.com/pedidos/45:${port}`);
});