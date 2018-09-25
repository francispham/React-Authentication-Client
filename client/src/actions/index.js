import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// Redux Thunk: Allow dispatch function to use an action creator to return/request
// as many actions/times as we wish. Redux Thunk is an alternative for
// Redux Promise which is just limited to return one action as a time!

// Action Creator signup:
export const signup = formProps => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
  } catch (e) {
  dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
};

/*
The above is equal to this:
export const signup = ({ email, password }) => {
  return function(dispatch) {

  }
};
*/
