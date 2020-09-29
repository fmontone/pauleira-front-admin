import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  Thumb,
  InfoWrapper,
  InfoGroup,
  Info,
  IconWrapper,
  IconLikes,
  Status,
  ButtonIcon,
  EditIcon,
} from './styles';

import GalleryPlaceholder from '~/assets/pauleira_gallery_pic_placeholder.jpg';

function GalleriesList({ payload }) {
  const history = useHistory();
  return (
    <List>
      {payload.map((item) => (
        <ListItem
          key={item.id.toString()}
          onClick={() => history.push(`/galleries/${item.id}`)}
        >
          {console.log(!!item.images[0])}
          <Thumb
            src={item.images[0] ? item.images[0].url : GalleryPlaceholder}
          />

          <InfoWrapper>
            <InfoGroup>
              <Info>
                <IconWrapper>
                  <IconLikes />
                </IconWrapper>
                <span>{item.likes}</span>
              </Info>

              <Status>{item.status}</Status>
            </InfoGroup>

            <ButtonIcon>
              <EditIcon />
            </ButtonIcon>
          </InfoWrapper>
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
