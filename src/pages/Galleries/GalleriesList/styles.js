import styled from 'styled-components';

import { MdEdit } from 'react-icons/md';

import Icon from '~/components/Icon';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const List = styled.ul`
  width: 100%;
  margin-bottom: 16px;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media ${device.tabletLs} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);

  background-color: #fff;

  cursor: pointer;
`;

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 56.25%;

  border-radius: 6px 6px 0 0;

  background: url(${(props) => props.src}) center center no-repeat;
  background-size: cover;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;

  margin-right: 8px;
  font-size: 12px;
`;

export const IconLikes = styled(Icon).attrs({
  name: 'social-like-heavymetal',
  color: colors.primary,
})``;

export const Status = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.greyHeavy};
`;

export const ButtonIcon = styled.button.attrs({ type: 'button' })`
  width: 24px;
  height: 24px;

  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled(MdEdit).attrs({
  color: colors.grey,
  size: '20',
})`
  :active {
    transform: translate(1px, 1px);
  }
`;

export const InfoTitle = styled.h4`
  margin: 8px 0;
  padding: 0 8px;

  color: ${colors.greyHeavy};
`;
