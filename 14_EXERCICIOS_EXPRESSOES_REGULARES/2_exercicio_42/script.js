const validarID = /\d+ID\b/;

console.log(validarID.test('165651ID'));
console.log(validarID.test('516546'));
console.log(validarID.test('asd'));
console.log(validarID.test('asdadadID'));
console.log(validarID.test('ID'));
console.log(validarID.test('55555ID'));