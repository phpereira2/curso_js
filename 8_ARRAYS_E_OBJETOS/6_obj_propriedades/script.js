let pessoa = {
    nome: 'Pedro',
    idade: 21,
    profissao: 'Desempregado',
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);