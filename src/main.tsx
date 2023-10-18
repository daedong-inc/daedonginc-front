import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@constants/routes';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyles from 'styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
        // fallbackElement={<BigSpinner />}
      />
    </ThemeProvider>
  </React.StrictMode>,
);
