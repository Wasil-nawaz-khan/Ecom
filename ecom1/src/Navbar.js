import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <nav>
      <Link to="/"><button>Home</button></Link>
      <Link to="/products"><button>Products</button></Link>
      
      {!isAuthenticated && (
          <Link to="/login"><button>Login</button></Link>
        )}
        {isAuthenticated && (
           <>
            <Link to="/cart"><button>Cart</button></Link>
              <button onClick={handleLogout}>Logout</button>
           </>
           
        )}
    </nav>
  );
};

export default Navbar;
