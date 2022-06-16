import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212c6f',
    },
    secondary: {
      main: '#4cadc4',
    },
    third: {
      main: '#a4dcec',
    },
    fourth: {
      main: '#E8E4D9',
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">primario</Button>
      <Button color="secondary">secundario</Button>
      <Button color="third">terciario</Button>
      <Button color="fourth">cuarternario</Button>
    </ThemeProvider>
  );
}