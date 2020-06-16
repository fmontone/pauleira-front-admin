import React, { useState, useEffect } from 'react';

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

import GalleriesList from './GalleriesList';

import data from './dummy_galleries.json';

function Galleries() {
  // Content Data
  const [galleries, setGalleries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null); // eslint-disable-line

  // Filters and Sorting
  const tabOptions = ['Todos', 'Pauleira', 'Alunos', 'Instrutores'];
  const dropOptions = [
    'Mais Recentes',
    'Mais Antigos',
    'Mais Curtidas',
    'Menos Curtidas',
    'A-z',
    'z-A',
  ];

  const [tabActive, setTabActive] = useState(tabOptions[0]);
  const [sortProperty, setSortProperty] = useState(null);
  const [order, setOrder] = useState(null);
  const translated = useTranslateUserRole(galleries);
  const sorted = useSortList(translated, sortProperty, order);
  const filtered = useListFilter(sorted, 'role_translated', tabActive);

  useEffect(() => {
    setGalleries(data);
  }, []);

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log('SUBMIT: ', searchQuery);
  }

  function handleSortSelect(e) {
    let selectSortProperty;
    let selectOrder;

    // 'Mais Recentes',
    // 'Mais Antigos',
    // 'Mais Curtidas',
    // 'Menos Curtidas',
    // 'A-z',
    // 'z-A',

    switch (e.target.value) {
      case dropOptions[0]:
        selectSortProperty = 'createdAt';
        selectOrder = 'DES';
        break;
      case dropOptions[1]:
        selectSortProperty = 'createdAt';
        selectOrder = 'ASC';
        break;
      case dropOptions[2]:
        selectSortProperty = 'likes';
        selectOrder = 'ASC';
        break;
      case dropOptions[3]:
        selectSortProperty = 'likes';
        selectOrder = 'DES';
        break;
      case dropOptions[4]:
        selectSortProperty = 'title';
        selectOrder = 'ASC';
        break;
      case dropOptions[5]:
        selectSortProperty = 'title';
        selectOrder = 'DES';
        break;
      default:
        selectSortProperty = 'createdAt';
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
          <ButtonAdd color={colors.statusInfo}>Adicionar Galeria</ButtonAdd>
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

      <Tabs
        tabOptions={tabOptions}
        onClick={(e) => setTabActive(e.target.innerText)}
      />

      <GalleriesList payload={filtered} />

      {filtered.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>}
    </Container>
  );
}

export default Galleries;
