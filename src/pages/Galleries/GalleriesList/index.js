import React from 'react';
import { useHistory } from 'react-router-dom';

import { useGalleriesAdm } from '~/hooks/GalleriesAdmContext';

import {
  List,
  ListItem,
  Thumb,
  InfoTitle,
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

function GalleriesList() {
  const history = useHistory();

  const { galleriesAdm } = useGalleriesAdm();

  return (
    <>
      <List>
        {!!galleriesAdm.length &&
          galleriesAdm.map((item) => (
            <ListItem
              key={item.id.toString()}
              onClick={() => history.push(`/galleries/${item.id}`)}
            >
              <Thumb
                src={item.images[0] ? item.images[0].url : GalleryPlaceholder}
              />

              <InfoTitle>{item.title}</InfoTitle>
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

      {!galleriesAdm.length && <h3>Nenhuma galeria encontrada :(</h3>}
    </>
  );
}

export default GalleriesList;
