const express = require ('express');
const app = express();
const port = 300;

app.get('/', (req, res)=>{
    res.send ('Realizar Pedido!');

});

app.listen(port, ()=>{
    console.log(`API escuchando en https://www.panaderialaesperanza.com/pedidos/crear:${port}`);
});