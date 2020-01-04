import axios from 'axios';
import 'babel-polyfill';

export function signUpReq(user) {
  const postSettings = {
    method: 'POST',
    body: new URLSearchParams(user),
  };
  return dispatch => {
    return fetch('/api/users', postSettings);
  }
}
