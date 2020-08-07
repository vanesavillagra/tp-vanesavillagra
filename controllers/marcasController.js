
     const database = require('../data/database');
const controlador = {
    index: function(req, res) {
        let concesionarias = database
        res.write("----------------------------------\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n")
        res.write("-----------------------------------\n\n")
        res.write("---------------\n")
        res.write("Nuestras Marcas\n")
        res.write("---------------\n\n")
        let marcas = [];
        database.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if (marcas.indexOf(auto.marca) == -1) {
                    marcas.push(auto.marca)
                }
            })
        })
        marcas.forEach(marca => {
            res.write("  - " + marca + "\n")
        })
        res.end()
    },
    show: function(req, res) {
        let marca = req.params.marca;
        let contador = 0;
        res.write("----------------------------------\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n")
        res.write("-----------------------------------\n\n")
        database.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                if (auto.marca == marca) {
                    res.write(`* ${auto.marca} - ${auto.modelo} - ${auto.anio} \n`);
                    contador++
                }
            })
        })
        if (contador == 0) {
            res.write("----------------------------------\n")
            res.write("Automotores DIGITAL HOUSE - FORMAR\n")
            res.write("-----------------------------------\n\n")
            res.end("Lo siento, no comercializamos esa marca")
        } else {
            res.write("\n----------------------------------\n")
            res.write("Total de autos encontrados: " + contador + "\n")
            res.write("-----------------------------------\n\n")
            res.end()
        }
    }
}
module.exports = controlador