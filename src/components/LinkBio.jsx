import React from 'react';

export function LinkBio() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center py-10 px-4">
      <div className="layout-container flex h-full grow flex-col w-full max-w-[580px]">
        
        {/* --- CABECERA (Header) --- */}
        <header className="flex items-center justify-between w-full px-6 py-4 mb-8 glass-card rounded-full shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            <h2 className="text-lg font-extrabold bubbly-text text-gray-800 dark:text-white">Kawaii Dome</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-sakura dark:bg-primary/20 text-primary hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-sakura dark:bg-primary/20 text-primary hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            </button>
          </div>
        </header>

        {/* --- PERFIL --- */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-[#ff9ccb] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            {/* NOTA: Aquí puedes cambiar la URL por una foto de tu hija o el logo real */}
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Domenica&backgroundColor=ffdfbf" 
              alt="Avatar Kawaii"
              className="relative bg-white dark:bg-[#2d1521] rounded-full border-4 border-white dark:border-[#2d1521] shadow-xl h-40 w-40 object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-background-dark p-2 rounded-full shadow-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-4xl font-extrabold bubbly-text mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ff9ccb]">
              Kawaii Dome
            </h1>
            <p className="text-[#896175] dark:text-[#ccabbc] text-lg font-medium max-w-[320px]">
              ¡Esparciendo alegría, un scoop a la vez! ✨
            </p>
          </div>
        </div>

        {/* --- BOTONES DE ENLACE --- */}
        <div className="flex flex-col gap-4 px-4 mb-12">
          <BotonEnlace icono="favorite" texto="Nuevos Scoops" estilo="primary" />
          <BotonEnlace icono="star" texto="Los Más Vendidos" estilo="secondary" />
          <BotonEnlace icono="toys" texto="Peluches & Juguetes" estilo="lavender" />
          <BotonEnlace icono="edit" texto="Papelería Cute" estilo="mint" />
          <BotonEnlace icono="store" texto="Ubicación Tienda" estilo="white" />
        </div>

        {/* --- REDES SOCIALES --- */}
        <div className="glass-card rounded-xl p-6 mb-12 shadow-sm">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#896175] dark:text-[#ccabbc] mb-6">
            Conéctate con nosotros
          </p>
          <div className="grid grid-cols-4 gap-4">
            <BotonSocial icono="camera_alt" etiqueta="Insta" />
            <BotonSocial icono="music_note" etiqueta="TikTok" />
            <BotonSocial icono="grid_view" etiqueta="Pinterest" />
            <BotonSocial icono="chat" etiqueta="WhatsApp" />
          </div>
        </div>

        {/* --- PIE DE PÁGINA --- */}
        <footer className="flex flex-col gap-6 py-10 text-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f0429933] to-transparent"></div>
          <p className="text-[#896175] dark:text-[#ccabbc] text-sm font-medium">
            © 2026 Kawaii Dome. Hecho con 💖 en Tacna.
          </p>
        </footer>

      </div>
    </div>
  );
}

// --- COMPONENTES INTERNOS (Para no repetir código) ---

function BotonEnlace({ icono, texto, estilo }) {
  // Definimos colores según el "estilo" que le pasemos
  const clasesColores = {
    primary: "bg-primary text-white shadow-primary/20 hover:shadow-primary/40",
    secondary: "bg-sakura dark:bg-primary/10 text-primary dark:text-[#ff9ccb] border-2 border-primary/10 hover:border-primary/30",
    lavender: "bg-lavender dark:bg-[#7b61ff22] text-[#7b61ff] border-2 border-[#7b61ff11] hover:border-[#7b61ff44]",
    mint: "bg-mint dark:bg-[#38b2ac22] text-[#38b2ac] border-2 border-[#38b2ac11] hover:border-[#38b2ac44]",
    white: "bg-white dark:bg-white/5 text-[#181114] dark:text-white border-2 border-transparent hover:border-primary/10"
  };

  return (
    <button className={`group flex items-center justify-between min-w-0 cursor-pointer overflow-hidden rounded-full h-16 px-8 text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${clasesColores[estilo]}`}>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined">{icono}</span>
        <span className="truncate">{texto}</span>
      </div>
      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
        arrow_forward_ios
      </span>
    </button>
  );
}

function BotonSocial({ icono, etiqueta }) {
  return (
    <a className="flex flex-col items-center gap-2 group cursor-pointer" href="#">
      <div className="rounded-full bg-sakura dark:bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined text-2xl">{icono}</span>
      </div>
      <p className="text-[#181114] dark:text-white text-xs font-bold">{etiqueta}</p>
    </a>
  );
}