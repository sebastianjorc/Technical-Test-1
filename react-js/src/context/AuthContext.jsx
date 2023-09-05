import {createContext, useContext, useState} from 'react'
import { registerRequest, loginRequest } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({children}) => {
  console.log(`LocalStorage: ${localStorage.getItem('authToken')}`);
  const [user, setUser] = useState(null);
  const [authErrors, setAuthErrorss] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') || false);
  const [authToken, setToken] = useState(localStorage.getItem('authToken') || null);

  const signup = async (user) => {
    try{
      const response = await registerRequest(user);
      console.log(response.data);
    } catch (error){
      setAuthErrorss(error.response.data);
    }    
  }

  const signin = async (user) => {
    try{
      const response= await loginRequest(user);
      const { token } = response.data;      
      // Guardar el token en localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('isAuthenticated', true);
      console.log(`GUARDO TOKEN: ${token}`);
      setUser(user);
      setToken(token);
      setIsAuthenticated(true);
    } catch (error){
      setAuthErrorss(error.response.data);
    }    
  }

  const logout = () =>{
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);   
    localStorage.removeItem('authToken'); 
    localStorage.removeItem('isAuthenticated'); 
  }

  return (
    <AuthContext.Provider value={{signup, signin, logout, user, isAuthenticated, authToken, authErrors}}>
      {children}
    </AuthContext.Provider>
  )
}