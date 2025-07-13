import React from 'react'
import Home from './Home'
import AdoptReasons from './AdoptReasons'
import Help from './Help'
import AdoptDog from './AdoptDog'
import Contact from './Contact'


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
      <section id="help">
        <AdoptDog/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}

export default LandingPage