import { SET_USER_AVATAR } from '../constants';

const userAvatar = (state = '', action) => {

  switch (action.type) {

    case SET_USER_AVATAR:
      return action.url;

    default:
      return state;
  }
}

export default userAvatar;
