import "reflect-metadata"; // <--- 1. ¡CRÍTICO! Debe ser la primera línea siempre
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // (Ojo con la extensión si es .tsx)
import './index.css';

import { ServiceProvider } from './presentation/context/ServiceContext';

import { container } from './ioc/container';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServiceProvider container={container}>
      <App />
    </ServiceProvider>
  </React.StrictMode>,
)
