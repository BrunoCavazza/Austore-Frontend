import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Austorelogo from '../../Static/Images/LogoAustore.png';
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
        <Paper  className={classes.paper} square={true}>
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center" >
          <Grid item xs={12}>
          <img src={Austorelogo} alt="AustoreLogo"></img>
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
          <Typography className={classes.text} variant="h5" gutterBottom>Las mejores marcas y el mejor servicio en un mismo lugar. Accedé a beneficios exclusivos registrándote</Typography>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid>
          <b className={classes.text}>SEGUINOS</b>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}