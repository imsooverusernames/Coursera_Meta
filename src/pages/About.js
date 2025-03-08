import "./About.css";
import founders from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/Mario and Adrian A.jpg";
import foundersb from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to Little Lemon! We’re a family-owned restaurant that offers
          fresh, Mediterranean-inspired dishes made with love. Whether you're here
          for a casual meal or a special occasion, we promise a dining experience
          you'll never forget.
        </p>
      </div>
      <div className="owners">
        <div className="a">
          <img
            src={founders}
            alt="Owner 1"
          />
        </div>
        <div className="b">
          <img
            src={foundersb}
            alt="Owner 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
