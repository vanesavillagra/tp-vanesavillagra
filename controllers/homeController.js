let database = require('../data/database')

const controlador = {
    index: function(req, res){
        res.write('-------------------------------\n')
        res.write('Bienvenido, esta es nuestra pagina principal\n')
        res.write('------------------------------- \n')

        database.forEach(concesionaria => {
            res.write(concesionaria.sucursal + '\n')
        })
        res.end()
    },
about: function(req,res){
    res.send('Esta pagina la hizo Vanesa Villagra')
}
}


module.exports = controlador