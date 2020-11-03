import styled from 'styled-components';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-bottom: 32px;

  border-radius: 16px;

  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;

  overflow: hidden;

  &.dropzone__idle {
    border: ${(props) =>
      props.src ? 'unset' : `2px dashed ${colors.greyLight}`};
  }

  &.dropzone__active {
    border: 2px dashed ${colors.primary};
  }

  &.dropzone__reject {
    background-color: ${colors.statusDanger};
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerIdle = styled(Container)`
  padding: 0 32px;

  svg {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 16px;
  }

  span {
    text-align: center;
    max-width: 60%;
  }
`;

export const ContainerDrop = styled(Container)`
  height: 100%;
  min-height: 160px;
  padding: 0 32px;
  color: ${colors.statusInfo};
  border-color: ${colors.statusInfo};
`;

export const ContainerReject = styled(Container)`
  padding: 16px;
  border-color: ${colors.statusDanger};
  color: #fff;
  background-color: ${colors.statusDanger};
`;

export const ContainerLoading = styled(Container)`
  padding: 16px;
  background-color: ${colors.statusInfo};
`;

export const ThumbsWrapper = styled.div`
  display: block;
  margin-left: 0;
  padding-bottom: 8px;
  margin-bottom: 16px;
  position: relative;
  width: 100%;
  height: auto;

  overflow-x: scroll;

  @media ${device.tabletLs} {
    margin-bottom: unset;
  }
`;

export const ThumbsList = styled.ul`
  position: relative;
  list-style-type: none;
  display: flex;

  li {
    position: relative;
    display: block;
    min-width: 100px;
    min-height: 60px;

    border-radius: 8px;
    overflow: hidden;
  }

  li + li {
    margin-left: 16px;
  }
`;

export const Thumbnail = styled.li`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
`;

export const ThumbAdd = styled.li`
  border: 2px dashed ${colors.greyLight};
  border-radius: 8px;

  button {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const EditImageButton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000000;
  cursor: pointer;

  button {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 16px;
    top: 16px;
    background-color: ${colors.statusInfo};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }

  &:hover,
  &:active {
    background-color: #00000080;
  }
`;
