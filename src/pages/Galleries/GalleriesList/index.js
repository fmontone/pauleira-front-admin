import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ThumbWrapper,
  Thumb,
  TitlesWrapper,
  Title,
  StatusInfoWrapper,
  StatusInfo,
  IconPics,
  IconLikes,
  Status,
  ButtonWrapper,
  ButtonIcon,
  EditIcon,
} from './styles';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

function GalleriesList({ payload }) {
  const history = useHistory();
  return (
    <List>
      {payload.map((item) => (
        <ListItem key={item.id.toString()}>
          <ThumbWrapper>
            <Thumb src={ProfilePlaceholder} />
          </ThumbWrapper>

          <TitlesWrapper>
            <Title>{item.title}</Title>
            <StatusInfoWrapper>
              <StatusInfo>
                <IconPics />0
              </StatusInfo>
              <StatusInfo>
                <IconLikes />0
              </StatusInfo>
              <Status>Publicada</Status>
            </StatusInfoWrapper>
          </TitlesWrapper>
          <ButtonWrapper>
            <ButtonIcon onClick={() => history.push(`/galleries/${item.id}`)}>
              <EditIcon />
            </ButtonIcon>
          </ButtonWrapper>
        </ListItem>
      ))}
    </List>
  );
}

GalleriesList.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number,
      // name: PropTypes.string,
      // email: PropTypes.string,
      // a_k_a: PropTypes.string,
      // profile_image: PropTypes.string,
    })
  ).isRequired,
};

export default GalleriesList;
