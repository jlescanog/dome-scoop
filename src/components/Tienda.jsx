import React, { useMemo } from 'react';
import listaProductos from '../datos/productos.json';
import logoPlaceholder from '../assets/logo_principal.svg'; 

export const Tienda = React.memo(function Tienda({ alVolver, alAgregar, irAlCarrito, cantidadEnCarrito }) {
  
  // Memoizar los filtros de productos para evitar recálculos innecesarios
  const scoops = useMemo(() => 
    listaProductos.filter(p => p.categoria === 'scoops'), 
    []
  );
  
  const capsulas = useMemo(() => 
    listaProductos.filter(p => p.categoria === 'capsulas'), 
    []
  );

  return (
    <div className="w-full max-w-[600px] mx-auto pb-24">
      
      {/* Cabecera */}
      <div className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 flex items-center justify-between border-b border-primary/10 shadow-sm">
        <div className="flex items-center gap-2">
            <button 
              onClick={alVolver} 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Volver a la página principal"
            >
              <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            </button>
            <h2 className="text-xl font-bold bubbly-text">Catálogo</h2>
        </div>

        <button 
          onClick={irAlCarrito} 
          className="relative p-2 text-primary hover:bg-primary/10 rounded-full transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Ir al carrito. ${cantidadEnCarrito > 0 ? `${cantidadEnCarrito} producto${cantidadEnCarrito > 1 ? 's' : ''} en el carrito` : 'Carrito vacío'}`}
          aria-live="polite"
        >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">shopping_cart</span>
            {cantidadEnCarrito > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-bounce" aria-hidden="true">
                    {cantidadEnCarrito}
                </span>
            )}
        </button>
      </div>

      <div className="p-4 flex flex-col gap-8 animate-fade-in">
        
        {/* SECCIÓN 1: SCOOPS */}
        <SeccionProductos 
          titulo="Scoops Mágicos" 
          productos={scoops} 
          alAgregar={alAgregar} 
        />

        {/* Separador visual */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        {/* SECCIÓN 2: CÁPSULAS */}
        <SeccionProductos 
          titulo="Cápsulas Sorpresa" 
          productos={capsulas} 
          alAgregar={alAgregar} 
        />

      </div>
    </div>
  );
});

// Sub-componente para no repetir código (DRY)
const SeccionProductos = React.memo(function SeccionProductos({ titulo, productos, alAgregar }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold text-primary mb-4 px-2">{titulo}</h3>
      <div className="grid grid-cols-2 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="glass-card rounded-2xl p-3 flex flex-col gap-2 hover:scale-[1.02] transition-transform shadow-sm">
            
            {/* Imagen con fallback (si falla la carga, muestra el logo) */}
            <div className="aspect-square rounded-xl bg-white dark:bg-white/5 overflow-hidden p-2 flex items-center justify-center relative">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                width="200"
                height="200"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = logoPlaceholder;
                  e.target.className = "w-2/3 h-2/3 object-contain opacity-50";
                }} 
              />
              {/* Etiqueta de precio flotante */}
              <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/60 px-2 py-1 rounded-md text-xs font-bold shadow-sm backdrop-blur-sm">
                 S/. {producto.precio}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 leading-tight mb-1">
                {producto.nombre}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-snug mb-3">
                {producto.descripcion}
              </p>
              
              {/* Botón Agregar (Full width para fácil clic) */}
              <button 
                onClick={() => alAgregar(producto)}
                className="mt-auto w-full py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-md hover:bg-pink-600 active:scale-95 transition flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Agregar ${producto.nombre} al carrito`}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">add</span>
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});