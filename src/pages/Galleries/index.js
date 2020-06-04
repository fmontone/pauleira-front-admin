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

import GalleriesList from './GalleriesList';

function Galleries() {
  const [searchQuery, setSearchQuery] = useState(null); // eslint-disable-line
  const tabOptions = ['Todos', 'Alunos', 'Instrutores'];
  const [tabActive, setTabActive] = useState(tabOptions[0]); // eslint-disable-line
  const [displayList, setDisplayList] = useState(true);
  const [dropActive, setDropActive] = useState(undefined); // eslint-disable-line
  // const [Galleries, setGalleries] = useState([]);

  const dropOptions = ['Mais Recentes', 'Mais Antigas', 'A-z', 'z-A'];

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log('SUBMIT: ', searchQuery);
  }

  return (
    <Container>
      <HeadlineContainer>
        <ButtonAdd color={colors.statusInfo}>Adicionar Galeria</ButtonAdd>

        <Search
          onSubmit={(e) => handleSearchFormSubmit(e)}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Procurar Galeria..."
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
            onClick={() => setDisplayList(!displayList)}
          />
        </Settings>
      </HeadlineContainer>

      <Tabs
        tabOptions={tabOptions}
        onClick={(e) => setTabActive(e.target.innerText)}
      />

      <GalleriesList />
    </Container>
  );
}

export default Galleries;
