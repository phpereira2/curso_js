const notAb = /[^ab]/;

console.log(notAb.test('a'));
console.log(notAb.test('Aqui tem a'));

const notToAz = /[^a-z]/;

console.log(notToAz.test('123 as'));
console.log(notToAz.test('assjasasahdb'));

const az = /\[a-z]/;

console.log(notToAz.test('asd123asdad'));