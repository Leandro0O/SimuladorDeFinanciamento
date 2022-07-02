import {Parcela} from './parcela.js';

class Financiamento{
    #taxaJuros;
    #prazo;
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo){
        this.taxaJuros = taxaJuros;
        this.#prazo = prazo;
        this.#parcelas.push(new this.#parcelas(0,0,0,0,valor - entrada));
    }
}