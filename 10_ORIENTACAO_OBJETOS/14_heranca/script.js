class Mamimero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamimero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log('Au au');
    }
}

let pug = new Cachorro(4, 'Pug');

console.log(pug.patas);

pug.latir();