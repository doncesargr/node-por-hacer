
const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {


        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('./database/data.json',data, (err) => {
            if (err)
                throw new Error('Nose logró grabar el archivo');
        });  
}

const cargarDB = () => {

        try {
            listadoPorHacer = require('../database/data.json');
        } catch (error) {
            listadoPorHacer = [];
        }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if ( index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();
    let newListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    console.log(newListado);
    if (newListado.length > 0) {
        listadoPorHacer = [...newListado];
        guardarDB();
        return(true);
    }
    else {
        return(false);
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}