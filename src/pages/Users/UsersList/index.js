import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ButtonWrapp,
  ProfilePicWrapper,
  ProfilePic,
  TitlesWrapper,
  Name,
  Aka,
  IconWrapper,
  EditIcon,
} from './styles';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

function UsersList({ payload }) {
  return (
    <List>
      {payload.map((item) => (
        <ListItem key={item.id.toString()}>
          <ButtonWrapp>
            <ProfilePicWrapper>
              <ProfilePic src={item.profile_image || ProfilePlaceholder} />
            </ProfilePicWrapper>

            <TitlesWrapper>
              <Name>{item.name}</Name>
              <Aka>{item.a_k_a}</Aka>
            </TitlesWrapper>
            <IconWrapper>
              <EditIcon />
            </IconWrapper>
          </ButtonWrapp>
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
