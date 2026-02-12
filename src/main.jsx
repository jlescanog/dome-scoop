import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4"
import './index.css'
import App from './App.jsx'

// --- CONFIGURACIÓN DE ANALYTICS ---

// Inicializar Google Analytics 4
ReactGA.initialize("G-BE4GRTQRVG"); 

// Enviar la primera visita (Pageview)
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
  title: document.title
});

// Función helper para tracking de eventos
export const trackEvent = (action, category, label, value) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value
  });
};

// ----------------------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)