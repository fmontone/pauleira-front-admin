import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAdmUsers } from '~/hooks/UsersAdmContext';

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

  const { admUsers } = useAdmUsers();

  return admUsers ? (
    <List>
      {admUsers.map(({ id, name, profile_image }) => (
        <ListItem
          key={id.toString()}
          onClick={() => history.push({ pathname: `/admin-users/${id}` })}
        >
          <ProfilePic
            src={profile_image ? profile_image.url : `${ProfilePlaceholder}`}
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
