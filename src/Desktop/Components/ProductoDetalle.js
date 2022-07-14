import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import Typography from '@material-ui/core/Typography';
//import CardMedia from '@material-ui/core/CardMedia';
//import ButtonBase from '@material-ui/core/ButtonBase';

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
    height: 500,
  },
  image: {
    height: 500,
    width: 500,
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>


        
        <Grid item xs={2}>
         
        </Grid>
        <Grid item xs>

        <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
        <img src="https://austore.com.ar/images/products/None-46bbe1f9-fa3e-42cc-ac1b-b74bb908cdf8.jpg" className={classes.image}></img>
        
        </Grid>





        <Grid item xs={5}>
          <Paper className={classes.paper}>
          <h1>CASCO AVX FS-908 TITANIO MATE</h1> 
          <h2>Precio: $16645.00</h2>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<ShoppingCartIcon />}
            style={{ background: '#001348' }}
            href="./Link.js" 
          >
            Comprar
          </Button>
          </Paper>
        </Grid>
      </Grid>
      </Paper>

        </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </div>
  );
}