import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { useToast } from '~/hooks/ToastContext';

import {
  Container,
  PageHeader,
  Logo,
  Title,
  Form,
  StyledInput as Input,
  SubmitButton,
  LoginButton,
} from './styles';

import colors from '~/styles/colors';

import PauleiraLogo from '~/assets/svg/pauleira-logo.svg';

function AdminUserPassForgot() {
  const history = useHistory();
  const [loading, setLoading] = useState();
  const [emailSent, setEmailSent] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const { addToast } = useToast();

  async function handleDataSubmit(data) {
    setLoading(true);

    try {
      await api.put('/admin-users/pass-forgot/', data);

      setEmailSent(true);
    } catch (err) {
      addToast({
        type: 'error',
        message: 'Usuário não encontrado',
      });
    }

    setLoading(false);
  }

  return (
    <Container>
      <PageHeader>
        <Logo>
          <img
            src={PauleiraLogo}
            color={colors.blackDeep}
            alt="Pauleira Guitars Logo"
          />
        </Logo>
        <Title>Esqueci minha senha</Title>

        {!emailSent ? (
          <p>
            Para cadastrar uma nova senha você deve adicionar seu email
            cadastrado no formulário abaixo.
          </p>
        ) : (
          <>
            <p>As instruções foram enviadas para o seu email cadastrado.</p>

            <p>
              Caso não tenha recebido, verifique em sua caixa de spam o e-mail
            </p>
            <p>
              <strong>no-reply@pauleira.com.br</strong>
            </p>
          </>
        )}
      </PageHeader>

      {!emailSent ? (
        <Form onSubmit={handleSubmit(handleDataSubmit)}>
          <Input
            name="email"
            type="text"
            label="Email"
            ref={register({
              required: 'Campo Obrigatório',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Este não é um email válido',
              },
            })}
            errorText={errors.email && errors.email.message}
          />

          <SubmitButton type="submit">
            {loading ? 'Carregando...' : 'Enviar Email'}
          </SubmitButton>
          <LoginButton color={colors.grey} onClick={() => history.push('/')}>
            Voltar para o login
          </LoginButton>
        </Form>
      ) : (
        <LoginButton color={colors.primary} onClick={() => history.push('/')}>
          Voltar para o login
        </LoginButton>
      )}

      <Form />
    </Container>
  );
}

export default AdminUserPassForgot;
