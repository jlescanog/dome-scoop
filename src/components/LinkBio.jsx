import React, { useCallback } from 'react';
import logoDome from '../assets/logo_principal.svg';
import { TELEFONO_WHATSAPP, MENSAJES, URLS } from '../utils/constants';

export const LinkBio = React.memo(function LinkBio({ alHacerClickEnTienda, alHacerClickEnInfo }) {
  
  // Función para abrir enlaces externos (WhatsApp, Redes)
  const abrirEnlace = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const abrirWhatsAppDirecto = useCallback(() => {
    abrirEnlace(`https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(MENSAJES.WHATSAPP_INICIAL)}`);
  }, [abrirEnlace]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center py-10 px-4">
      <div className="layout-container flex h-full grow flex-col w-full max-w-[580px]">
        
        {/* --- CABECERA --- */}
        <header className="flex items-center justify-between w-full px-6 py-4 mb-8 glass-card rounded-full shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 flex items-center">
               <img src={logoDome} alt="Dome Scoop Logo" className="h-full w-auto object-contain drop-shadow-sm" />
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={alHacerClickEnTienda} 
              className="flex items-center justify-center rounded-full h-10 w-10 bg-sakura dark:bg-primary/20 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Ver catálogo de productos"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">shopping_bag</span>
            </button>
          </div>
        </header>

        {/* --- PERFIL --- */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-[#ff9ccb] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src={logoDome} 
              alt="Logo Dome Scoop"
              className="relative bg-white dark:bg-[#2d1521] rounded-full border-4 border-white dark:border-[#2d1521] shadow-xl h-40 w-40 object-contain p-4"
              width="160"
              height="160"
            />
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-background-dark p-2 rounded-full shadow-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-4xl font-extrabold bubbly-text mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ff9ccb]">
              Dome Scoop
            </h1>
            <p className="text-[#896175] dark:text-[#ccabbc] text-lg font-medium max-w-[320px]">
              ¡Esparciendo alegría, un scoop a la vez! ✨
            </p>
          </div>
        </div>

        {/* --- BOTONES PRINCIPALES (NUEVA ESTRUCTURA) --- */}
        <div className="flex flex-col gap-4 px-4 mb-12">
          
          {/* 1. PRODUCTOS (Lleva a la tienda interna) */}
          <BotonEnlace 
            icono="inventory_2" 
            texto="Productos" 
            estilo="gradient1" 
            onClick={alHacerClickEnTienda}
          />

          {/* 2. WHATSAPP (Chat directo) */}
          <BotonEnlace 
            icono="chat" 
            texto="WhatsApp" 
            estilo="gradient2" 
            onClick={abrirWhatsAppDirecto}
          />

          {/* 3. FACEBOOK */}
          <BotonEnlace 
            icono="thumb_up" 
            texto="Facebook" 
            estilo="gradient3" 
            onClick={() => abrirEnlace(URLS.FACEBOOK)}
          />

          {/* 4. INSTAGRAM */}
          <BotonEnlace 
            icono="photo_camera" 
            texto="Instagram" 
            estilo="gradient4" 
            onClick={() => abrirEnlace(URLS.INSTAGRAM)}
          />

          {/* 5. TIKTOK */}
          <BotonEnlace 
            icono="music_note" 
            texto="TikTok" 
            estilo="gradient5" 
            onClick={() => abrirEnlace(URLS.TIKTOK)}
          />

          {/* 6. QUIÉNES SOMOS (Nueva página interna) */}
          <BotonEnlace 
            icono="info" 
            texto="Quiénes Somos & Envíos" 
            estilo="gradient6" 
            onClick={alHacerClickEnInfo}
          />

        </div>

        {/* (Sección de iconos pequeños ELIMINADA como pediste) */}
        {/* --- FOOTER --- */}
        <footer className="flex flex-col gap-4 py-10 text-center items-center">
          
          {/* Línea divisoria */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f0429933] to-transparent"></div>
          
          {/* Copyright de la marca */}
          <p className="text-[#896175] dark:text-[#ccabbc] text-sm font-medium">
            © 2026 Dome Scoop. Hecho con 💖 en Tacna.
          </p>

          {/* TU FIRMA DE DESARROLLADOR (Versión WhatsApp) */}
          <a 
            href={URLS.WHATSAPP_DESARROLLADOR} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Contactar al desarrollador Jhair Lescano por WhatsApp"
          >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">code</span>
            Desarrollado por Jhair Lescano
          </a>

        </footer>

      </div>
    </div>
  );
});

// Componente de Botón Reutilizable con nuevos estilos
const BotonEnlace = React.memo(function BotonEnlace({ icono, texto, estilo, onClick }) {
  const clasesColores = {
    primary:   "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    gradient1: "bg-[#f04299] text-white shadow-lg shadow-primary/20 hover:brightness-110",
    gradient2: "bg-[#f255a3] text-white shadow-lg shadow-primary/20 hover:brightness-110",
    gradient3: "bg-[#f56ab5] text-white shadow-lg shadow-primary/20 hover:brightness-110",
    gradient4: "bg-[#f87fc4] text-white shadow-lg shadow-primary/20 hover:brightness-110",
    gradient5: "bg-[#fb94d1] text-white shadow-lg shadow-primary/20 hover:brightness-110",
    gradient6: "bg-[#ffb3e0] text-gray-800 dark:text-gray-900 shadow-lg shadow-primary/20 hover:brightness-110",
    whatsapp:  "bg-[#25D366] text-white shadow-lg shadow-green-400/20 hover:shadow-green-400/40",
    facebook:  "bg-[#1877F2] text-white shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40",
    instagram: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-lg hover:brightness-110",
    tiktok:    "bg-black text-white shadow-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    white:     "bg-white dark:bg-white/5 text-[#181114] dark:text-white border-2 border-transparent hover:border-primary/10 shadow-sm"
  };

  return (
    <button 
      onClick={onClick} 
      className={`group flex items-center justify-between min-w-0 cursor-pointer overflow-hidden rounded-full h-16 px-8 text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${clasesColores[estilo]}`}
      aria-label={texto}
    >
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-2xl" aria-hidden="true">{icono}</span>
        <span className="truncate">{texto}</span>
      </div>
      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" aria-hidden="true">
        arrow_forward
      </span>
    </button>
  );
});