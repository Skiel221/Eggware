import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'; // Asegúrate de que esta ruta sea correcta

const Layout = ({ user }) => {
  return (
    <div className="app-container">
      <Navbar user={user} />
      <main className="main-content">
        <Outlet /> {/* Esto renderizará las páginas hijas (Home, Products, etc.) */}
      </main>
    </div>
  );
};

export default Layout;