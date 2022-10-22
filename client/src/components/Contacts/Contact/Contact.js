import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteContact } from '../../../actions/contacts';

const Contact = ({ contact, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6" color="textSecondary">{contact.firstName}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: "white", background:"purple", "border-radius":"100vmax" }}
                    size="small"
                    onClick={() => setCurrentId(contact._id)}
                >
                    Edit
                </Button>
            </div>
            <div className={classes.details}>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{contact.lastName}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{contact.number}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteContact(contact._id))}>
                    <DeleteIcon fontSize='small' />
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Contact;