import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import LogoutRoute from './routes/LogoutRoute';

const AppRouter = () => {
  return (
    <AuthProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas para autenticación y registro */}
            <Route path="/" element={<LogoutRoute />}>
              <Route index element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
            </Route>
            
            {/* Rutas protegidas */}
            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </AuthProvider>
  );
};

export default AppRouter;