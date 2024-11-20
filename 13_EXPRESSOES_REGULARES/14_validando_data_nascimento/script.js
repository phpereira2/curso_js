const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1930-2024]{4}/;

console.log(validarDataNasc.test('23/12/2003'));
console.log(validarDataNasc.test('3/2/2003'));
console.log(validarDataNasc.test('23-12-2003'));
console.log(validarDataNasc.test('23/12/00'));
console.log(validarDataNasc.test('12/12/1999'));
console.log(validarDataNasc.test('99/99/9999'));
console.log(validarDataNasc.test('31/00/2010'));