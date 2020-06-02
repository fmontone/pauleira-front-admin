import { combineReducers } from 'redux';

import auth from './auth/reducer';
import activePage from './activePage/reducer';

export default combineReducers({ auth, activePage });
