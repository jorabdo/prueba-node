const fs = require('fs')

function listar() {
    let archivo = fs.readFileSync('./tareas.json') 

    let archivoEnJs = JSON.parse(archivo)

    return archivoEnJs


}

function escribirJson(arrayDeTareas){

    let tareas = JSON.stringify(arrayDeTareas)

    return fs.writeFileSync('./tareas.json', tareas)
}

function guardarTarea(nuevaTarea){
    tareaJS = listar();
    tareaJS.push(nuevaTarea);
    return escribirJson(tareaJS)
    
}

function filtrarPorEstado (estadoTareas){

    let tareass = listar()

   let filtrados = tareass.filter(function(elemento){
        return elemento.estado == "pendiente"
    })
    return filtrados



}
module.exports = {listar, guardarTarea, filtrarPorEstado}

