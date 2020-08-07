let database = require('../data/database')

const controlador = {
    index: function(req, res){
        res.write('------------------------------------\n\n')
        res.write('Estas son nuestras sucursales de DH \n\n')
        res.write('------------------------------------ \n')
        database.forEach(sucursal => {
            res.write(sucursal.sucursal + '\n')
            res.write(sucursal.direccion + '\n')
            res.write(sucursal.telefono + '\n')
        })
        res.end()
},
datos:function(req,res){
    let sede= req.params.id;
    database.forEach(sucursal => {
if (sucursal.sucursal.toLowerCase() == sede.toLowerCase())
res.write(sucursal.sucursal + '\n');
res.write(sucursal.direccion + '\n');
res.write(sucursal.telefono + '\n');

sucursal.autos.forEach(auto=>{
    res.write('marca:' + auto.marca + '\n')
    res.write('modelo:' + auto.modelo + '\n')
    res.write('año:' + auto.anio + '\n')
})
    })
res.end("Por el momento, no tenemos sucursales ahi")
}
}


module.exports = controlador