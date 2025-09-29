import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import SearchBar from '../Components/Search/SearchBar'

const Home = () => {
  return (
    <div className="page-layout">
      <Navbar />    

      <main className="main-content">
        <section className="hero">
          <div className="wrap">
            <div>
              <h1>Tecnología • Gaming • Conectividad</h1>
              <p>
                Accesorios gamer, periféricos, cables y más. Envíos a todo el país, 
                cuotas con poco interés y atención cercana.
              </p>

              <SearchBar />

              <div className="hero-cta">
                <a className="btn" href="/catalogo">Ver catálogo</a>
                <a className="btn-outline" href="/contacto">Dónde estamos</a>
              </div>
            </div>

            <div className="hero-card">
              <h3>Compra segura con Volto</h3>
              <div className="kpis">
                <div className="kpi">3 cuotas con poco interés</div>
                <div className="kpi">Envíos seguros</div>
                <div className="kpi">Garantía oficial</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home

