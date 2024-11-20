const reg = /\w+: (Pedro|Gustavo|Matheus)/; // Nome: asdadadasda

console.log(reg.test('Nome: Matheus'));
console.log(reg.test('Nome: José'));
console.log(reg.test('Nome: Pedro'));