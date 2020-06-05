import React from 'react';
import PropTypes from 'prop-types';

import { MdChevronRight } from 'react-icons/md';

import ListLayout from '~/components/ListLayout';

import {
  ListItem,
  ButtonWrapp,
  ProfilePicWrapper,
  ProfilePic,
  TitlesWrapper,
  Name,
  Aka,
  GoIcon,
  ButtonLoadMore,
} from './styles';

import colors from '~/styles/colors';

function UsersList({ displayList }) {
  return (
    <>
      <ListLayout displayList={displayList}>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
        <ListItem>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src="https://lefunky.files.wordpress.com/2008/05/bbking.jpg" />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>Riley Ben King</Name>
              <Aka>Lucile Guitar Shop</Aka>
            </TitlesWrapper>
            <GoIcon>
              <MdChevronRight size="24" color={colors.grey} />
            </GoIcon>
          </ButtonWrapp>
        </ListItem>
      </ListLayout>

      <ButtonLoadMore>Carregar Mais</ButtonLoadMore>
    </>
  );
}

UsersList.propTypes = {
  displayList: PropTypes.string,
};
UsersList.defaultProps = {
  displayList: 'list',
};

export default UsersList;
