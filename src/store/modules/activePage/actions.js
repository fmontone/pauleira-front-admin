export function setActivePage(page) {
  return {
    type: '@activePage/SET_ACTIVE_PAGE',
    payload: { page },
  };
}
