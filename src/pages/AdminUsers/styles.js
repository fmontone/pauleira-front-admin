import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import SearchForm from '~/components/SearchForm';
import { Select } from '~/components/Form';

import { device } from '~/styles/queries';

export const Container = styled(ContainerCustom)`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const HeadlineContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tabletLs} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const ButtonAdd = styled(ButtonCustom)`
  margin-bottom: 32px;

  @media ${device.tabletLs} {
    margin-bottom: unset;
  }
`;

export const SettingsLine = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;

  @media ${device.tabletLs} {
    width: 50%;
    margin-bottom: unset;
  }
`;

export const Search = styled(SearchForm)`
  width: 100%;
  max-width: 300px;
  margin-right: 16px;
`;

export const DropDownWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const SelectFilter = styled(Select)`
  margin-bottom: 16px;

  @media ${device.tabletLs} {
    margin-bottom: unset !important;
  }
`;

export const ButtonLoadMore = styled(ButtonCustom).attrs({
  model: 'outline',
  color: colors.terceary,
})`
  margin-bottom: 16px;
`;
