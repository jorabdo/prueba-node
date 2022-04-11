const fs = require('fs')

module.exports = {

    getTareas: function(){

        let archivo = fs.readFileSync("./tareas.json")

        let arrayTareas = JSON.parse(archivo)

        return arrayTareas
    }
    
}






