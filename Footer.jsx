import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; 2024 InsightStream. All rights reserved.</p>
        <p className="mb-0">
          <a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a> |{' '}
          <a href="/terms-of-service" className="text-white text-decoration-none">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
