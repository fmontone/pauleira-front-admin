import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '~/hooks/AuthContext';

import {
  Container,
  Logo,
  Title,
  PageHeader,
  Form,
  StyledInput as Input,
  ButtonSubmit,
  ButtonForgot,
} from './styles';
import colors from '~/styles/colors';

import PauleiraLogo from '~/assets/svg/pauleira-logo.svg';

function Login() {
  const { signIn, authLoading } = useAuth();

  const history = useHistory();

  const { handleSubmit, register, errors } = useForm();

  async function handleDataSubmit(data) {
    const { email, password } = data;

    signIn({ email, password });
  }

  return (
    <Container>
      <PageHeader>
        <Logo>
          <img src={PauleiraLogo} alt="Pauleira Guitars Logo" />
        </Logo>
        <Title>Admin Login</Title>
      </PageHeader>

      <Form onSubmit={handleSubmit(handleDataSubmit)}>
        <Input
          name="email"
          type="text"
          label="email"
          ref={register({
            required: 'Campo Obrigatório',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Este não é um email válido',
            },
          })}
          errorText={errors.email && errors.email.message}
        />
        <Input
          name="password"
          type="password"
          label="senha"
          ref={register({
            required: 'Campo Obrigatório',
            minLength: {
              value: 6,
              message: 'Mínimo 6 caracteres',
            },
          })}
          errorText={errors.password && errors.password.message}
        />

        <ButtonSubmit color={colors.primary} width="stretch" type="submit">
          {!authLoading ? 'Entrar na Aplicação' : 'Carregando...'}
        </ButtonSubmit>

        <ButtonForgot onClick={() => history.push('/pass-forgot')}>
          Esqueci minha senha
        </ButtonForgot>
      </Form>
    </Container>
  );
}

export default Login;
