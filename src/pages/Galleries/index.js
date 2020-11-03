import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';
import { useGalleriesAdm } from '~/hooks/GalleriesAdmContext';
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
} from './styles';

import GalleriesList from './GalleriesList';

function Galleries() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(null);

  // Context Data
  const {
    galleriesAdm,
    setGalleriesAdm,
    setCacheGalleriesAdm,
    galleriesAdmFilter,
    sortOptions,
  } = useGalleriesAdm();

  useEffect(() => {
    async function fetchGalleries() {
      const { data } = await api.get('/galleries');

      setGalleriesAdm(sortList(data, sortOptions[0]));
      setCacheGalleriesAdm(sortList(data, sortOptions[0]));
      setLoading(false);
      setLoaded(true);
    }

    if (!loaded) fetchGalleries();
  }, [
    galleriesAdm,
    loaded,
    setCacheGalleriesAdm,
    setGalleriesAdm,
    sortOptions,
  ]);

  function handleSort(index) {
    setGalleriesAdm(sortList(galleriesAdm, sortOptions[index]));
  }

  return (
    <Container>
      <PageTitle>Galerias Pauleira</PageTitle>
      <HeadlineContainer>
        <SettingsLine>
          <Search
            onChange={(e) => galleriesAdmFilter(e.target.value)}
            placeholder="Filtrar Galerias..."
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
          onClick={() => history.push('/galleries/new')}
        >
          Adicionar Galeria
        </ButtonAdd>
      </HeadlineContainer>

      {loading ? <h3>Loading</h3> : <GalleriesList />}

      {/* {sorted.length >= 10 && <ButtonLoadMore>Carregar Mais</ButtonLoadMore>} */}
    </Container>
  );
}

export default Galleries;
