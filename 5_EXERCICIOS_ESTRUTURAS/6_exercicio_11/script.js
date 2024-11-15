let idade = 21;
let cnh = false;

console.log('Verificação de locomoção veicular');
if (idade >= 18 && cnh == false) {
    console.log('Não se encontra apto para locomoção pois está dentro da faixa etária permitida porém não possui CNH');
} else if (idade >= 18 && cnh == true) {
    console.log('Se encontra apto para locomoção pois está dentro da faixa etária permitida e CNH');
} else {
    console.log('Não se encontra apto para locomoção pois está fora da faixa etária permitida e não possui CNH');
}

console.log(typeof (idade));
console.log(typeof (cnh));