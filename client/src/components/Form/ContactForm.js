import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createContact, updateContact } from '../../actions/contacts';

const ContactForm = ({ currentId, setCurrentId }) => {
    const [contactData, setContactData] = useState({ firstName: "", lastName: "", number: "" });
    const contact = useSelector((state) => (currentId ? state.contacts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (contact) setContactData(contact);
    }, [contact]);

    const clear = () => {
        setCurrentId(0);
        setContactData({ firstName: "", lastName: "", number: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createContact(contactData));
            clear();
        } else {
            dispatch(updateContact(currentId, contactData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${contact.firstName} ${contact.lastName}"` : 'Creating a new contact'}</Typography>
                <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={contactData.firstName} onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })} />
                <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={contactData.lastName} onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })} />
                <TextField name="number" variant="outlined" label="Phone number" fullWidth value={contactData.number} onChange={(e) => setContactData({ ...contactData, number: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default ContactForm;