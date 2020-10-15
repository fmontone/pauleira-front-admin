import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';
import UsersContext from './usersContext';

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

  // Content Data
  const [users, setUsers] = useState([]);

  // Filters and Sorting
  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A-z', 'z-A'];

  function sortData(data, criteria, order = 'ASC') {
    if (order === 'ASC') {
      return data.sort((a, b) => a[criteria] - b[criteria]);
    }
    if (order === 'DES') {
      return data.sort((a, b) => a[criteria] - b[criteria]).reverse();
    }

    return data;
  }

  useEffect(() => {
    async function loadUserData() {
      const { data } = await api.get('/admin-users');

      console.log(sortData(data, 'id', 'ASC'));

      setUsers(data);
      setLoading(false);
    }

    loadUserData();
  }, []);

  // useEffect(() => {
  //   if (searchQuery) {
  //     setCacheUsers(users);
  //     setUsers(
  //       users.filter((user) =>
  //         user.name.toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //     );
  //   }
  // }, [searchQuery, users]);

  function handleFilter(e) {
    if (e.target.data.length > 3) {
      console.log(e.target.data);
    }
  }

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <Container>
        <HeadlineContainer>
          <SettingsLine>
            <Search onChange={handleFilter} placeholder="Procurar Usuário..." />

            <DropDownWrapper>
              <SelectFilter dropOptions={dropOptions} onChange={() => {}} />
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

        {users.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>}
      </Container>
    </UsersContext.Provider>
  );
}

export default AdminUsers;
