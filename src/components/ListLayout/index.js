import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, BlockContainer, List } from './styles';

function ListLayout({ displayList, children, ...rest }) {
  const Layout = displayList ? CardContainer : BlockContainer;

  return (
    <Layout {...rest}>
      <List>{children}</List>
    </Layout>
  );
}

ListLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  displayList: PropTypes.bool,
};

ListLayout.defaultProps = {
  displayList: true,
};

export default ListLayout;
