import React from 'react';

export function Carrito({ carrito, alVolver, alEliminar }) {
  // 1. Calcular el total automáticamente
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  // 2. Función Mágica: Generar Link de WhatsApp
  const enviarPedido = () => {
    const numeroTelefono = "51987529649"; // ¡CAMBIA
    
    let mensaje = `Hola Kawaii Dome! ✨ Me gustaría pedir:%0A%0A`;
    
    carrito.forEach(item => {
      mensaje += `▪️ ${item.cantidad}x ${item.nombre} (S/. ${item.precio * item.cantidad})%0A`;
    });

    mensaje += `%0A💰 *TOTAL: S/. ${total.toFixed(2)}*`;
    mensaje += `%0A📍 Mis datos de envío:`;

    const url = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto min-h-screen pb-20">
      
      {/* Cabecera */}
      <div className="sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 flex items-center gap-4 border-b border-primary/10">
        <button onClick={alVolver} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold bubbly-text">Tu Canasta 🛍️</h2>
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
              <img src={item.imagen} alt={item.nombre} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{item.nombre}</h3>
                <p className="text-xs text-primary font-bold">S/. {item.precio} c/u</p>
                <div className="text-xs text-gray-500">Cantidad: {item.cantidad}</div>
              </div>
              <button 
                onClick={() => alEliminar(item.id)}
                className="text-red-400 hover:text-red-600 p-2"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer Fijo con Total y Botón */}
      {carrito.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2d1521] border-t border-primary/10 p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-20">
          <div className="max-w-[600px] mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total a Pagar:</span>
              <span className="text-primary">S/. {total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={enviarPedido}
              className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}