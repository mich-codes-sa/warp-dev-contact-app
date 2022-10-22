import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import contacts from '../../images/contacts.png';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Phone Book App</Typography>
                <img className={classes.image} src={contacts} alt="contacts" height="60" />
            </div>
        </AppBar>
    )
}

export default Navbar