import "./Specials.css";

import greekSaladImg from "../assets/greek salad.jpg";
import bruschettaImg from "../assets/bruschetta.jpg";
import lemonDessertImg from "../assets/lemon dessert.jpg";
import orderSvg from "../assets/Dish icon.svg";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons",
    price: "$12.99",
    image: greekSaladImg
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    image: bruschettaImg
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description: "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined",
    price: "$5.00",
    image: lemonDessertImg
  }
];

const Specials = () => {
  return (
    <section className="specials">
      <h2>This week's specials!</h2>
      <div className="specials-container">
        {specialsData.map((dish) => (
          <div key={dish.id} className="special-card">
            <img src={dish.image} alt={dish.name} />
            <div className="row-element">
              <h3>{dish.name}</h3>
              <span className="price">{dish.price}</span>
            </div>
            <p>{dish.description}</p>
            <div className="row-element">
              <h4>Order a delivery</h4>
              <img src={orderSvg} alt="Order online" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
