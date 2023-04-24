import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProviderWrapper from './ThemeProviderWrapper.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
     
          <ThemeProviderWrapper>
            <CssBaseline />
          <div >
            <main className='content'>
          <Router>
            <App />
          </Router>
          </main>
          </div>
          </ThemeProviderWrapper>
      
     
  </React.StrictMode>,
)
