import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import AppRouter from './AppRouter';

// Componente raíz de la aplicación
function Main() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

// Renderizar la aplicación en el elemento con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
