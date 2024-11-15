let functionDetector = function detector(dado) {
    switch (dado != undefined && dado != null) {
        case (typeof(dado) === 'number'):
            console.log(`O valor digitado foi ${dado} e seu tipo é number`);
            break;
        case (typeof(dado) === 'boolean'):
            console.log(`O valor digitado foi ${dado} e seu tipo é boolean`);
            break;
        case (typeof(dado) === 'string'):
            console.log(`O valor digitado foi ${dado} e seu tipo é string`);
            break;
        default:
            console.log('Identificado um valor diferente dos seguintes tipos: "number, boolean e string"');
            console.log(`O valor digitado foi ${dado} e seu tipo é: ${typeof(dado)}`);
            break;
    }
}

console.log('Verificador de dados, abaixo irá ser exibido o valor e o tipo dele por meio do console.log:');
functionDetector('Pedro');
functionDetector(21);
functionDetector(true);
console.log(typeof(functionDetector));