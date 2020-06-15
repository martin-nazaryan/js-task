import {SET_EDUCATION, SET_IMAGE, SET_NAME} from '../actions/profile/types';

const defaultState = {
  image: "",
  name: "",
  education: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EDUCATION:
      return {
        ...state,
        education: action.payload,
      };
    default:
      return state;
  }
};
