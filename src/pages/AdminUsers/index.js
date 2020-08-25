import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import useSortList from '~/hooks/useSortList';

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
  ButtonLoadMore,
} from './styles';

import UsersList from './UsersList';

function AdminUsers() {
  const history = useHistory();

  // Content Data
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [usersFiltered, setUsersFiltered] = useState(null);

  // Filters and Sorting
  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];

  const [sortProperty, setSortProperty] = useState(null);
  const [order, setOrder] = useState(null);
  const sorted = useSortList(users, sortProperty, order);

  useEffect(() => {
    async function loadUserData() {
      const { data } = await api.get('/admin-users');
      setUsers(data);
    }

    loadUserData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setUsersFiltered(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setUsersFiltered(null);
    }
  }, [searchQuery, users]);

  function handleSearchQuery(e) {
    if (e.target.value === '') {
      setSearchQuery(null);
    } else {
      setSearchQuery(e.target.value);
    }
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

  return (
    <Container>
      <HeadlineContainer>
        <ButtonLine>
          <ButtonAdd
            color={colors.statusInfo}
            onClick={() => history.push('/admin-users/new')}
          >
            Adicionar Usuário
          </ButtonAdd>
        </ButtonLine>

        <SettingsLine>
          <Search
            onChange={(e) => handleSearchQuery(e)}
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

      <UsersList payload={usersFiltered || sorted} />

      {sorted.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>}
    </Container>
  );
}

export default AdminUsers;
