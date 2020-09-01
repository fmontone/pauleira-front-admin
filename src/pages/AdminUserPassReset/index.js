import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

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

function AdminUserPassReset() {
  const history = useHistory();
  const { id, token } = useParams();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();

  useEffect(() => {
    async function dataValidate() {
      try {
        await api.get(`/admin-users/pass-reset/${id}/${token}`);
        setValidUser(true);
      } catch (err) {
        setValidUser(false);
      }

      setLoading(false);
    }

    dataValidate();
  }, [id, token]);

  async function handleDataSubmit(data) {
    setLoading(true);
    try {
      const { password } = data;
      await api.put(`/admin-users/pass-reset/${id}`, { id, password });

      setSuccess(true);
    } catch (err) {
      alert('Usuário não encontrado'); /*eslint-disable-line*/
    }

    setLoading(false);
  }

  return (
    <Container>
      <PageHeader>
        <Logo>
          <img src={PauleiraLogo} alt="Pauleira Guitars Logo" />
        </Logo>

        <Title className={!validUser ? 'title__error' : ''}>
          {validUser ? 'Nova Senha' : 'Erro: Link Inválido!'}
        </Title>

        {!loading && validUser && !success && (
          <p>Cadastre uma senha forte utilizando os campos abaixo.</p>
        )}

        {!loading && validUser && success && (
          <>
            <h4>Nova senha cadastrada com sucesso!</h4>
            <p>
              Agora você pode fazer login com sua nova senha. Se tiver
              problemas, procure pelo administrador do site.
            </p>
          </>
        )}

        {!loading && !validUser && (
          <>
            <p>
              Se estiver tendo problemas para acessar sua conta, entre em
              contato com o administrador do site.
            </p>

            <LoginButton
              color={colors.primary}
              onClick={() => history.push('/')}
            >
              Voltar para o login
            </LoginButton>
          </>
        )}
      </PageHeader>

      {validUser && (
        <>
          {!success && (
            <>
              <Form onSubmit={handleSubmit(handleDataSubmit)}>
                <Input
                  name="password"
                  type="password"
                  placeholder="Nova senha..."
                  ref={register({
                    required: 'Campo Obrigatório',
                    minLength: {
                      value: 6,
                      message: 'Mínimo de 6 caracteres',
                    },
                  })}
                  errorText={errors.password && errors.password.message}
                />
                <Input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirmar senha..."
                  ref={register({
                    required: 'Campo Obrigatório',
                    validate: (value) =>
                      value === watch('password') || 'As senhas não são iguais',
                  })}
                  errorText={
                    errors.confirm_password && errors.confirm_password.message
                  }
                />

                <SubmitButton type="submit">
                  {loading ? 'Carregando...' : 'Enviar Email'}
                </SubmitButton>
              </Form>
            </>
          )}

          <LoginButton onClick={() => history.push('/')}>
            Voltar para o login
          </LoginButton>
        </>
      )}
    </Container>
  );
}

export default AdminUserPassReset;
