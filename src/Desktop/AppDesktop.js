import React from 'react';
//import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from './Components/AppBar.js';
import Grid from '@material-ui/core/Grid';
import Banners from './Components/Banners.js';
import Informacion from './Components/Info.js';
import MenuProductos from './Components/TituloProductos.js'
//import Producto from './Components/Producto.js';
//import Categorias from './Components/Categorias.js';

/*
const theme = createTheme({
  palette: {
    primary: {
      main: '#303f9f',
    },
    secondary: {
      main: '#53c4f7',
    },
  },
});*/

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
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>
          < Appbar />
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>

    

        
    </div>
  );
}