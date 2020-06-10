import React, { useState } from 'react';

import colors from '~/styles/colors';

import {
  Container,
  HeadlineContainer,
  ButtonLine,
  ButtonAdd,
  SettingsLine,
  Search,
  SelectFilter,
  DropDownWrapper,
  Tabs,
  ButtonLoadMore,
} from './styles';

import UsersList from './UsersList';

import data from './dummy_users.json';

function Users() {
  const [searchQuery, setSearchQuery] = useState(null); // eslint-disable-line
  const tabOptions = ['Todos', 'Alunos', 'Instrutores'];
  const [tabActive, setTabActive] = useState(tabOptions[0]); // eslint-disable-line
  const [dropActive, setDropActive] = useState(undefined); // eslint-disable-line
  // const [users, setUsers] = useState([]);

  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log('SUBMIT: ', searchQuery);
  }

  return (
    <Container>
      <HeadlineContainer>
        <ButtonLine>
          <ButtonAdd color={colors.statusInfo}>Adicionar Usuário</ButtonAdd>
        </ButtonLine>

        <SettingsLine>
          <Search
            onSubmit={(e) => handleSearchFormSubmit(e)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Procurar Usuário..."
          />

          <DropDownWrapper>
            <SelectFilter
              dropOptions={dropOptions}
              onChange={(e) => setDropActive(e.target.value)}
            />
          </DropDownWrapper>
        </SettingsLine>
      </HeadlineContainer>

      <Tabs
        tabOptions={tabOptions}
        onClick={(e) => setTabActive(e.target.innerText)}
      />

      <UsersList payload={data} />

      <ButtonLoadMore>Carregar Mais</ButtonLoadMore>
    </Container>
  );
}

export default Users;
