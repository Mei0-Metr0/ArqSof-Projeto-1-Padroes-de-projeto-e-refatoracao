import DataAdapter from '../interfaces/DataAdapter.js';

export default class JSONDataAdapter extends DataAdapter {
    parse(data) {
        const jsonData = JSON.parse(data);
        return jsonData.map(item => item.Nome);
    }
}