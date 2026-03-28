import React from 'react';

const Navbar = () => {
  const total = 25000; // Valor fijo inicial [cite: 47]
  const token = false; // Simulación de sesión [cite: 48]

  // Función para formatear el número con separador de miles [cite: 66, 67]
  const formatCurrency = (value) => value.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <div className="navbar-nav me-auto">
        <button className="btn btn-sm btn-outline-light border-1 mx-1">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-sm btn-outline-light border-1 mx-1">🔓 Profile</button>
            <button className="btn btn-sm btn-outline-light border-1 mx-1">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-outline-light border-1 mx-1">🔐 Login</button>
            <button className="btn btn-sm btn-outline-light border-1 mx-1">🔐 Register</button>
          </>
        )}
      </div>
      <div className="ms-auto">
        <button className="btn btn-outline-info text-info border-1">
          🛒 Total: ${formatCurrency(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;