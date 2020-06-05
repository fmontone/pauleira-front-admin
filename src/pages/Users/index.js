import React, { useState } from 'react';

import colors from '~/styles/colors';

import {
  Container,
  HeadlineContainer,
  ButtonAdd,
  Search,
  Settings,
  SelectFilter,
  DropDownWrapper,
  StyledDisplaySelector,
  Tabs,
} from './styles';

import UsersList from './UsersList';

function Users() {
  const [searchQuery, setSearchQuery] = useState(null); // eslint-disable-line
  const tabOptions = ['Todos', 'Alunos', 'Instrutores'];
  const [tabActive, setTabActive] = useState(tabOptions[0]); // eslint-disable-line
  const [displayList, setDisplayList] = useState(true);
  const [dropActive, setDropActive] = useState(undefined); // eslint-disable-line
  // const [users, setUsers] = useState([]);

  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log('SUBMIT: ', searchQuery);
  }

  function handleDisplayListSelect(e) {
    e.persist();
  }

  return (
    <Container>
      <HeadlineContainer>
        <ButtonAdd color={colors.statusInfo}>Adicionar Usuário</ButtonAdd>

        <Search
          onSubmit={(e) => handleSearchFormSubmit(e)}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Procurar Usuário..."
        />

        <Settings>
          <DropDownWrapper>
            <SelectFilter
              dropOptions={dropOptions}
              onChange={(e) => setDropActive(e.target.value)}
            />
          </DropDownWrapper>

          <StyledDisplaySelector
            displayList={displayList}
            onClick={(e) => handleDisplayListSelect(e)}
          />
        </Settings>
      </HeadlineContainer>

      <Tabs
        tabOptions={tabOptions}
        onClick={(e) => setTabActive(e.target.innerText)}
      />

      <UsersList displayList={displayList} />
    </Container>
  );
}

export default Users;
