const reg1 = /[12345]/;

console.log(reg.test('Temos o número 6'));
console.log(reg.test('Temos o número 2'));
console.log(reg.test('Temos o número 23'));
console.log(reg.test('Temos o número 26'));

const reg2 = /[0-9]/;

console.log(reg.test('Temos o número 65894984951561'));
console.log(reg.test('Temos o número'));