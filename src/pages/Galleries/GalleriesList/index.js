import React from 'react';
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
  IconWrapper,
  EditIcon,
} from './styles';

import ProfilePlaceholder from '~/assets/pauleira_profile_pic_placeholder.jpg';

function GalleriesList({ payload }) {
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
          <IconWrapper>
            <EditIcon />
          </IconWrapper>
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
