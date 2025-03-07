import React from "react";
import "./Home.css";
import bruschetta from "D:/Coding_Files/Little Lemon/little-lemon/src/assets/restauranfood.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-text">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="hero-button">Reserve a Table</button>
        </div>
        <img
          src={bruschetta}
          alt="Bruschetta"
          className="hero-image"
        />
      </section>
    </div>
  );
};

export default Home;
