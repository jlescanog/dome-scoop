import React from 'react';
import listaProductos from '../datos/productos.json';

// AHORA RECIBIMOS 'alAgregar' y 'cantidadEnCarrito'
export function Tienda({ alVolver, alAgregar, irAlCarrito, cantidadEnCarrito }) {
  return (
    <div className="w-full max-w-[600px] mx-auto pb-24"> {/* pb-24 para que el boton flotante no tape el ultimo producto */}
      
      {/* Cabecera con Botón de Carrito Flotante */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-primary/10">
        <div className="flex items-center gap-2">
            <button onClick={alVolver} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-xl font-bold bubbly-text">Catálogo 🥄</h2>
        </div>

        {/* Botón ver carrito pequeño */}
        <button onClick={irAlCarrito} className="relative p-2 text-primary hover:bg-primary/10 rounded-full transition">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {cantidadEnCarrito > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-bounce">
                    {cantidadEnCarrito}
                </span>
            )}
        </button>
      </div>

      {/* Grilla de Productos */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {listaProductos.map((producto) => (
          <div key={producto.id} className="glass-card rounded-2xl p-3 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <div className="aspect-square rounded-xl bg-pink-100 overflow-hidden">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 leading-tight">{producto.nombre}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{producto.descripcion}</p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="font-extrabold text-primary">S/. {producto.precio}</span>
              
              {/* Botón Agregar */}
              <button 
                onClick={() => alAgregar(producto)}
                className="bg-primary text-white p-2 rounded-full shadow-md hover:bg-pink-600 active:scale-90 transition"
              >
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}