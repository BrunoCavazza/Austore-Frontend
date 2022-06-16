import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Producto1 from './Producto.js';
import Producto2 from './Producto2.js';
import Producto3 from './Producto3.js';
import Producto4 from './Producto4.js';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1100,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Todos los productos" {...a11yProps(0)} />
        <Tab label="Motos" {...a11yProps(1)} />
        <Tab label="Accesorios" {...a11yProps(2)} />
        <Tab label="Cubiertas" {...a11yProps(3)} />
        <Tab label="Bicicletas" {...a11yProps(4)} />
        <Tab label="Colchones" {...a11yProps(5)} />
        <Tab label="Monopatines" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        
        <Grid container spacing={3}>
  
        <Grid item xs={10} sm={3}>
        <Producto1/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto2/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto3/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto4/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto4/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto3/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto2/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Producto1/>
        </Grid>
      </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Motos
      </TabPanel>

      <TabPanel value={value} index={2}>
        Accesorios
      </TabPanel>

      <TabPanel value={value} index={3}>
        Cubiertas
      </TabPanel>

      <TabPanel value={value} index={4}>
        Bicicletas
      </TabPanel>

      <TabPanel value={value} index={5}>
        Colchones
      </TabPanel>

      <TabPanel value={value} index={6}>
        Monopatines
      </TabPanel>
    </div>
  );
}