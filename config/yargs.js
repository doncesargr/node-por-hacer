const { help } = require("yargs")

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la Tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca tarea completada'
};

const argv = require('yargs')
    .command('crear','Crea una tarea en el ToDo',{
        descripcion})
    .command('actualizar', 'Actualiza un elemento ToDo',{
        descripcion,
        completado
    })
    .command('borrar','Elimina una tarea del Todo',{
        descripcion
    }).help().argv;

module.exports = {
    argv
}
