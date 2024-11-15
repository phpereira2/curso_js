console.log('Verificador de idade para entrada na Auto Escola\n');

let functionVerificador = function verificador(idade) {
    if (idade <= 17) {
        console.log('Entrada proibida! Primeiramente atinja a idade mínima para entrar para Auto Escola');
    } else {
        console.log('Entrada permitida, prossiga adiante para cadastro de sua matrícula');
    }
}

functionVerificador(17);
functionVerificador(21);
console.log(typeof(functionVerificador));