import React from 'react';
import listaProductos from '../datos/productos.json'; // Importamos tu "BD"

export function Tienda({ alVolver }) {
  return (
    <div className="w-full max-w-[600px] mx-auto pb-20">
      
      {/* Cabecera de la Tienda */}
      <div className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center gap-4 border-b border-primary/10">
        <button 
          onClick={alVolver}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold bubbly-text">Catálogo de Scoops 🥄</h2>
      </div>

      {/* Grilla de Productos */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {listaProductos.map((producto) => (
          <div key={producto.id} className="glass-card rounded-2xl p-3 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            {/* Imagen (Placeholder si no carga) */}
            <div className="aspect-square rounded-xl bg-pink-100 overflow-hidden">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div>
              <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 leading-tight">
                {producto.nombre}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {producto.descripcion}
              </p>
            </div>

            {/* Precio y Botón */}
            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="font-extrabold text-primary">S/. {producto.precio}</span>
              <button className="bg-primary text-white p-2 rounded-full shadow-md hover:bg-pink-600 transition">
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}