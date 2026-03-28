import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzaNapolitana from '../assets/pizza-napolitana.jpeg';
import pizzaEspañola from '../assets/pizza-española.jpeg';
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={pizzaNapolitana}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={pizzaEspañola}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={pizzaPepperoni}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;