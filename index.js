const fs = require('fs');


let cursosDisponibles = [{
    id: 123,
    nombre: 'Calculo',
    duracion: 40,
    valor: 0
},
{
    id: 456,
    nombre: 'Inteligencia Artificial',
    duracion: 60,
    valor: 200000
},
{
    id: 789,
    nombre: 'robotica',
    duracion: 38,
    valor: 60000
}];

const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}

function recorrerJson(cursosDisponibles) {
    console.log('******************************************************************')
    for (var i in cursosDisponibles) {
        //setTimeout(() =>{
            console.log(`        El curso se llama: ${cursosDisponibles[i].nombre}
        con un ID: ${cursosDisponibles[i].id}
        tiene una duracion de: ${cursosDisponibles[i].duracion} Horas
        y tiene un costo de: ${cursosDisponibles[i].valor} pesos
****************************************************************** `)
       // }, 3000);
    }
}

recorrerJson(cursosDisponibles)

const argv = require('yargs')
    .command('inscribir', 'datos para inscripcion', opciones)
    .argv

let crear_archivo = (cursosDisponibles, argv) => {
    idCurso = argv.id;
    let curso = cursosDisponibles.find(function (IdCurso) {
        return IdCurso.id == idCurso
    })
    if (curso != null) {
        texto = `Hola ${argv.nombre} tu cedula es: ${argv.cedula} ${'\n'}
y te has incrito al curso de: ${curso.nombre} ${'\n'}
el cual tiene una duracion de: ${curso.duracion} horas ${'\n'}
y por tan solo ${curso.valor} Pesos`
        fs.writeFile('inscribir.txt', texto, (err) => {
            if (err) throw (err);
            console.log('se ha creado el archivo con los datos')
        })
    } else {
        console.log(' ¡NO EXISTE EL CURSO PARA EL QUE SE QUIERE MATRICULAR !')
        //recorrerJson(cursosDisponibles)
    }
}

crear_archivo(cursosDisponibles, argv)

//module.export = { recorrerJson, cursosDisponibles }