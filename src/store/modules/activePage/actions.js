export function setActivePage(activePage) {
  return {
    type: '@activePage/SET_ACTIVE_PAGE',
    payload: { activePage },
  };
}
