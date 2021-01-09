import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../constant/types";

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
