import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to Little Lemon! We’re a family-owned restaurant that offers
        fresh, Mediterranean-inspired dishes made with love. Whether you're here
        for a casual meal or a special occasion, we promise a dining experience
        you'll never forget.
      </p>

      <div className="owners">
        <div className="owner">
          <img
            src="https://source.unsplash.com/150x150/?portrait,man"
            alt="Owner 1"
          />
          <h3>John Lemon</h3>
          <p>Co-founder & Chef</p>
        </div>
        <div className="owner">
          <img
            src="https://source.unsplash.com/150x150/?portrait,woman"
            alt="Owner 2"
          />
          <h3>Jane Lemon</h3>
          <p>Co-founder & Manager</p>
        </div>
      </div>
    </section>
  );
};

export default About;
