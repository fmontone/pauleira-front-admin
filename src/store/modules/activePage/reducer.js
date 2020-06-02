import produce from 'immer';

const INITIAL_STATE = {
  page: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@activePage/SET_ACTIVE_PAGE':
        draft.page = action.payload.page;
        break;
      default:
    }
  });
}
