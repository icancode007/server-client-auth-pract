import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../actions/constants';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        }
      ]
    case REMOVE_FLASH_MESSAGE:
      const idx = findIndex(state, {id: action.id});
      return [...state.filter(m => m.id !== action.id)]
    default: return state;
  }
}
