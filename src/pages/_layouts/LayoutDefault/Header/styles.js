import styled from 'styled-components';

import colors from '~/styles/colors';
import { device } from '~/styles/queries';

import ContainerCustom from '~/components/ContainerCustom';
import ButtonBlank from '~/components/ButtonBlank';

export const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors.greyLight};
`;

export const Container = styled(ContainerCustom)`
  height: 100%;
  color: ${colors.greyLight};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media ${device.tabletLs} {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  .header__profile {
    display: none;

    @media ${device.tabletLs} {
      display: inline-block;
    }
  }
`;

export const ButtonToggle = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

export const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tabletLs} {
    width: auto;
    height: auto;
  }

  svg {
    @media ${device.tabletLs} {
      display: none;
    }
  }

  img {
    display: none;
    height: 32px;
    width: auto;

    @media ${device.tabletLs} {
      display: inline-block;
    }
  }
`;

export const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;

  margin-top: 64px;
  padding: 16px;

  width: 100vw;
  height: calc(100vh - 64px);

  display: flex;
  flex-direction: column;

  background-color: #fff;

  z-index: 200;

  @media ${device.tabletLs} {
    position: absolute;
    left: unset;
    top: -10px;
    right: 58px;
    max-width: 250px;
    height: auto;
    border-radius: 8px 0px 8px 8px;

    box-shadow: 0 0 16px #00000016;

    :before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -10px;
      right: -9px;
      transform: translateX(-50%);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      padding: 16px 0;

      a {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: ${colors.greyHeavy};

        &:hover {
          color: ${colors.statusInfo};
        }

        @media ${device.tabletLs} {
          flex-direction: row-reverse;
        }
      }

      svg {
        margin-right: 16px;

        @media ${device.tabletLs} {
          margin-right: unset;
          margin-left: 16px;
        }
      }
    }
  }
`;

export const User = styled.div`
  padding: 32px 0;
  margin-top: 16px;
  border-top: 1px solid ${colors.greyLight};

  display: flex;
  align-items: center;

  a {
    color: ${colors.black};

    &:hover {
      color: ${colors.statusInfo};
    }
  }

  @media ${device.tabletLs} {
    display: none;
  }
`;

export const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  border-radius: 50%;

  background: url(${(props) => props.src}) center center no-repeat;
  background-size: cover;

  @media ${device.tabletLs} {
    margin: unset;
    margin-left: 16px;
  }
`;

export const ButtonSignOut = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: ${colors.greyHeavy};

  &:hover {
    color: ${colors.statusInfo};
  }

  @media ${device.tabletLs} {
    border-top: 1px solid ${colors.greyLight};
    padding-top: 16px;
    padding-bottom: unset;
    flex-direction: row-reverse;
  }
`;

export const ButtonHome = styled(ButtonBlank)`
  display: none;
  font-weight: 500;
  color: ${colors.greyHeavy};

  @media ${device.tabletLs} {
    display: inline-block;
    margin-right: 16px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;
