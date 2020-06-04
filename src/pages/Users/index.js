import React, { useState } from 'react';

import colors from '~/styles/colors';

import Icon from '~/components/Icon';
import {
  Container,
  HeadlineContainer,
  ButtonAdd,
  Search,
  Settings,
  SelectFilter,
  DropDownWrapper,
  IconDisplayWrapper,
  StyledIconButton,
  Tabs,
} from './styles';

function Users() {
  const tabOptions = ['Todos', 'Alunos', 'Instrutores'];
  const [tabActive, setTabActive] = useState(tabOptions[0]);
  // const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [settingsType, setSettingsType] = useState('block');
  const [dropActive, setDropActive] = useState(undefined);

  const dropOptions = ['Mais Recentes', 'Mais Antigos', 'A a Z', 'Z a A'];

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT: ', searchQuery);
  }
  function handleSearchFormChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleDropDownChange(e) {
    console.log(e.target.value);
  }

  return (
    <Container>
      <HeadlineContainer>
        <ButtonAdd color={colors.statusInfo}>Adicionar Usuário</ButtonAdd>

        <Search
          onSubmit={(e) => handleSearchFormSubmit(e)}
          onChange={(e) => handleSearchFormChange(e)}
        />

        <Settings>
          <DropDownWrapper>
            <SelectFilter
              dropOptions={dropOptions}
              onChange={() => console.log('CHANGE')}
            />
          </DropDownWrapper>

          <IconDisplayWrapper>
            <StyledIconButton>
              <Icon
                name="settings-block"
                color={
                  settingsType === 'block' ? colors.primary : colors.greyLight
                }
              />
            </StyledIconButton>
            <StyledIconButton
              onClick={() => {
                setSettingsType('list');
              }}
            >
              <Icon
                name="settings-list"
                color={
                  settingsType === 'list' ? colors.primary : colors.greyLight
                }
              />
            </StyledIconButton>
          </IconDisplayWrapper>
        </Settings>
      </HeadlineContainer>

      <Tabs
        tabOptions={tabOptions}
        onClick={(e) => setTabActive(e.target.innerText)}
      />
    </Container>
  );
}

export default Users;
