export class Parcela{
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numerovalor,juros,amortizacao,saldo){
        this.#numero = numerovalor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;

    }
    
    getSaldo(){
        return this.#saldo;
    }
}