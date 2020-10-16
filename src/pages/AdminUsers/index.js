import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';
import UsersContext from './usersContext';

import useSortList from '~/hooks/useSortList';

import colors from '~/styles/colors';

import {
  Container,
  HeadlineContainer,
  ButtonAdd,
  SettingsLine,
  Search,
  SelectFilter,
  DropDownWrapper,
  ButtonLoadMore,
} from './styles';

import UsersList from './UsersList';
import LoadingList from '~/components/LoadingList';

function AdminUsers() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(null);

  // Content Data
  const [users, setUsers] = useState([]);
  const [cacheUsers, setCacheUsers] = useState(null);

  // Filters and Sorting
  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];
  const [sortProperty, setSortProperty] = useState(null);
  const [order, setOrder] = useState('ASC');

  // Final List
  const sorted = useSortList(users, sortProperty, order);

  console.log('sorted', sorted);

  useEffect(() => {
    async function loadUserData() {
      const { data } = await api.get('/admin-users');

      setUsers(data);
      setCacheUsers(data);
      setLoading(false);
      setLoaded(true);
    }

    if (!loaded) loadUserData();
  }, [loaded]);

  function handleFilter(e) {
    if (e.target.value) {
      setUsers(
        cacheUsers.filter((user) =>
          user.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setUsers(cacheUsers);
    }
  }

  function handleSort(e) {
    switch (e.target.value) {
      case dropOptions[0]:
        setSortProperty('id');
        setOrder('DES');
        break;
      case dropOptions[1]:
        // mais antigos
        setSortProperty('id');
        setOrder('ASC');
        break;
      case dropOptions[2]:
        // A-z
        setSortProperty('name');
        setOrder('ASC');
        break;
      case dropOptions[3]:
        // Z-a
        setSortProperty('name');
        setOrder('DES');
        break;

      default:
        break;
    }
  }

  return (
    <UsersContext.Provider value={{ sorted, users, setUsers }}>
      <Container>
        <HeadlineContainer>
          <SettingsLine>
            <Search onChange={handleFilter} placeholder="Procurar Usuário..." />

            <DropDownWrapper>
              <SelectFilter
                dropOptions={dropOptions}
                onChange={(e) => handleSort(e)}
              />
            </DropDownWrapper>
          </SettingsLine>

          <ButtonAdd
            color={colors.statusInfo}
            onClick={() => history.push('/admin-users/new')}
          >
            Adicionar Usuário
          </ButtonAdd>
        </HeadlineContainer>

        {loading ? <LoadingList /> : <UsersList />}

        {users && users.length >= 10 && (
          <ButtonLoadMore>Carregar Mais</ButtonLoadMore>
        )}
      </Container>
    </UsersContext.Provider>
  );
}

export default AdminUsers;
