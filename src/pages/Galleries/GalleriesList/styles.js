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
  height: 64px;
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

export const ThumbWrapper = styled.div`
  width: 86px;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const Thumb = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitlesWrapper = styled.div`
  margin-left: 8px;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 400;
  display: block;
`;

export const StatusInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

export const StatusInfo = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 16px;
  font-size: 12px;
  color: ${colors.greyHeavy};
`;

export const IconPics = styled(MdEdit).attrs({
  color: colors.greyLight,
  size: 16,
})`
  margin-right: 8px;
  transform: translateY(1px);
`;

export const IconLikes = styled(MdEdit).attrs({
  color: colors.greyLight,
  size: 16,
})`
  margin-right: 8px;
  transform: translateY(1px);
`;

export const Status = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.statusSuccess};
`;

export const IconWrapper = styled.button`
  width: 24px;
  height: 100%;
  margin: 0 8px;
`;

export const EditIcon = styled(MdEdit).attrs({
  color: colors.statusInfo,
  size: '20',
})`
  :active {
    transform: translate(1px, 1px);
  }
`;
