import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import { useAdmUsers } from '~/hooks/UsersAdmContext';
import sortList from '~/utils/sortList';

import colors from '~/styles/colors';

import PageTitle from '~/components/PageTitle';

import {
  Container,
  HeadlineContainer,
  ButtonAdd,
  SettingsLine,
  Search,
  SelectFilter,
  DropDownWrapper,
  // ButtonLoadMore,
} from './styles';

import UsersList from './UsersList';
import LoadingList from '~/components/LoadingList';

function AdminUsers() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(null);

  // Context Data
  const {
    admUsers,
    setAdmUsers,
    sortOptions,
    admUsersFilter,
    setCacheAdmUsers,
  } = useAdmUsers();

  useEffect(() => {
    async function fetchAdmUsers() {
      const { data } = await api.get('/admin-users');

      setAdmUsers(sortList(data, sortOptions[0]));
      setCacheAdmUsers(sortList(data, sortOptions[0]));
      setLoading(false);
      setLoaded(true);
    }

    if (!loaded) fetchAdmUsers();
  }, [loaded, setAdmUsers, setCacheAdmUsers, sortOptions]);

  function handleSort(index) {
    setAdmUsers(sortList(admUsers, sortOptions[index]));
  }

  return (
    <Container>
      <PageTitle>Usuários Administrativos</PageTitle>
      <HeadlineContainer>
        <SettingsLine>
          <Search
            onChange={(e) => admUsersFilter(e.target.value)}
            placeholder="Procurar Usuário..."
          />

          <DropDownWrapper>
            <SelectFilter
              dropOptions={sortOptions}
              onChange={(e) => handleSort(e.target.value)}
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

      {/* {users && users.length >= 10 && (
        <ButtonLoadMore>Carregar Mais</ButtonLoadMore>
      )} */}
    </Container>
  );
}

export default AdminUsers;
