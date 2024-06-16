import CidadesReporter from './CidadesReporter.js';
import JSONDataAdapter from '../adapters/JSONDataAdapter.js';
import TXTReportStrategy from '../strategies/TXTReportStrategy.js';

export default class CidadesTXTReporter extends CidadesReporter {
    constructor() {
        const strategy = new TXTReportStrategy();
        const adapter = new JSONDataAdapter();
        super(strategy, adapter);
    }
}
