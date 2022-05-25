import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import Desktop from './Desktop/AppDesktop.js';
import Mobile from './Mobile/AppMobile.js';

function App() {
  return (
    <div className="App">
      
        <BrowserView>
            <Desktop/>
        </BrowserView>

        <MobileView>
          <Desktop/>
        </MobileView>
    </div>
  );
}

export default App;
