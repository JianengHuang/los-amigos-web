import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ContextProvider } from './pages/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
