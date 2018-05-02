const opts = {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprimir en archivo la tabla de multiplicar', opts)
    .argv;

module.exports = {
    argv
}