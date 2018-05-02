//requireds 

const fs = require('fs');
const color = require('colors');
//fin de requireds

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base }, no es un número`);
            return
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ limite }, no es un número`);
            return
        }

        let data = '';


        console.log('========================================='.green);
        console.log(`=========  tabla de ${base} a ${limite}  ============`.green);
        console.log('========================================='.green);


        for (let i = 1; i < limite + 1; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        resolve(console.log(data));

    });

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base }, no es un número`);
            return
        }

        let data = '';

        for (let i = 1; i < limite + 1; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}