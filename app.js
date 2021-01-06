//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors')


let comando = argv._[0];
console.log(comando);

switch ( comando) {
    case 'crear':
        let tarea= porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        console.log("========== TAREAS POR HACER =========");
        for (let tarea of listado) {

            console.log(`----------..................---------`);
            console.log(`Tarea  : ${tarea.descripcion}`.green);
            console.log(`Estatus: ${tarea.completado}`.green);
            console.log("......................................");
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}