import { useState } from 'react';
import { LinkBio } from './components/LinkBio';
import { Tienda } from './components/Tienda';
import { Carrito } from './components/Carrito';

function App() {
  const [vistaActual, setVistaActual] = useState('bio'); // 'bio', 'tienda', 'carrito'
  const [carrito, setCarrito] = useState([]);

  // --- LÓGICA DEL CARRITO ---
  
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      // 1. Buscamos si el producto ya está en la canasta
      const existe = prevCarrito.find(item => item.id === producto.id);
      
      if (existe) {
        // 2. Si existe, creamos una nueva lista sumándole 1 a la cantidad de ese item
        return prevCarrito.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        // 3. Si no existe, lo agregamos con cantidad base = 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    // Opcional: Vibración en celulares al agregar
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const eliminarDelCarrito = (idProducto) => {
    setCarrito(prev => prev.filter(item => item.id !== idProducto));
  };

  // Calcular cantidad total de items (para la burbuja roja)
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // --- NAVEGACIÓN ---

  return (
    <div className="min-h-screen kawaii-bg flex justify-center">
      
      {vistaActual === 'bio' && (
        <LinkBio alHacerClickEnTienda={() => setVistaActual('tienda')} />
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
      
    </div>
  );
}

export default App;