import styled from 'styled-components';

import ButtonCustom from '~/components/ButtonCustom';

import colors from '~/styles/colors';

export const ListItem = styled.li`
  & + li {
    border-top: 1px solid ${colors.greyLighter};
  }
`;

export const ButtonWrapp = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: unset;
`;

export const ProfilePicWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.grey};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: auto;
`;

export const TitlesWrapper = styled.div`
  margin-left: 8px;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 400;
  display: block;
`;

export const Aka = styled.span`
  display: block;
  font-size: 12px;
  color: ${colors.greyHeavy};
`;

export const GoIcon = styled.div`
  width: 24px;
  height: 100%;
  margin-left: 8px;
`;

export const ButtonLoadMore = styled(ButtonCustom).attrs({
  model: 'outline',
  color: colors.terceary,
})`
  margin-bottom: 16px;
`;
