import React, { useState, useEffect } from 'react';

import colors from '~/styles/colors';

import { Container, HeadlineContainer, ButtonLine, ButtonAdd } from './styles';

import CoursesList from './CoursesList';

import data from './dummy_courses.json';
// import data from './dummy_empty.json';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(data);
  }, []);

  return (
    <Container>
      <HeadlineContainer>
        <ButtonLine>
          <ButtonAdd color={colors.statusInfo}>Adicionar Curso</ButtonAdd>
        </ButtonLine>
      </HeadlineContainer>
      <CoursesList payload={courses} />
    </Container>
  );
}

export default Courses;
