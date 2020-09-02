import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';
import useTranslateUserRole from '~/hooks/useTranslateUserRole';
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

import GalleriesList from './GalleriesList';

function Galleries() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  // Content Data
  const [galleries, setGalleries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null); // eslint-disable-line

  // Filters and Sorting
  const dropOptions = [
    'Mais Recentes',
    'Mais Antigos',
    'Mais Curtidas',
    'Menos Curtidas',
    'A-z',
    'z-A',
  ];

  const [sortProperty, setSortProperty] = useState(null);
  const [order, setOrder] = useState(null);
  const translated = useTranslateUserRole(galleries);
  const sorted = useSortList(translated, sortProperty, order);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/galleries');

      setGalleries(data);
      setLoading(false);
    }

    fetchData();
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

        <ButtonAdd
          onClick={() => history.push('/galleries/new')}
          color={colors.statusInfo}
        >
          Adicionar Galeria
        </ButtonAdd>
      </HeadlineContainer>

      <GalleriesList payload={sorted} />

      {sorted.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>}
    </Container>
  );
}

export default Galleries;
