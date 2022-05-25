import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Producto from './Producto.js';

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function FullWidthGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid justifyContent="flex-start">
        <Grid item xs={4}>
        <Typography variant="h3" gutterBottom>Nuestros Productos</Typography>
        </Grid>
        <Grid item sm={8}>
        </Grid>
      </Grid>
      
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Producto Nuevo" {...a11yProps(0)} />
          <Tab label="Mas Vendidos" {...a11yProps(1)} />
          <Tab label="Ofertas" {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
      
      <Grid container spacing={3}>
        <Grid item xs>
        <Producto/>
        </Grid>
        <Grid item xs>
        <Producto/>
        </Grid>
        <Grid item xs>
        <Producto/>
        </Grid>
        <Grid item xs>
        <Producto/>
        </Grid>
      </Grid>
    
        

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Producto/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Producto/>
      </TabPanel>
    </div>

   
  );
}