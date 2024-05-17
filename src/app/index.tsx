import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouterProvider, QueryProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouterProvider />
    </QueryProvider>
  </React.StrictMode>,
);
