//requireds 

const fs = require('fs');

//fin de requireds

let crearArchivo = async(base) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido ${ base }, no es un número`);
        return
    }

    let data = '';

    for (let i = 1; i < 11; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

        if (err)
            throw new Error(err)
        else
            return `tabla-${base}.txt`;
    });
}

module.exports = {
    crearArchivo
}