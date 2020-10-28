import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { useToast } from '~/hooks/ToastContext';

import {
  Container,
  Logo,
  Title,
  StyledCard,
  Form,
  StyledInput as Input,
  SubmitButton,
  LoginButton,
} from './styles';
import colors from '~/styles/colors';

import Icon from '~/components/Icon';

function AdminUserActivate() {
  const history = useHistory();
  const { id, token } = useParams();

  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState(false);
  const [validUser, setValidUser] = useState(true);

  const { register, handleSubmit, watch, errors } = useForm();

  const { addToast } = useToast();

  useEffect(() => {
    async function dataValidate() {
      try {
        await api.get(`/admin-users/pass-reset/${id}/${token}`);
      } catch (err) {
        setValidUser(false);
      }
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
      addToast({
        type: 'error',
        message: 'Usuário não encontrado',
      });
    }

    setLoading(false);
  }

  return (
    <Container>
      <Logo>
        <Icon name="logo-flying-p" size="72" color={colors.blackDeep} />
      </Logo>
      <Title>{validUser ? 'Ativar Conta' : 'Link Inválido'}</Title>

      {validUser && (
        <>
          <StyledCard>
            {!success ? (
              <>
                <p>
                  Você foi adicionado como usuário administrativo das aplicações
                  da Pauleira.
                </p>
                <p>
                  Cadastre uma senha forte utilizando os campos abaixo para
                  ativar sua conta.
                </p>
              </>
            ) : (
              <>
                <h4>Conta ativada com sucesso!</h4>

                <p>
                  Agora você pode fazer login com sua nova senha. Se tiver
                  problemas, procure pelo administrador do site.
                </p>

                <LoginButton onClick={() => history.push('/')}>
                  Voltar para o login
                </LoginButton>
              </>
            )}

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
                        value === watch('password') ||
                        'As senhas não são iguais',
                    })}
                    errorText={
                      errors.confirm_password && errors.confirm_password.message
                    }
                  />

                  <SubmitButton type="submit">
                    {loading ? 'Carregando...' : 'Enviar Email'}
                  </SubmitButton>
                  <LoginButton onClick={() => history.push('/')}>
                    Voltar para o login
                  </LoginButton>
                </Form>
              </>
            )}
          </StyledCard>
        </>
      )}

      {!validUser && (
        <StyledCard>
          <p>
            Se estiver tendo problemas para acessar sua conta, entre em contato
            com o administrador do site.
          </p>
        </StyledCard>
      )}
    </Container>
  );
}

export default AdminUserActivate;
