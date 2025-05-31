"use client";
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Menu from './components/Menu';

function Counter({ start, end, duration, label }) {
  const counterRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setKey(prev => prev + 1);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef}>
      <h1 className="text-2xl text-amber-950 font-bold">
        {animate && <CountUp key={key} start={start} end={end} duration={duration} suffix="k+" />}
      </h1>
      <h1 className="text-md text-amber-950">{label}</h1>
    </div>
  );
}

function Page() {
  return (
    <div className="h-auto bg-amber-50 relative">
      <div className="pt-16 w-full flex">
        <div className="w-1/2 pl-10">
          <img src="./assets/coffee.png" alt="" />
          <div className="flex gap-6 pl-30">
            <Counter start={1} end={50} duration={2} label="Reviews" />
            <Counter start={1} end={13} duration={3} label="Best sell" />
            <Counter start={10} end={250} duration={2} label="Menus" />
          </div>
        </div>
        <div className="w-1/2 pt-30">
          <h1 className="text-6xl pr-10 text-amber-800 font-serif">
            <span className=" text-[70px]">E</span>njoying <span className=" text-[70px]">Y</span>our <span className=" text-[70px]">M</span>orning <span className=" text-[70px]">C</span>offee
          </h1>
          <p className="mt-6 text-lg text-amber-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <div>
            <button className="mt-10 text-md font-bold hover:border-2 hover:border-amber-800 hover:bg-amber-50 hover:text-amber-800 px-6 py-2 rounded-3xl bg-amber-900 text-white">
              click me
            </button>
          </div>
        </div>
      </div>
       <img  className="w-3/4 opacity-30 absolute right-0 top-[230px]" src="./assets/thool.png" alt="" />
      <Menu />
    </div>
  );
}

export default Page;
