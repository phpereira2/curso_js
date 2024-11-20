const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('1518'));
console.log(umOuMaisNumeros.test(''));
console.log(umOuMaisNumeros.test('asasasas'));
console.log(umOuMaisNumeros.test('1'));
console.log(umOuMaisNumeros.test('1518165165165498165156'));