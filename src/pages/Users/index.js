import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useTranslateUserRole from '~/hooks/useTranslateUserRole';
import useSortList from '~/hooks/useSortList';
import useListFilter from '~/hooks/useListFilter';

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
  const history = useHistory();

  // Content Data
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null); /* eslint-disable-line */

  // Filters and Sorting
  const tabOptions = ['Todos', 'Alunos', 'Instrutores', 'Admin'];
  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];

  const [tabActive, setTabActive] = useState(tabOptions[0]);
  const [sortProperty, setSortProperty] = useState(null);
  const [order, setOrder] = useState(null);
  const translated = useTranslateUserRole(users);
  const sorted = useSortList(translated, sortProperty, order);
  const filtered = useListFilter(sorted, 'role_translated', tabActive);

  useEffect(() => {
    setUsers(data);
  }, []);

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log('SUBMIT: ', searchQuery);
  }

  function handleSortSelect(e) {
    let selectSortProperty;
    let selectOrder;

    switch (e.target.value) {
      case dropOptions[0]:
        selectSortProperty = 'created_at';
        selectOrder = 'DES';
        break;
      case dropOptions[1]:
        selectSortProperty = 'created_at';
        selectOrder = 'ASC';
        break;
      case dropOptions[2]:
        selectSortProperty = 'name';
        selectOrder = 'ASC';
        break;
      case dropOptions[3]:
        selectSortProperty = 'name';
        selectOrder = 'DES';
        break;
      default:
        selectSortProperty = 'created_at';
        selectOrder = 'ASC';
        break;
    }

    setSortProperty(selectSortProperty);
    setOrder(selectOrder);
  }

  function handleTabFilter(e) {
    if (e.target.tagName !== 'BUTTON') return;
    setTabActive(e.target.innerText);
  }

  return (
    <Container>
      <HeadlineContainer>
        <ButtonLine>
          <ButtonAdd
            color={colors.statusInfo}
            onClick={() => history.push('/users/new')}
          >
            Adicionar Usuário
          </ButtonAdd>
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
              onChange={(e) => handleSortSelect(e)}
            />
          </DropDownWrapper>
        </SettingsLine>
      </HeadlineContainer>

      <Tabs tabOptions={tabOptions} onClick={(e) => handleTabFilter(e)} />

      <UsersList payload={filtered} />

      {sorted.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>}
    </Container>
  );
}

export default Users;
