import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4" // <--- 1. Importamos la librería
import './index.css'
import App from './App.jsx'

// --- CONFIGURACIÓN DE ANALYTICS ---

// 2. Inicializar (Reemplaza con tu ID real de Google Analytics)
ReactGA.initialize("G-BE4GRTQRVG"); 

// 3. Enviar la primera visita (Pageview)
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
  title: "Visita Inicial"
});

// ----------------------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)