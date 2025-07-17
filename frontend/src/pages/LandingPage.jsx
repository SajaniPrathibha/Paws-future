import React from 'react'
import Home from './Home'
import AdoptReasons from './AdoptReasons'
import Help from './Help'
import AdoptDog from './AdoptDog'
import Contact from './Contact'
import Footer from '../components/Footer'


const LandingPage = () => {
  return (
    <div>
        <section id="home">
            <Home />
        </section>
          <section id="adoptReasons">
              <AdoptReasons/>
          </section>
        <section id="help">
           <Help/>
        </section>
      <section id="adoption">
        <AdoptDog/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  )
}

export default LandingPage