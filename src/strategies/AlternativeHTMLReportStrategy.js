export default class AlternativeHTMLReportStrategy {
    reportar(cidades) {
        let result = `
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <header>
      <h1>Relatório de Nomes de Cidades</h1>
    </header>
    <main>
      <ul>
`;

        cidades.forEach(cidade => {
            result += `     <li><span class="cidade">${cidade}</span> - UF</li>\n`;
        });

        result += `
      </ul>
    </main>
  </body>
</html>`;

        return result;
    }
}