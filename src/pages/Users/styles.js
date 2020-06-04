import styled from 'styled-components';

import colors from '~/styles/colors';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonCustom from '~/components/ButtonCustom';
import SearchForm from '~/components/SearchForm';
import { Select } from '~/components/Form';
import IconButton from '~/components/IconButton';

export const Container = styled(ContainerCustom)`
  display: flex;
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

export const IconDisplayWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  :last-child {
    margin-left: 8px;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: auto;
`;

export const DisplaySettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  height: 26px;
  margin-bottom: 32px;
  border-top: 1px solid ${colors.greyLight};
  display: flex;
`;

export const TabsCustom = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TabOption = styled.div`
  height: 26px;
  position: relative;

  button {
    height: 26px;
    padding-top: 8px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.grey};
    background-color: transparent;

    cursor: pointer;

    &.active {
      color: ${colors.black};
    }
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: -1px;
    left: 0;
    background: transparent;

    transition: all 0.2s ease-in;

    &.active {
      background-color: ${colors.terceary};
    }
  }
`;
