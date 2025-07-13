// Estilos
import './globals.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Firebase
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// Rutas y layout
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './Layout.jsx';

// Páginas
import Home from './pages/Home/Home.jsx';


// Contextos
import { UserProvider } from './contexts/UserContext';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  // Escuchar cambios de autenticación con Firebase
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <UserProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Rutas de Admin */}
          <Route path="/admin" element={<AdminLayout user={user} />}>
            <Route index element={<AdminProducts />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* Rutas públicas */}  
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;