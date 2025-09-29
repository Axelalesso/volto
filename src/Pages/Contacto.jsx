import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { FaClock, FaTruck, FaInstagram } from "react-icons/fa";

const Contacto = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='titulo-contact'>Contacto</h1>
      <div className="contact-grid">
        <div className="card-box">
          <h3>Encontranos</h3>
          <p className="muted">Almafuerte 2964, Buenos Aires</p>
          <div className="mapa-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6562.275952806801!2d-58.561409!3d-34.676467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62f20761d99%3A0x768907501a4b9673!2sAlmafuerte%202964%2C%20B1754ARZ%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1757037094145!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a className="mail-link" href="mailto:voltoarg@gmail.com">
            📧 Escribinos: voltoarg@gmail.com
          </a>
        </div>

        <div className="card-box contact-card">
  <h3>Horario y medios</h3>
  <ul className="contact-list">
    <li>
      <FaClock className="icon" />
      <span>🕐 Lunes a Sábados, 10 a 19 hs</span>
    </li>
    <li>
      <FaTruck className="icon" />
      <span>📦 Envíos a todo el país</span>
    </li>
    <li>
      <FaInstagram className="icon" />
      <span>💰 Ofertas con cuotas sin interés</span>
    </li>
    <li>
      <FaInstagram className="icon instagram" />
      <a
        href="https://www.instagram.com/volto_sanjusto?igsh=MTByOHY3c3RmZnZrZQ=="
        target="_blank"
        rel="noreferrer"
      >
        @volto_sanjusto
      </a>
    </li>
  </ul>
</div>
        </div>
      <Footer />
    </div>
  )
}

export default Contacto
