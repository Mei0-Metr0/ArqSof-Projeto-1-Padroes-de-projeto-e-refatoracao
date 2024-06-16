import CidadesReporter from './CidadesReporter.js';
import JSONDataAdapter from '../adapters/JSONDataAdapter.js';
import HTMLReportStrategy from '../strategies/HTMLReportStrategy.js';

export default class CidadesHTMLReporter extends CidadesReporter {
    constructor() {
        const strategy = new HTMLReportStrategy();
        const adapter = new JSONDataAdapter();
        super(strategy, adapter);
    }
}
