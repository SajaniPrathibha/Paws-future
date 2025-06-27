import React from 'react'
import Home from './Home'
import AdoptReasons from './AdoptReasons'
import VideoTest from './VideoTest'

const LandingPage = () => {
  return (
    <div>
        <section id="home">
            <Home />
        </section>
          <section id="adoptReasons">
              <AdoptReasons/>
          </section>
    </div>
  )
}

export default LandingPage