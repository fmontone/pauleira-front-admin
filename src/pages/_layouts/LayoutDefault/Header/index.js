import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { GiExitDoor } from 'react-icons/gi';
import { FiUsers, FiMenu, FiSettings } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoMdImages, IoMdArrowRoundBack } from 'react-icons/io';

import { useAuth } from '~/hooks/AuthContext';
import history from '~/services/history';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';
import PauleiraLogo from '~/assets/svg/pauleira-logo.svg';

import Icon from '~/components/Icon';
import {
  Wrapper,
  Container,
  ButtonWrapper,
  ButtonToggle,
  ButtonHome,
  LogoWrapper,
  Menu,
  User,
  ProfilePic,
  Nav,
  ButtonSignOut,
} from './styles';

import colors from '~/styles/colors';

function Header() {
  const { user, signOut } = useAuth();

  const menuRef = useRef(null);

  const [menuToggle, setMenuToggle] = useState(false);
  const [subPage, setSubpage] = useState(false);

  function handleClickOutside(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuToggle(false);
    }
  }

  useEffect(() => {
    if (menuToggle) {
      document.addEventListener('click', (e) => handleClickOutside(e), true);
    }

    return document.removeEventListener('click', handleClickOutside, true);
  }, [menuToggle]);

  const pathLenght = history.location.pathname.split('/').slice(1).length;

  useEffect(() => {
    if (pathLenght > 1) {
      setSubpage(true);
    } else {
      setSubpage(false);
    }
  }, [pathLenght]);

  return (
    <Wrapper>
      <Container>
        {!subPage && (
          <LogoWrapper>
            <NavLink to="/">
              <Icon name="logo-flying-p" color={colors.blackDeep} size="32" />
              <img src={PauleiraLogo} alt="Pauleira" />
            </NavLink>
          </LogoWrapper>
        )}

        {subPage && (
          <button type="button" onClick={() => history.goBack()}>
            <IoMdArrowRoundBack color={colors.primary} size="24" /> Voltar
          </button>
        )}

        {!subPage && (
          <ButtonWrapper>
            <div>
              <ButtonHome onClick={() => history.push('/')}>
                <AiOutlineDashboard />
                Dashboard
              </ButtonHome>
            </div>

            <ButtonToggle onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <MdClose color={colors.primary} size="24" />
              ) : (
                <FiMenu color={colors.blackDeep} size="24" />
              )}
            </ButtonToggle>

            <NavLink
              onClick={() => setMenuToggle(!menuToggle)}
              to="/settings"
              className="header__profile"
            >
              <ProfilePic src={user.profile_image || ProfilePlaceholder} />
            </NavLink>
          </ButtonWrapper>
        )}

        {menuToggle && (
          <Menu ref={menuRef}>
            <Nav>
              <ul>
                <li>
                  <NavLink onClick={() => setMenuToggle(!menuToggle)} to="/">
                    <AiOutlineDashboard color={colors.grey} size="24" />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuToggle(!menuToggle)}
                    to="/admin-users"
                  >
                    <FiUsers color={colors.grey} size="24" />
                    Usuários Adm
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuToggle(!menuToggle)}
                    to="/galleries"
                  >
                    <IoMdImages color={colors.grey} size="24" />
                    Galerias
                  </NavLink>
                </li>
                <User>
                  <NavLink
                    onClick={() => setMenuToggle(!menuToggle)}
                    to="/settings"
                  >
                    <ProfilePic
                      src={user.profile_image || ProfilePlaceholder}
                    />
                  </NavLink>
                  <NavLink
                    onClick={() => setMenuToggle(!menuToggle)}
                    to="/settings"
                  >
                    <strong>{user.name}</strong>
                  </NavLink>
                </User>
                <li>
                  <NavLink to="/settings">
                    <FiSettings color={colors.grey} size="24" />
                    Sua Conta
                  </NavLink>
                </li>
                <li>
                  <ButtonSignOut onClick={signOut}>
                    <GiExitDoor color={colors.statusInfo} size="24" />
                    Logout
                  </ButtonSignOut>
                </li>
              </ul>
            </Nav>
          </Menu>
        )}
      </Container>
    </Wrapper>
  );
}

export default Header;
