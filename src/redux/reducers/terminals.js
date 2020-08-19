import { SET_TERMINAL, DELETE_TERMINAL } from '../constants';

const terminals = (state = [], action) => {

  switch (action.type) {

    case SET_TERMINAL:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description
        }
      ];

    case DELETE_TERMINAL:
      return state.filter(terminal => terminal.id !== action.id)

    default:
      return state;
  }
}

export default terminals;
