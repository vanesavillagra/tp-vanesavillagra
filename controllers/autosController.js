const database = require('../data/database')
module.exports= autos = {
    index:(req,res)=>{
        res.write("Estos son los autos que tenemos para vos! \n");
        res.write("=========================================")
        res.end()
    },
     show:(req,res)=>{
    database.forEach(auto =>{
        res.write("===========================" + "\n")
        res.write("Marca:" + auto.marca + "\n");
        res.write("Modelo:" + auto.modelo + "\n");
        res.write("Anio:" + auto.anio + "\n")
        res.write("Color:" + auto.color + "\n")
        res.end()
    })
}
       }
 
        