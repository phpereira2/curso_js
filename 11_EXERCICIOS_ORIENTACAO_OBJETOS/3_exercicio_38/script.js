class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco('Rua A','Bairro A','Cidade A','Estado A');

console.log(endereco);

endereco.novaRua = 'Rua B';

console.log(endereco);

endereco.novaCidade = 'Cidade B';

console.log(endereco);