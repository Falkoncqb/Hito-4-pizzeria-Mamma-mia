import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container my-5 text-center">Cargando pizza...</div>;
  }

  return (
    <div className="container my-5">
      <div className="card mb-3 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start h-100 object-fit-cover" 
              alt={pizza.name} 
            />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-column h-100">
              <h2 className="card-title text-capitalize border-bottom pb-2">{pizza.name}</h2>
              <p className="card-text text-muted mt-2">{pizza.desc}</p>
              
              <div className="mb-4 mt-2">
                <strong>Ingredientes:</strong>
                <ul className="list-unstyled mb-0 mt-2 text-capitalize">
                  {pizza.ingredients?.map((ingredient, index) => (
                    <li key={index}>🍕 {ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
                <h3 className="mb-0">Precio: ${pizza.price?.toLocaleString('es-CL')}</h3>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
