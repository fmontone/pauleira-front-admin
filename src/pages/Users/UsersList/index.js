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
  Aka,
  Role,
  ButtonEdit,
  EditIcon,
} from './styles';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

function UsersList({ payload }) {
  const history = useHistory();

  return (
    <List>
      {payload.map(({ id, profile_image, name, a_k_a, transRole }) => (
        <ListItem key={id.toString()}>
          <ProfilePicWrapper>
            <ProfilePic src={profile_image || ProfilePlaceholder} />
          </ProfilePicWrapper>

          <TitlesWrapper>
            <Name>{name}</Name>
            <Aka>{a_k_a}</Aka>
            <Role>{transRole}</Role>
          </TitlesWrapper>
          <ButtonEdit
            onClick={() => history.push({ pathname: `/users/${id}` })}
          >
            <EditIcon />
          </ButtonEdit>
        </ListItem>
      ))}
    </List>
  );
}

UsersList.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      a_k_a: PropTypes.string,
      profile_image: PropTypes.string,
    })
  ).isRequired,
};

export default UsersList;
