const reg1 = new RegExp('bola');

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem'));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.test('121651695quadrado51651651965'));