import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  React.createElement(HelmetProvider, null,
    React.createElement(React.StrictMode, null,
      React.createElement(App)
    )
  )
);