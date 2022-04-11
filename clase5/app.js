const fs = require('file-system');
const { getTareas } = require('./funcionesDeTareas');

const funciones = require('./funcionesDeTareas')

        
let argumento = process.argv        

switch(argumento[2]){
    
    case 'listar':

    let arrayTareas = funciones.getTareas()
    arrayTareas.forEach(function(nota,index){
        console.log(index,nota)
    })
    break;

    case 'crear':
        let nuevaTarea = new Tareas('titulo', 'estado');
        let archivo = fs.readFileSync('./tareas.json');
        let tareas = JSON.parse(archivo)
        tareas.push(nuevaTarea)
        let datos = JSON.stringify(tareas)
        fs.writeFileSync('./tareas.json', datos);

        console.log('Tarea guardada')

    case undefined:
        console.log('Atención, tienes que pasar una acción')
        break;

    default:
        console.log('No entiendo qué quieres hacer')
}




