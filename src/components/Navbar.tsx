import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-primary-dark font-bold text-xl">田中一郎</NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              ホーム
            </NavLink>
            <NavLink 
              to="/work-history" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              職務経歴
            </NavLink>
            <NavLink 
              to="/education" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              学歴
            </NavLink>
            <NavLink 
              to="/hobbies" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              趣味
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              FAQ
            </NavLink>
          </div>
          
          <button 
            className="md:hidden text-primary-dark" 
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={closeMenu}
            >
              ホーム
            </NavLink>
            <NavLink 
              to="/work-history" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={closeMenu}
            >
              職務経歴
            </NavLink>
            <NavLink 
              to="/education" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={closeMenu}
            >
              学歴
            </NavLink>
            <NavLink 
              to="/hobbies" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={closeMenu}
            >
              趣味
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              onClick={closeMenu}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;