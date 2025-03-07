import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const [reservationData, setReservationData] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const navigate = useNavigate();

  // Load reservations and the API script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.api) {
        const currentReservations = window.api.getReservations();
        setReservationData(currentReservations);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function for submitting the form
  const submitForm = (formData) => {
    const result = window.api.submitAPI(formData);

    if (result) {
      navigate('/booking-confirmed');
    } else {
      alert('Error with your booking. Please try again.');
    }
  };

  // Handle form submission
  const handleReservationSubmit = (e) => {
    e.preventDefault();

    const formData = { name, date, time, guests };
    submitForm(formData);
  };

  return (
    <div>
      <h1>Make a Reservation</h1>
      <form onSubmit={handleReservationSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <br />
        <label>Number of Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        <br />
        <button type="submit">Reserve</button>
      </form>

      <h2>Current Reservations</h2>
      <ul>
        {reservationData ? (
          reservationData.map((reservation, index) => (
            <li key={index}>
              {reservation.name} reserved for {reservation.guests} people on{' '}
              {reservation.date} at {reservation.time}.
            </li>
          ))
        ) : (
          <p>Loading reservations...</p>
        )}
      </ul>
    </div>
  );
};

export default Reservations;
