// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// const DEFAULT_STATE = {
//   searchTerm: ''
// };

// {
//     type: string,
//     payload:,
//     error: Error,
//     metadata:
// }

const searchTerm = (state = '', action: Action) => {
  // Object.assign({}, state, { searchTerm: action.payload });
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
    // ***** other way *****
    // const key = action.payload.imdbID
    // const obj = {}
    // obj[key] = action.payload
  }
  return state;
};

// const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return setSearchTerm(state, action);
//     default:
//       return state;
//   }
// };

// same as {searchTem: searchTerm}
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
