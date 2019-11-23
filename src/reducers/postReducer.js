import { FETCH_POSTS, NEW_POST } from '../actions/types.js';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('case FETCH_POSTS in Reducers');
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      console.log('case NEW_POST in Reducers');
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
