export default class TXTReportStrategy {
    reportar(cidades) {
        let result = `Relatório de Nomes de Cidades
=============================
`;

        cidades.forEach(cidade => {
            result += `* ${cidade}\n`;
        });

        return result;
    }
}