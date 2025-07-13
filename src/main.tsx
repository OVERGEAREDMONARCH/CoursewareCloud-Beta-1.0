import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Renamed CoursewareCloud to App for consistency with routing
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Analytics />
        <SpeedInsights />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);