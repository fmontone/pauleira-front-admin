import produce from 'immer';

const INITIAL_STATE = {
  activePage: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@activePage/SET_ACTIVE_PAGE':
        draft.activePage = action.payload.activePage;
        break;
      default:
    }
  });
}
