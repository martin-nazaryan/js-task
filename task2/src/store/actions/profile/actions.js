import {SET_IMAGE, SET_NAME, SET_EDUCATION} from './types';

export const setImage = (payload) => {
  return ({
    type: SET_IMAGE,
    payload,
  });
}

export const setName = (payload) => {
  return ({
    type: SET_NAME,
    payload,
  });
}

export const setEducation = (payload) => {
  return ({
    type: SET_EDUCATION,
    payload,
  });
}
