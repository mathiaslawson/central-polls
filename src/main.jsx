import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import Firebase, { FirebaseContext } from './services/index';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProviderWrapper from './ThemeProviderWrapper.jsx';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <FirebaseContext.Provider value={new Firebase()}>
          <ThemeProviderWrapper>
            <CssBaseline />   
              <Navbar/>
          <Router>
            <App />
          </Router>
          </ThemeProviderWrapper>
          </FirebaseContext.Provider>
          </PersistGate>
      </Provider>        
  </React.StrictMode>,
)
