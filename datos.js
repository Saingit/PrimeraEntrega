
const {cursos, listarCursos, inscribir} = require ('./index.js')

const opciones={
    id_curso:{
    	demand: true,
    	alias: 'id'
    },

    aspirante:{
    	default:0,
    	alias: 'n'
    },

    cedula:{
    	default:0,
    	alias:'c'
    }

}

//llamamos los yargs
const argv = require('yargs')
             .command ('matricula','Opciones de matricula',opciones)
             .argv

// console.log(argv.id+" ARGS");
// console.log(argv.n+" ARGS");
// console.log(argv.c+" ARGS");
let {id, nombre, duracion, valor} = cursos
let {id_curso, aspirante, cedula } = opciones
console.log(inscribir(argv.id,argv.n,argv.c,opciones));
console.log(listarCursos());



