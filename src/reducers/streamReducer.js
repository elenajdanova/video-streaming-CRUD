import _ from 'lodash';

export default (state={}, action) => {
  switch (action.type) {
    case 'FETCH_STREAM':
      return {state}; //{...state, [action.payload.id]: action.payload}
    case 'CREATE_STREAM':
      return {...state, [action.payload.id]: action.payload};
    case 'EDIT_STREAM':
      return {...state, [action.payload.id]: action.payload};
    case 'DELETE_STREAM':
      let newState = delete state[action.payload];
      return newState; //avoiding lodash here
    case 'FETCH_STREAMS':
      return {...state,..._.mapKeys(action.payload, 'id') } // converting array to obj
    default:
      return state;
  }
};
