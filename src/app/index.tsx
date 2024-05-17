import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { QueryProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider></QueryProvider>
  </React.StrictMode>,
);
