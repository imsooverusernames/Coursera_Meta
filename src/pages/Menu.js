import "./Menu.css";

const menuData = {
  Appetizers: [
    { id: 1, name: "Stuffed Mushrooms", price: "$7.99", description: "Mushrooms stuffed with a rich cheese and herb filling, baked to perfection." },
    { id: 2, name: "Garlic Bread", price: "$4.99", description: "Crispy baguette slices smothered in garlic butter and fresh herbs." }
  ],
  Entrees: [
    { id: 3, name: "Grilled Salmon", price: "$18.99", description: "Fresh salmon fillet grilled and served with lemon butter sauce." },
    { id: 4, name: "Pasta Primavera", price: "$14.99", description: "Pasta tossed with seasonal vegetables and a light garlic sauce." }
  ],
  Desserts: [
    { id: 5, name: "Chocolate Lava Cake", price: "$6.99", description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream." },
    { id: 6, name: "Tiramisu", price: "$6.50", description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream." }
  ]
};

const Menu = () => {
  return (
    <section className="menu">
      {Object.keys(menuData).map((category) => (
        <div key={category} className="menu-category">
          <h3>{category}</h3>
          <div className="menu-items">
            {menuData[category].map((item) => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-header">
                  <h4>{item.name}</h4>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
