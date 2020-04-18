'use strict'
const { CrearArchivo } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");
const colors = require('colors/safe');

let base = argv.b,
    limite = argv.l,
    command = argv._[0];

switch (command) {
    case 'listar':
        CrearArchivo(base, limite, false)
            .then(data => console.log(colors.green(`lista de la tabla del ${base} hasta ${limite}`), data.blue))
            .catch(err => console.log(err));
        break;
    case 'crear':
        CrearArchivo(base, limite)
            .then(data => console.log(`Se ha creado el archvo de la tabla del ${base} hasta ${limite}`, data))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no valido');
        break;
}