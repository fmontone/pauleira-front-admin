import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  TitlesWrapper,
  Title,
  IconWrapper,
  EditIcon,
} from './styles';

function CoursesList({ payload }) {
  return (
    <List>
      {payload.map((item) => (
        <ListItem key={item.id.toString()}>
          <TitlesWrapper>
            <Title>{item.title}</Title>
          </TitlesWrapper>
          <IconWrapper>
            <EditIcon />
          </IconWrapper>
        </ListItem>
      ))}
    </List>
  );
}

CoursesList.propTypes = {
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

export default CoursesList;
