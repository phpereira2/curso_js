let numero = 17;
let divisoes = 0;

for (let divisivel = 1; divisivel <= numero; divisivel++) {
    if (numero % divisivel == 0) {
        divisoes++;
    }
}

if (divisoes == 2) {
    console.log(`O número ${numero} é primo`);
} else {
    console.log(`o número ${numero} não é primo`);
}

console.log(typeof (numero));
console.log(typeof (divisoes));
console.log(typeof (divisivel));