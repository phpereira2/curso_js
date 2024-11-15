let funcaoLimitador = function limitador(texto) {
    if (texto.length > 10) {
        console.log('Texto muito longo');
    } else {
        console.log('Texto dentro do limite');
    }
}

funcaoLimitador('Pedro');
funcaoLimitador('Olá, meu nome é Pedro');
console.log(typeof(funcaoLimitador));