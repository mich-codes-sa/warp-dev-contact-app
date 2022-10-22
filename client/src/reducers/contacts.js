import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../constants/actionTypes';

export default (contacts = [], action) => {
    switch (action.type) {
        case DELETE:
            return contacts.filter((contact) => contact._id !== action.payload);
        case UPDATE:
            return contacts.map((contact) => contact._id === action.payload._id ? action.payload : contact);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...contacts, action.payload];
        default:
            return contacts;
    }
}