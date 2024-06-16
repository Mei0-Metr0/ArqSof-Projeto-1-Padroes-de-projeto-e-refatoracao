import { expect } from 'chai';
import fs from 'fs';
import ReporterFactory from '../src/factories/CidadesReporterFactory.js';

describe('ReporterFactory', function () {
    it('should create an HTML report', function () {
        const reporter = ReporterFactory.createReporter('html');
        reporter.gerarRelatorio('./data/cidades-2.json', './output/test-report.html');

        const generatedReport = fs.readFileSync('./output/test-report.html', 'utf-8');
        expect(generatedReport).to.include('<html>');
        expect(generatedReport).to.include('<h1>Relatório de Nomes de Cidades</h1>');
        expect(generatedReport).to.include('<ul>');
    });

    it('should create a TXT report', function () {
        const reporter = ReporterFactory.createReporter('txt');
        reporter.gerarRelatorio('./data/cidades-2.json', './output/test-report.txt');

        const generatedReport = fs.readFileSync('./output/test-report.txt', 'utf-8');
        expect(generatedReport).to.include('Relatório de Nomes de Cidades');
        expect(generatedReport).to.include('* Abatiá');
    });

    it('should create an alternative HTML report', function () {
        const reporter = ReporterFactory.createReporter('alt-html');
        reporter.gerarRelatorio('./data/cidades-2.json', './output/test-alt-report.html');

        const generatedReport = fs.readFileSync('./output/test-alt-report.html', 'utf-8');
        expect(generatedReport).to.include('<html>');
        expect(generatedReport).to.include('<header>');
        expect(generatedReport).to.include('<span class="cidade">Abatiá</span> - UF');
    });
});
