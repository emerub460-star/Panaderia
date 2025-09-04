const express = require ('express');
const app = express();
const port = 300;

app.get('/', (req, res)=>{
    res.send ('Seguimiento del estado de un pedido');

});

app.listen(port, ()=>{
    console.log(`API escuchando en https://www.panaderialaesperanza.com/pedidos/estado/45:${port}`);
});