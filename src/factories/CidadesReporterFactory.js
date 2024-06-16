import CidadesHTMLReporter from '../reporters/CidadesHTMLReporter.js';
import CidadesTXTReporter from '../reporters//CidadesTXTReporter.js';
import CidadesAlternativeHTMLReporter from '../reporters/CidadesAlternativeHTMLReporter.js';

export default class ReporterFactory {
    static createReporter(format) {
        if (format === 'html') {
            return new CidadesHTMLReporter();
        } else if (format === 'txt') {
            return new CidadesTXTReporter();
        } else if (format === 'alt-html') {
            return new CidadesAlternativeHTMLReporter();
        } else {
            throw new Error('Unknown format');
        }
    }
}
