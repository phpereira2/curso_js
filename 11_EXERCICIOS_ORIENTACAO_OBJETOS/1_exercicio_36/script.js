class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valorDeposito) {
        this.saldo += valorDeposito;
    }

    saque(valorSaque) {
        this.saldo -= valorSaque;
    }
}

let appConta = new Conta(1000);

appConta.deposito(1000);

console.log(appConta.saldo);

appConta.saque(1000);

console.log(appConta.saldo);
console.log(appConta);