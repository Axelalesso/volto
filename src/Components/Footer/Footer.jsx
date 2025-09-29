import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import valtrionLogo from "../../assets/valtrion_sin_fondo_mejorado.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="https://www.instagram.com/volto_sanjusto?igsh=MTByOHY3c3RmZnZrZQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="white" />
        </a>
      </div>

      <div className="footer-center">
        <a
          href="https://www.instagram.com/valtrionstudio?igsh=dWplMHNzOTUwZWsy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={valtrionLogo} alt="Valtrion Logo" className="valtrion-logo" />
        </a>
      </div>

      <div className="footer-right">
        <p>
          Programadores de la página web:{" "}
          <a
            href="https://www.instagram.com/valtrionstudio?igsh=dWplMHNzOTUwZWsy"
            target="_blank"
            rel="noopener noreferrer"
          >
            @valtrionstudio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
