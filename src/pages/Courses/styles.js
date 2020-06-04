import styled from 'styled-components';

// import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import SearchForm from '~/components/SearchForm';
import { Select } from '~/components/Form';
import TabFilter from '~/components/TabFilter';
import DisplaySelector from '~/components/DisplaySelector';

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
  flex-direction: column;
  align-items: center;
`;

export const ButtonAdd = styled(ButtonCustom)`
  margin: 30px 0;
`;

export const Search = styled(SearchForm)`
  width: 100%;
  margin-bottom: 16px;
`;

export const Settings = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DropDownWrapper = styled.div`
  width: 160px;
  max-width: 160px;
`;

export const SelectFilter = styled(Select)`
  margin-bottom: 16px;
`;

export const StyledDisplaySelector = styled(DisplaySelector)``;

export const Tabs = styled(TabFilter)`
  margin-bottom: 16px;
`;
