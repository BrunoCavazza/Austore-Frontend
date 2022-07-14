import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Link from './link.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
  button: {
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://austore.com.ar/images/products/None-46bbe1f9-fa3e-42cc-ac1b-b74bb908cdf8.jpg"
        />
        <CardContent>
        <h1>CASCO AVX FS-908 TITANIO MATE</h1> 
        
         
          <h2>
            Precio: $16645.00
            </h2>

        </CardContent>
      </CardActionArea>
      <CardActions>

      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
    <Grid>
      
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
    </Grid>
   
        
</Grid>
      
      </CardActions>
    </Card>
  );
}