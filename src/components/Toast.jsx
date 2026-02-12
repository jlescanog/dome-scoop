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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg ${estilos[tipo]} animate-fade-in flex items-center gap-2`}
      role="alert"
      aria-live="polite"
    >
      <span className="material-symbols-outlined">
        {tipo === 'exito' ? 'check_circle' : tipo === 'error' ? 'error' : 'info'}
      </span>
      <span className="font-medium">{mensaje}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-80 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
}
