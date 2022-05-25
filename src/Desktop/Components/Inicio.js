import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banners from './Banners.js';
import Informacion from './Info.js';
import MenuProductos from './TituloProductos.js'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12}> 
            < Banners />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            < Informacion />
          </Grid>
          
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12}> 
            < MenuProductos />
          </Grid>
          </Grid>
    </div>
  );
}