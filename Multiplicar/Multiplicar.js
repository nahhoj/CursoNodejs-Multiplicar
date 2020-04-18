'use strict'
const fs = require('fs');

let CrearArchivo = (base, limite, crear = true) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        let data = '';
        for (let x = 1; x <= limite; x++) {
            data += `${base} x ${x} = ${base*x}\n`
        }
        if (crear) {
            fs.writeFile(`./Tablas/Tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        } else {
            resolve(data);
        }
    });
};

module.exports = {
    CrearArchivo
};