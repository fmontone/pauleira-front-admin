import styled from 'styled-components';

import { MdEdit } from 'react-icons/md';

import colors from '~/styles/colors';

export const List = styled.ul`
  width: 100%;
  padding: none;
  list-style: none;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);

  & + li {
    border-top: 1px solid ${colors.greyLighter};
  }
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

export const IconWrapper = styled.button`
  width: 24px;
  height: 100%;
  margin-left: 8px;
`;

export const EditIcon = styled(MdEdit).attrs({
  color: colors.statusInfo,
  size: '20',
})`
  :active {
    transform: translate(1px, 1px);
  }
`;
