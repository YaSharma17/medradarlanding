// Header.js
import React, { useState } from 'react';
import './Header.css'; // Import CSS for Header component styling

const Header = () => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle click event on the "About" link
  const handleAboutClick = () => {
    setShowModal(true); // Set showModal state to true to show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Set showModal state to false to hide the modal
  };

  return (
    <header className="header">
      <div classname="logo">
        <h1 className={Header.title_box}>
          <span className={Header.title}>
            <span className={Header.title_span0}>MΞD </span>
            <span className={Header.title_span1}> RΔDΔЯ</span>
          </span>
        </h1>
        
      </div>
      <nav className="nav">
        <ul>
          <li><a href="UntitledPage">Hospitals</a></li>
          <li><a href="#about" onClick={handleAboutClick}>About</a></li>
          <li><a href="#location">Location</a></li>
          <li className="login-signup">
          <button className="login">Login</button>
          <button className="signup">Signup</button>

          </li>
        </ul>
      </nav>
      {showModal && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content">
            <p>Medradar is dedicated to providing fair emergency services.</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
