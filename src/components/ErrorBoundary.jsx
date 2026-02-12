import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualizar el estado para que el siguiente render muestre la UI de fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de logging aquí
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de fallback personalizada
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background-light dark:bg-background-dark">
          <div className="max-w-md w-full glass-card p-8 rounded-2xl text-center">
            <span className="material-symbols-outlined text-6xl text-red-400 mb-4">
              error
            </span>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              ¡Oops! Algo salió mal
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, recarga la página.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-pink-600 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
