import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import svg1 from '../../Static/LOGOS SVG AUSTORE/8.svg'
import svg2 from '../../Static/LOGOS SVG AUSTORE/9.svg'
import svg3 from '../../Static/LOGOS SVG AUSTORE/10.svg'
import svg4 from '../../Static/LOGOS SVG AUSTORE/11.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  svg: {
    height: '70px',
    height: '70px',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} elevation={5}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img src ={svg1} className={classes.svg}/>
                    <Typography variant="h5" gutterBottom>
                    Envíos a todo el país
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                     <img src ={svg2} className={classes.svg}/>
                     <Typography variant="h5" gutterBottom>
                     Hacé tus consultas
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src ={svg3} className={classes.svg}/>
                    <Typography variant="h5" gutterBottom>
                     Pagos protegidos
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src ={svg4} className={classes.svg}/>
                    <Typography variant="h5" gutterBottom>
                    Conocé las ofertas
                    </Typography>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}