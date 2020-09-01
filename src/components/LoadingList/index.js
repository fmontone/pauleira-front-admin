import React from 'react';

import { List, ListItem, ContentAnimation } from './styles';

function LoadingList() {
  return (
    <List>
      <ListItem>
        <ContentAnimation />
      </ListItem>
      <ListItem>
        <ContentAnimation />
      </ListItem>
      <ListItem>
        <ContentAnimation />
      </ListItem>
    </List>
  );
}

export default LoadingList;
