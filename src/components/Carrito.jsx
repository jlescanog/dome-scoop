import React, { useMemo } from 'react';
import logoPlaceholder from '../assets/logo_principal.svg';
import { TELEFONO_WHATSAPP, MENSAJES } from '../utils/constants';
import ReactGA from 'react-ga4';

export const Carrito = React.memo(function Carrito({ carrito, alVolver, alEliminar }) {
  const total = useMemo(() => 
    carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0),
    [carrito]
  );

  const enviarPedido = () => {
    // Tracking de Google Analytics
    ReactGA.event({
      action: 'initiate_checkout',
      category: 'Ecommerce',
      label: 'WhatsApp',
      value: total
    });

    let mensaje = MENSAJES.WHATSAPP_PEDIDO_INICIO;
    carrito.forEach(item => {
      mensaje += `▪️ ${item.cantidad}x ${item.nombre} (S/. ${item.precio * item.cantidad})%0A`;
    });
    mensaje += `%0A💰 *TOTAL: S/. ${total.toFixed(2)}*`;
    mensaje += MENSAJES.WHATSAPP_PEDIDO_DATOS;

    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto min-h-screen pb-20">
      
      {/* Cabecera */}
      <div className="sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 flex items-center gap-4 border-b border-primary/10">
        <button 
          onClick={alVolver} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Volver al catálogo"
        >
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold bubbly-text">Tu Canasta 🛍️</h2>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {carrito.length === 0 
            ? 'Carrito vacío' 
            : `${carrito.length} producto${carrito.length > 1 ? 's' : ''} en el carrito`}
        </div>
      </div>

      {/* Lista de Productos */}
      <div className="p-4 flex flex-col gap-4">
        {carrito.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <span className="material-symbols-outlined text-6xl mb-4">production_quantity_limits</span>
            <p>Tu canasta está vacía...</p>
          </div>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="glass-card p-4 rounded-xl flex items-center gap-4 animate-fade-in">
              
              {/* Imagen con protección (Si falla, muestra el logo) */}
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="w-16 h-16 rounded-lg object-cover bg-white"
                loading="lazy"
                width="64"
                height="64"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = logoPlaceholder;
                  e.target.className = "w-16 h-16 rounded-lg object-contain p-1 bg-white";
                }}
              />
              
              <div className="flex-1">
                <h3 className="font-bold text-sm">{item.nombre}</h3>
                <p className="text-xs text-primary font-bold">S/. {item.precio} c/u</p>
                <div className="text-xs text-gray-500">Cantidad: {item.cantidad}</div>
              </div>
              <button 
                onClick={() => alEliminar(item.id)}
                className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                aria-label={`Eliminar ${item.nombre} del carrito`}
              >
                <span className="material-symbols-outlined" aria-hidden="true">delete</span>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer Fijo */}
      {carrito.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2d1521] border-t border-primary/10 p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-20">
          <div className="max-w-[600px] mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total a Pagar:</span>
              <span className="text-primary">S/. {total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={enviarPedido}
              className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Enviar pedido por WhatsApp"
            >
              <span className="material-symbols-outlined" aria-hidden="true">chat</span>
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
});