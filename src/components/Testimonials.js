import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing food! The Greek Salad is my favorite. Definitely coming back!",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great ambiance and service. Highly recommend the Lemon Dessert!",
  },
  {
    id: 3,
    name: "Sara Lee",
    review: "The best restaurant in town! Everything was perfect.",
  },
  {
    id: 4,
    name: "Alex Kim",
    review: "Delicious food and friendly staff. The Bruschetta is a must-try!",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
