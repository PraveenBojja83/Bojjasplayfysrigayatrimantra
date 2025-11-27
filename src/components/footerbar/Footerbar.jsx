import React from 'react';
import './footerbar.css';
import homeIcon from '../../assets/icons/icon-home.png';

const Navbar = ({ onHomeClick }) => {
  return (
    <footer className="footerbar">
      <div className="footerbar-content">
        <h2>2025 BojjasTekhub IT Solutions. All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Navbar;