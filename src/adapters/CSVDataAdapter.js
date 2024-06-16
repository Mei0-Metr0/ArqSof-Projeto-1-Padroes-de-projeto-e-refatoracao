import DataAdapter from '../interfaces/DataAdapter.js';

export default class CSVDataAdapter extends DataAdapter {
    parse(data) {
        const rows = data.split('\n');
        return rows.slice(1).map(row => row.split(',')[2]);
    }
}