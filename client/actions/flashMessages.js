import {
  ADD_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
 } from './constants';

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}


export function removeFlashMessage(id) {
  return {
    type: REMOVE_FLASH_MESSAGE,
    id
  }
}
