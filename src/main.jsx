import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './store';
import Firebase, { FirebaseContext } from './services/index';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProviderWrapper from './ThemeProviderWrapper.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
     <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
          <ThemeProviderWrapper>
            <CssBaseline />   
              <Navbar props={store}/>
          <Router>
            <App />
          </Router>
          </ThemeProviderWrapper>
          </FirebaseContext.Provider>
      </Provider>        
  </React.StrictMode>,
)
