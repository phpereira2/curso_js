let idade = 19;

if (idade > 18) {
    console.log('A idade é = 19');
}

if (idade > 25) {
    console.log('A idade é maior que 25');
}

let nome = 'Pedro';

if (nome == 'Pedro' && idade > 10) {
    console.log('Liberado!');
}

let passaporte = true;

if ((nome == 'Pedro' && idade > 30) || passaporte == true) {
    console.log('Liberado 2!');
}