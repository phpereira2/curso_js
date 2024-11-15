let funcaoImprimePar = function imprimePar(numero) {
    for (let contador = numero; contador >= 0; contador--) {
        if (contador % 2 == 0) {
            console.log(contador);
        }
    }
}

console.log(funcaoImprimePar(21));
console.log(typeof(funcaoImprimePar));