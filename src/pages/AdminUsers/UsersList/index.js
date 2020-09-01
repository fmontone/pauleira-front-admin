import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  List,
  ListItem,
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
      {payload.map(({ id, name, profile_image }) => (
        <ListItem
          key={id.toString()}
          onClick={() => history.push({ pathname: `/admin-users/${id}` })}
        >
          <ProfilePic
            src={
              profile_image
                ? profile_image.url
                : `${process.env.REACT_APP_URL}${ProfilePlaceholder}`
            }
          />

          <TitlesWrapper>
            <Name>{name}</Name>
          </TitlesWrapper>
          <ButtonEdit>
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
