const fs = require('fs')

const archivoEnJsImportado = require('./funcionesDeTareas')

let argumento = process.argv

switch(argumento[2]){

    case 'listar':
        let archivoJs = archivoEnJsImportado.listar()
        archivoJs.forEach(function(lista, index){
            console.log(lista, index)
        })
    ;
    break;

    case 'crear':

    archivoEnJsImportado.guardarTarea({tarea: argumento[3], estado: argumento[4]});
    break;

    case 'filtrar':
    let filtro = archivoEnJsImportado.filtrarPorEstado();
    console.log(filtro)
    break;

    case undefined:
        
    console.log('Atencion - tienes que pasar una accion');
    break;

    default:
    console.log('No entiendo que quieres hacer')

}




