import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 550,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  media: {
    height: 350,
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Foto</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Detalles</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Precios</Paper>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}