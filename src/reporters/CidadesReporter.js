import * as fs from 'node:fs';

export default class CidadesReporter {
    constructor(strategy, adapter) {
        this.strategy = strategy;
        this.adapter = adapter;
    }

    ler(caminho) {
        this.dados = fs.readFileSync(caminho, 'utf-8');
    }

    parse() {
        this.cidades = this.adapter.parse(this.dados);
    }

    reportar() {
        return this.strategy.reportar(this.cidades);
    }

    gerarRelatorio(caminhoEntrada, caminhoSaida) {
        this.ler(caminhoEntrada);
        this.parse();
        const conteudo = this.reportar();
        this.salvarRelatorio(caminhoSaida, conteudo);
    }

    salvarRelatorio(caminhoSaida, conteudo) {
        fs.writeFileSync(caminhoSaida, conteudo, 'utf-8');
    }
}