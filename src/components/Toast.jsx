import { useEffect } from 'react';

export default function Toast({ mensaje, tipo = 'exito', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const estilos = {
    exito: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <div 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg ${estilos[tipo]} animate-fade-in-toast flex items-center gap-2`}
      role="alert"
      aria-live="polite"
    >
      <span className="material-symbols-outlined text-lg">
        {tipo === 'exito' ? 'check_circle' : tipo === 'error' ? 'error' : 'info'}
      </span>
      <span className="text-sm font-medium">{mensaje}</span>
      <button
        onClick={onClose}
        className="ml-1 hover:opacity-80 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
}
