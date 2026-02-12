import { useState, useMemo, useCallback, useEffect } from 'react';
import { LinkBio } from './components/LinkBio';
import { Tienda } from './components/Tienda';
import { Carrito } from './components/Carrito';
import { Informacion } from './components/Informacion';
import ErrorBoundary from './components/ErrorBoundary';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STORAGE_KEYS } from './utils/constants';
import Toast from './components/Toast';
import ReactGA from 'react-ga4';

function App() {
  const [vistaActual, setVistaActual] = useState('bio');
  const [carrito, setCarrito] = useLocalStorage(STORAGE_KEYS.CARRITO, []);
  const [toast, setToast] = useState(null);

  // Validar estructura del carrito al cargar desde localStorage (solo una vez al montar)
  useEffect(() => {
    if (carrito && Array.isArray(carrito)) {
      const carritoValido = carrito.filter(item => 
        item && 
        typeof item.id !== 'undefined' && 
        typeof item.cantidad !== 'undefined' &&
        item.cantidad > 0
      );
      if (carritoValido.length !== carrito.length) {
        setCarrito(carritoValido);
      }
    } else if (!Array.isArray(carrito)) {
      setCarrito([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Solo ejecutar al montar

  const agregarAlCarrito = useCallback((producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      const nuevoCarrito = existe
        ? prevCarrito.map(item => 
            item.id === producto.id 
              ? { ...item, cantidad: item.cantidad + 1 } 
              : item
          )
        : [...prevCarrito, { ...producto, cantidad: 1 }];
      
      // Tracking de Google Analytics
      ReactGA.event({
        action: 'add_to_cart',
        category: 'Ecommerce',
        label: producto.nombre,
        value: producto.precio
      });
      
      // Mostrar toast de confirmación (el cierre a los 3 s lo maneja el componente Toast)
      setToast({
        mensaje: `${producto.nombre} agregado al carrito`,
        tipo: 'exito'
      });

      return nuevoCarrito;
    });
    
    if (navigator.vibrate) navigator.vibrate(50);
  }, [setCarrito]);

  const eliminarDelCarrito = useCallback((idProducto) => {
    const producto = carrito.find(item => item.id === idProducto);
    if (window.confirm(`¿Eliminar ${producto?.nombre || 'este producto'} del carrito?`)) {
      // Tracking de Google Analytics
      ReactGA.event({
        action: 'remove_from_cart',
        category: 'Ecommerce',
        label: producto?.nombre || 'Producto desconocido'
      });
      
      setCarrito(prev => prev.filter(item => item.id !== idProducto));
    }
  }, [carrito, setCarrito]);

  const cantidadTotal = useMemo(() => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }, [carrito]);

  // Tracking de navegación
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: `/${vistaActual}`,
      title: `Dome Scoop - ${vistaActual}`
    });
  }, [vistaActual]);

  const irATienda = useCallback(() => {
    setVistaActual('tienda');
    ReactGA.event({
      action: 'view_catalog',
      category: 'Navigation'
    });
  }, []);
  
  const irAInfo = useCallback(() => {
    setVistaActual('info');
    ReactGA.event({
      action: 'view_info',
      category: 'Navigation'
    });
  }, []);
  
  const irACarrito = useCallback(() => {
    setVistaActual('carrito');
    ReactGA.event({
      action: 'view_cart',
      category: 'Navigation'
    });
  }, []);
  
  const volverABio = useCallback(() => setVistaActual('bio'), []);
  const volverATienda = useCallback(() => setVistaActual('tienda'), []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen kawaii-bg flex justify-center">
        
        {vistaActual === 'bio' && (
          <LinkBio 
            alHacerClickEnTienda={irATienda}
            alHacerClickEnInfo={irAInfo}
          />
        )}

        {vistaActual === 'tienda' && (
          <Tienda 
            alVolver={volverABio}
            irAlCarrito={irACarrito}
            alAgregar={agregarAlCarrito}
            cantidadEnCarrito={cantidadTotal}
          />
        )}

        {vistaActual === 'carrito' && (
          <Carrito 
            carrito={carrito} 
            alVolver={volverATienda}
            alEliminar={eliminarDelCarrito}
          />
        )}

        {vistaActual === 'info' && (
          <Informacion alVolver={volverABio} />
        )}

        {toast && (
          <Toast 
            mensaje={toast.mensaje} 
            tipo={toast.tipo}
            onClose={() => setToast(null)}
          />
        )}
        
      </div>
    </ErrorBoundary>
  );
}

export default App;