import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservations.css';

const Reservations = () => {
  const [reservationData, setReservationData] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js';
    script.async = true;
    
    script.onload = () => {
      if (window.api) {
        try {
          const currentReservations = window.api.getReservations();
          setReservationData(currentReservations || []);
        } catch (err) {
          setError('Failed to load reservations.');
        } finally {
          setLoading(false);
        }
      }
    };
    
    script.onerror = () => {
      setError('Failed to load API script.');
      setLoading(false);
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const submitForm = async (formData) => {
    try {
      const result = await window.api.submitAPI(formData);
      if (result) {
        navigate('/booking-confirmed');
      } else {
        alert('Error with your booking. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while submitting your reservation. Please try again.');
    }
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const formData = { name, date, time, guests: Number(guests) };
    submitForm(formData);
  };

  return (
    <div className="reservation-container">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleReservationSubmit} className="reservation-form">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <br />
        <label>Number of Guests:</label>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required min="1" />
        <br />
        <button type="submit" className="submit-button">Reserve</button>
      </form>

      <h2>Current Reservations</h2>
      {loading ? (
        <p>Loading reservations...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="reservation-list">
          {reservationData.length > 0 ? (
            reservationData.map((reservation) => (
              <li key={reservation.id || reservation.name + reservation.date + reservation.time} className="reservation-item">
                {reservation.name} reserved for {reservation.guests} people on {reservation.date} at {reservation.time}.
              </li>
            ))
          ) : (
            <p>No reservations found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Reservations;
