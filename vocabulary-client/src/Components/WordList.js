import { Typography } from '@material-ui/core';
import React from 'react';
import WordCard from './WordCard';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    paperstyles: {
        
    }
}));

const Content = () => {
    const classes = useStyles();
    return (
        <Paper>
            <Typography variant="h5" component="h2" color='primary'>Word List</Typography>
            <Divider />
            <WordCard /> 
        </Paper>    
    )
};

export default Content;