let numeros = [0, 1, 2, 3, 4, 5];
let nomes = ['Pedro', 'Gustavo', 'Matheus', 'João'];

function verificador(conjunto) {
    if (conjunto.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

console.log(verificador(numeros));
console.log(verificador(nomes));
console.log(typeof(numeros));
console.log(typeof(nomes));