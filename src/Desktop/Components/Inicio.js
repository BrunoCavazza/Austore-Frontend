import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banners from './Banners.js';
import Informacion from './Info.js';
import MenuProductos from './TituloProductos.js';
//import Banner1 from './Banner1.js'
import Banner1 from '../../Static/BANNERS Austore/banner1.png';


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
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>

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
          
           </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
      
           

      <Grid container>
          <Grid item xs={12}> 
          <img src={Banner1} alt="Banner1"></img>
          </Grid>
        </Grid>


          
    </div>
  );
}