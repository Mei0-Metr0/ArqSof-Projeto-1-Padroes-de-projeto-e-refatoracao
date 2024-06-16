export default class HTMLReportStrategy {
  reportar(cidades) {
      let result = `
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <title>Relatório de Nomes de Cidades</title>
</head>
<body>
  <h1>Relatório de Nomes de Cidades</h1>
  <ul>
`;

      cidades.forEach(cidade => {
          result += `     <li>${cidade}</li>\n`;
      });

      result += `
  </ul>
</body>
</html>`;

      return result;
  }
}
