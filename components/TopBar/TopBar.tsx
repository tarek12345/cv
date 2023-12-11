"use client";
import React, { useState,useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Image from "next/image";
import "./TopBar.css";

export default function TopBar() {
  const [countClick, setCountClick] = useState([
    { name: "React js", num: 99 },
    { name: "Next js", num: 90 },
    { name: "Angular js", num: 80 },
  ]);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="top-bar bg-pan-bl">
      <header className={`head ${isSticky ? 'fixed' : ''}`}>
        <div className="logocv">
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <Navigation />
      </header>

      <section className="content">
        <h1>Développeur Front-end </h1>
        <div className="typeFremwork mt-2">
          {countClick.map((count) => {
            return (
              <div className="flex justify-around items-center py-3 w-100">
                <label className="text-white me-2">{count.name}</label>
                <input
                  className="range relative flex w-full"
                  aria-valuemin={0}
                  type="range"
                  min="0"
                  max="100%"
                  value={count.num}
                  id="slider"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-around items-center mt-2">
          <a href="/contact" className="btn light "></a>
          <a
            href="/doc/cv.pdf"
            className="btn light download "
            download="cv tarek"
          ></a>
        </div>
      </section>
    </div>
  );
}
