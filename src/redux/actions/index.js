import {
  SET_USER_AVATAR,
  SET_TERMINAL,
  DELETE_TERMINAL
} from '../constants';

export const setUserAvatar = url => ({
  type: SET_USER_AVATAR,
  url
})

let terminalId = 0;

export const addTerminal = (name, description) => ({
  type: SET_TERMINAL,
  id: terminalId++,
  name,
  description
})

export const deleteTerminal = id => ({
  type: DELETE_TERMINAL,
  id
})