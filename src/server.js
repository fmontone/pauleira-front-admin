const express = require('express');
const path = require('path');

const app = express();

const config = {
  folder: 'build',
  forceHttps: true,
  port: 3000,
};

if (config.forceHttps)
  // Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
  app.use((req, res, next) => {
    // Cria um middleware onde todas as requests passam por ele

    if (req.headers['x-forwarded-proto'] === 'http') {
      // Checa se o protocolo informado nos headers é HTTP
      res.redirect(`https://${req.headers.host}${req.url}`);

      // Redireciona pra HTTPS
      // Se a requisição já é HTTPS
    } else {
      next();
      // Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    }
  });

app.use(express.static(config.folder)); // Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get('*', (req, res) => {
  // O wildcard '*' serve para servir o mesmo index.html independente do folder especificado pelo navegador.
  res.sendFile(path.join(__dirname, config.folder, 'index.html'));
});

app.listen(config.port, () => {
  console.log(`Pauleira Front Admin Listening ${config.port}!`); /* eslint-disable-line */
});
