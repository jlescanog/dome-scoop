import { useState } from 'react';
import { LinkBio } from './components/LinkBio';
import { Tienda } from './components/Tienda';
import { Carrito } from './components/Carrito';
import { Informacion } from './components/Informacion'; // IMPORTAR NUEVO

function App() {
  // Ahora soportamos 4 vistas: 'bio', 'tienda', 'carrito', 'info'
  const [vistaActual, setVistaActual] = useState('bio');
  const [carrito, setCarrito] = useState([]);

  // ... (Lógica del carrito igual que antes) ...
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      if (existe) {
        return prevCarrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const eliminarDelCarrito = (idProducto) => {
    setCarrito(prev => prev.filter(item => item.id !== idProducto));
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="min-h-screen kawaii-bg flex justify-center">
      
      {vistaActual === 'bio' && (
        <LinkBio 
          alHacerClickEnTienda={() => setVistaActual('tienda')}
          alHacerClickEnInfo={() => setVistaActual('info')} // NUEVO
        />
      )}

      {vistaActual === 'tienda' && (
        <Tienda 
          alVolver={() => setVistaActual('bio')}
          irAlCarrito={() => setVistaActual('carrito')}
          alAgregar={agregarAlCarrito}
          cantidadEnCarrito={cantidadTotal}
        />
      )}

      {vistaActual === 'carrito' && (
        <Carrito 
          carrito={carrito} 
          alVolver={() => setVistaActual('tienda')}
          alEliminar={eliminarDelCarrito}
        />
      )}

      {/* NUEVA VISTA */}
      {vistaActual === 'info' && (
        <Informacion alVolver={() => setVistaActual('bio')} />
      )}
      
    </div>
  );
}

export default App;