import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UsersContext from '../usersContext';

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

function UsersList() {
  const history = useHistory();

  const { users } = useContext(UsersContext);

  return users.length ? (
    <List>
      {users.map(({ id, name, profile_image }) => (
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

export default UsersList;
