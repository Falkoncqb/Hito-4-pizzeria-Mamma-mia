import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 w-100">
      <img src={img} className="card-img-top" alt={name} style={{height: '250px', objectFit: 'cover'}} />
      <div className="card-body text-center">
        <h4 className="card-title fw-light text-start pb-3 border-bottom">Pizza {name}</h4>
        <p className="card-text text-muted mb-0 mt-3">Ingredientes:</p>
        <p className="card-text fw-light">
          🍕 {ingredients.join(', ')}
        </p>
      </div>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item fs-4 fw-bold text-muted border-0">
          Precio: ${price.toLocaleString('es-CL')}
        </li>
      </ul>
      <div className="card-body d-flex justify-content-around">
        <button className="btn btn-outline-dark border-1 px-4">Ver Más 👀</button>
        <button className="btn btn-dark px-4">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;