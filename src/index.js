/** Natives **/
import React                 from 'react';
import ReactDOM              from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/** Containers **/
import Home                  from './containers/home/Home';

/** CSS **/
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/**
 * This constant is used to override the base MuiTheme
 * It's used all across the website
 * @type {Theme}
 */
const GlobalTheme = createMuiTheme({
  typography: {
    fontSize   :  18,
    fontFamily : '"Barlow Condensed", sans-serif'
  },
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  },
  overrides: {
    MuiCardHeader: {
      title: {
        fontSize: '1.5rem',
        color: "rgba(0, 0, 0, 0.54)",
        margin: 0,
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: 'white',
      }
    },
    MuiButton: {
      raised: {
        background : 'white',
        color      : '#D73F3F',
        margin     : '0 0 0 10px',
        fontFamily : '"Barlow Condensed", sans-serif',
        fontSize   : 18,
        '&:hover': {
          background : 'rgba(0, 0, 0, 0.05)',
          color : '#C43636'
        }
      },
    },
    MuiList: {
      padding: {
        padding: '0 !important'
      }
    },
    MuiMenuItem: {
      root: {
        fontFamily : '"Barlow Condensed", sans-serif',
        fontWeight : 400,
        background : 'white',
        color      : '#D73F3F',
      }
    }
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={GlobalTheme}>
      <Home />
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
