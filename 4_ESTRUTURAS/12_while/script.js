let x = 10;

while (x > 0) {
    console.log('O x é ' + x);
    x = x - 1;
}

let y = 0;

while (y <= 10) {
    console.log(y);
    y = y + 1;
}

/* Não utilize loops infinitos, pois desta forma você consome toda a memória de sua máquina
Ex:

let z = 10;

while (z > 0) {
    console.log(z);
} 
    
*/