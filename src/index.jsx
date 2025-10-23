import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './context/ThemeProvider.jsx'
import App from './App.jsx'
import './styles/index.scss'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)