let funcaoNumeroAleatorio = function numeroAleatorio(numero) {
    return Math.floor(Math.random() * numero) + 1;
}

console.log(funcaoNumeroAleatorio(10));
console.log(typeof(funcaoNumeroAleatorio));