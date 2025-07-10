import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar'
import './Donate.css';
import InjDogs from './InjDogs';

const Donate = () => {

  // fade-In word
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const nearX = e.clientX > r.left - 80 && e.clientX < r.right + 80;
      const nearY = e.clientY > r.top - 40 && e.clientY < r.bottom + 40;
      setShow(nearX && nearY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  

  //background
  const colors = ['#FF6B35', '#FF914D'];

  const squares = [...Array(15)].map((_, i) => {
    const size = 20 + Math.floor(Math.random() * 40); // 20–60px
    const left = `${Math.floor(Math.random() * 90)}%`;
    const duration = `${8 + Math.random() * 10}s`;
    const delay = `${Math.random() * 5}s`;
    const color = colors[i % colors.length];

    return (
      <span
        key={i}
        style={{
          '--size': `${size}px`,
          '--left': left,
          '--duration': duration,
          '--delay': delay,
          '--color': color
        }}
      />
    );
  });

  return (
    <div className="w-full flex flex-col items-center text-center">
      <NavBar />

      {/* Hero section with background */}
      <div className="relative w-full px-6 md:px-12 lg:px-24 pt-10 mt-20 z-10 overflow-hidden">
        <div className="wrapper absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          {squares}
        </div>

        <div className="relative z-10"> {/* Content above the animated squares */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-20">
            We Need Your Help
          </h2>
          <p className="text-xl md:text-5xl font-semibold text-white mt-20 select-none">
            Let us have a{' '}
            <span ref={ref} className="relative">
              Future
              <span
                className={`absolute left-full ml-2 whitespace-nowrap font-bold text-[#dd9972] transition-opacity duration-400 pointer-events-none select-none`}
                style={{ opacity: show ? 1 : 0 }}
              >
                to Dream
              </span>
            </span>
          </p>

          <div className="flex justify-center mt-20">
            <img src="/images/dogD1.gif" alt="Dog GIF" className="w-[540px] h-auto" />
          </div>
        </div>
      </div>

      {/* Below section - no background effect */}
      <div className="relative z-10 w-full ">
        <InjDogs />
      </div>
    </div>

  ); 
};

export default Donate;
