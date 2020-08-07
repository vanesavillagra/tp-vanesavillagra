const express= require("express")
const app= express();

const routeHome= require('./routes/home.js')
const routeAutos= require('./routes/autos.js')
const routeMarcas= require('./routes/marcas.js')
const routeSucursales= require('./routes/sucursales.js')

app.listen(7000, ()=> console.log("servidor funcionando en el puerto 7000"))

app.use('/', routeHome)
app.use('/autos', routeAutos)
app.use('/marcas', routeMarcas)
app.use('/sucursales', routeSucursales)
