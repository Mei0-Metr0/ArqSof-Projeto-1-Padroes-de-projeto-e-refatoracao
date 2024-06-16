export default class ReporterFactory {
    createReporter(format) {
        throw new Error('This method should be overridden');
    }
}