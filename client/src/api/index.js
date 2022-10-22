import axios from 'axios';

const contacts = 'http://localhost:5000/contacts';

export const fetchContacts = () => axios.get(contacts);
export const createContact = (newContact) => axios.post(contacts, newContact);
export const updateContact = (id, updatedContact) => axios.patch(`${contacts}/${id}`, updatedContact);
export const deleteContact = (id) => axios.delete(`${contacts}/${id}`);