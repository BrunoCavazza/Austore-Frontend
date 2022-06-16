import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://austore.com.ar/images/products/None-71aff57f-f9ed-43de-8c4e-ed422bd778bf.jpg"
        />
        <CardContent>
        <Typography variant="body1" gutterBottom>
        BICICLETA ELÉCTRICA OKN 4 E
          </Typography>
          <h2>
            Precio: $206310.00
            </h2>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Button size="small" color="primary">
          Compartir
        </Button>
      </CardActions>
    </Card>
  );
}