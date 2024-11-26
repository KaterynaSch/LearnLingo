import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './index.css';
import { App } from 'components/App';
import { AuthProvider } from 'context/AuthContext';
import { ThemeProvider } from 'context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/LearnLingo">
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        <Toaster position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
