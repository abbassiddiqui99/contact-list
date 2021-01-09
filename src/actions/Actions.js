import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  SELECTED_ALL,
  CLEAR_CONTACT,
  DELETE_ALL,
} from "../constant/types";

// Creating Actions
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectedAll = (id) => ({
  type: SELECTED_ALL,
  payload: id,
});

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});
