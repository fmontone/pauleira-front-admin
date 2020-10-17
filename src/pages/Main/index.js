import React from 'react';

import { Container } from './styles';

function Main() {
  console.log('API URL', process.env.REACT_APP_API_URL);
  console.log('APP URL', process.env.REACT_APP_URL);
  console.log('ENV', process.env.NODE_ENV);
  console.log('REACT_PITUIN', process.env.REACT_APP_PITUIN);

  return (
    <Container>
      <h1>Admin Pauleira</h1>

      <p>
        Este é o admin do site da Pauleira. Para esta primeira versão com código
        aberto, estão disponíveis apenas os CRUDS de usuário e galeria para fins
        de teste.
      </p>

      <p>
        O objetivo deste projeto foi iniciar a migração de um site baseado em
        Wordpress para um sistema completamente feito à mão com frontend em
        React para o site e área administrativa e backend em Node Js, como
        projeto de estudo com aplicação prática e real.
      </p>

      <p>
        Com a base criada com essa stack, o objetivo é escalar a aplicação
        conectando micro serviços e recursos de maneira prática e contínua.
      </p>

      <p>
        Para mais informações acompanhe as atualizações por meio dos canais da
        Pauleira Guitars no{' '}
        <a href="https://www.instagram.com/pauleiraguitars/">Instagram</a>,{' '}
        <a href="https://www.facebook.com/pauleira">Facebook</a>, ou{' '}
        <a href="https://www.youtube.com/pauleira">YouTube</a>.
      </p>
    </Container>
  );
}

export default Main;
