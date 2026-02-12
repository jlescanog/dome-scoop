import React from 'react';

export const Informacion = React.memo(function Informacion({ alVolver }) {
  return (
    <div className="w-full max-w-[600px] mx-auto pb-10 px-4">
      
      {/* Cabecera */}
      <div className="sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-4 mb-6 flex items-center gap-4 border-b border-primary/10">
        <button 
          onClick={alVolver} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Volver a la página principal"
        >
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold bubbly-text">Sobre Nosotros ✨</h2>
      </div>

      <div className="flex flex-col gap-6 animate-fade-in">
        
        {/* Sección 1: Quiénes somos */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-primary">
            <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
            <h3 className="text-xl font-bold">¿Qué es Dome Scoop?</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Somos un emprendimiento lleno de amor y sorpresas. Grabamos tu pedido en video para 
            TikTok mientras empacamos tus productos favoritos de papelería, belleza y juguetes. 
            ¡La emoción de no saber qué te tocará es parte de la experiencia! 💖
          </p>
        </div>

        {/* Sección 2: Envíos */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-blue-500">
            <span className="material-symbols-outlined text-3xl">local_shipping</span>
            <h3 className="text-xl font-bold">Envíos a todo el Perú</h3>
          </div>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Envíos por <strong>Shalom o Olva Courier</strong>.</li>
            <li>Tiempo de procesamiento: 2 a 3 días hábiles.</li>
            <li>El costo de envío se paga al recibir (Pago en destino) o previo depósito.</li>
          </ul>
        </div>

        {/* Sección 3: Métodos de Pago */}
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-green-500">
            <span className="material-symbols-outlined text-3xl">payments</span>
            <h3 className="text-xl font-bold">Métodos de Pago</h3>
          </div>
          <div className="flex gap-4 mt-2">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg font-bold">Yape</span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-bold">Plin</span>
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-bold">Transferencia</span>
          </div>
        </div>

      </div>
    </div>
  );
});