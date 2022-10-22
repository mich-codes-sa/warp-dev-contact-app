import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getContacts } from '../../actions/contacts';
import useStyles from './styles';
import ContactForm from '../Form/ContactForm';
import Contacts from '../Contacts/Contacts';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getContacts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Contacts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ContactForm currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home