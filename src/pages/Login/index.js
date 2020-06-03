import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Logo, Title, MyForm, MyInput, MyButton } from './styles';
import colors from '~/styles/colors';

import Icon from '~/components/Icon';

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [formLogin, setFormLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  function handleInputUpdate(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassWord(e.target.value);
    }
  }

  async function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Logo>
        <Icon name="logo-flying-p" size="72" color={colors.greyLighter} />
      </Logo>
      <Title>Login</Title>
      <MyForm onSubmit={handleSubmit} onInput={(e) => handleInputUpdate(e)}>
        <MyInput name="email" type="text" placeholder="Seu email..." />
        {formLogin && (
          <MyInput name="password" type="password" placeholder="Sua senha..." />
        )}

        {formLogin && (
          <MyButton color={colors.primary} width="stretch" type="submit">
            {!loading ? 'Entrar na Aplicação' : 'Carregando...'}
          </MyButton>
        )}

        {!formLogin && (
          <MyButton color={colors.primary} width="stretch" type="submit">
            {!loading ? 'Recuperar Senha' : 'Carregando...'}
          </MyButton>
        )}

        <MyButton
          color={colors.primary}
          width="stretch"
          model="outline"
          type="button"
          onClick={() => setFormLogin(!formLogin)}
        >
          {formLogin ? 'Esqueci minha senha' : 'Voltar para o Login'}
        </MyButton>
      </MyForm>
    </Container>
  );
}

export default Login;
