import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de que el archivo CSS esté importado

const LandingPage = () => {
  return (
    <div className="landing-container"> {/* Usa la clase CSS aquí */}
      <h1>Welcome to Houseplant Store</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
