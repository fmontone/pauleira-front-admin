import React from 'react';

import { GiExitDoor } from 'react-icons/gi';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoMdImages } from 'react-icons/io';

import history from '~/services/history';
import { useAuth } from '~/hooks/AuthContext';

import { Wrapper, Container, Button } from './styles';

function Footer() {
  const { signOut } = useAuth();
  return (
    <Wrapper>
      <Container>
        <Button onClick={() => history.push('/')}>
          <AiOutlineDashboard /> Dashboard
        </Button>
        <Button onClick={() => history.push('/admin-users')}>
          <FiUsers />
          Usuários Adm
        </Button>
        <Button onClick={() => history.push('/galleries')}>
          <IoMdImages />
          Galerias
        </Button>
        <Button onClick={() => history.push('/settings')}>
          <FiSettings />
          Sua Conta
        </Button>
        <Button onClick={() => signOut()}>
          <GiExitDoor />
          Logout
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Footer;
