
import { ColorModeContext, useMode } from './theme'; 
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function ThemeProviderWrapper(props) {
    const [theme, colorMode] = useMode();
    
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  export default ThemeProviderWrapper;