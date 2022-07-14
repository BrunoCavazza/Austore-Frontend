import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Banner1 from '../../Static/BANNERS Austore/Banner1.jpg';
import '@fontsource/roboto';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#001348',
  },
  text: {
    color: '#ffffff',
  },
  seguinos: {
    color: '#eeeeee',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper square={true}>
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center" >
          <Grid item xs={12}>
          <img src={'../../Static/BANNERS Austore/Banner1.jpg'} alt="Banner1"></img>
          </Grid>
          </Grid>
      </Paper>
    </div>
  );
}