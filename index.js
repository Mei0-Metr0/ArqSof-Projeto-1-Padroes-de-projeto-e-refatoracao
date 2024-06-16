import ReporterFactory from './src/factories/CidadesReporterFactory.js';

const [, , filename, format, outputFilename] = process.argv;

try {
    const reporter = ReporterFactory.createReporter(format);
    reporter.gerarRelatorio(`./data/${filename}`, `./output/${outputFilename}`);
    console.log(`Relatório gerado com sucesso em ./output/${outputFilename}`);
} catch (error) {
    console.error(error.message);
}