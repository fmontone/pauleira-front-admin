import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ProfilePicWrapper,
  ProfilePic,
  TitlesWrapper,
  Name,
  ButtonEdit,
  EditIcon,
} from './styles';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';
import NoResultsList from '~/components/NoResultsList';

function UsersList({ payload }) {
  const history = useHistory();

  return payload && payload.length >= 1 ? (
    <List>
      {payload.map(({ id, name }) => (
        <ListItem key={id.toString()}>
          <ProfilePicWrapper>
            <ProfilePic src={ProfilePlaceholder} />
          </ProfilePicWrapper>

          <TitlesWrapper>
            <Name>{name}</Name>
          </TitlesWrapper>
          <ButtonEdit
            onClick={() => history.push({ pathname: `/users/${id}` })}
          >
            <EditIcon />
          </ButtonEdit>
        </ListItem>
      ))}
    </List>
  ) : (
    <NoResultsList />
  );
}

UsersList.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      a_k_a: PropTypes.string,
      profile_image: PropTypes.shape({
        url: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default UsersList;
