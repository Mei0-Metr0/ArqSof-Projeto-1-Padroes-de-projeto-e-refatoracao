import CidadesReporter from './CidadesReporter.js';
import JSONDataAdapter from '../adapters/JSONDataAdapter.js';
import AlternativeHTMLReportStrategy from '../strategies/AlternativeHTMLReportStrategy.js';

export default class CidadesAlternativeHTMLReporter extends CidadesReporter {
    constructor() {
        const strategy = new AlternativeHTMLReportStrategy();
        const adapter = new JSONDataAdapter();
        super(strategy, adapter);
    }
}
