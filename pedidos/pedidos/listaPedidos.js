const express = require ('express');
const app = express();
const port = 300;

app.get('/', (req, res)=>{
    res.send ('Lista de Pedidos');

});

app.listen(port, ()=>{
    console.log(`API escuchando en 6.	https://www.panaderialaesperanza.com/pedidos:${port}`);
});