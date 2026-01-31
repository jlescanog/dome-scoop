import { useState } from 'react';
import { LinkBio } from './components/LinkBio';
import { Tienda } from './components/Tienda';

function App() {
  // Estado para controlar qué vista mostrar: 'bio' o 'tienda'
  const [vistaActual, setVistaActual] = useState('bio');

  // Funciones para navegar
  const irALaTienda = () => setVistaActual('tienda');
  const irAlBio = () => setVistaActual('bio');

  return (
    <div className="min-h-screen kawaii-bg flex justify-center">
      {/* Renderizado Condicional: Si es 'bio' muestra uno, si no el otro */}
      
      {vistaActual === 'bio' ? (
        <LinkBio alHacerClickEnTienda={irALaTienda} />
      ) : (
        <Tienda alVolver={irAlBio} />
      )}
      
    </div>
  );
}

export default App;