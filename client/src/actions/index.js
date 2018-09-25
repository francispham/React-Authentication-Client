import { AUTH_USER } from './types';

// Redux Thunk: Allow dispatch function to use an action creator to return/request
// as many actions/times as we wish. Redux Thunk is an alternative for
// Redux Promise which is just limited to return one action as a time!
export const signup = ({ email, password }) => dispatch => {

};

/*
The above is equal to this:
export const signup = ({ email, password }) => {
  return function(dispatch) {

  }
};
*/
