 "use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

import Profession from "./Profession/Profession";
import Education from "./Education/Education";
export default function pageHome() {
  interface ProgressBarProps {
    // Other props...
    "aria-valuemax": number | string; // Accepts both number and string
  }
  const [Competence, setCompetence] = useState([
    { name: "NODE JS", num: 70 },
    { name: "ANGULAR JS", num: 99 },
    { name: "REACT JS", num: 90 },
    { name: "NEXT JS", num: 80 },
    { name: "HTML 5", num: 99 },
    { name: "WORDPRESS", num: 99 },
    { name: "CSS 3", num: 90 },
    { name: "TAILWIND CSS", num: 77 },
    { name: "MONGODB", num: 70 },
    { name: "PHOTOSHOP", num: 88 },
    { name: "ADOPE XD", num: 80 },
  ]);
  const showInGroups = Competence.length > 4;

  return (
    <div className="homepage">
      <div className=" row description__profil">
        <div className="profil col-md-4 col-xs-12">
          <img src="/assets/profil.jpg" />
        </div>
        <div className="profile-info col-md-8 col-xs-12">
          <div className="profile-items clearfix mb-3">
            <div className="profile-preword">
              <span>Salut</span>
            </div>
          </div>
          <div className="profile-title">
            <span>Benarfa</span>
            Tarek
          </div>
          <hr></hr>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>Expérience</b>
            </div>
            <div> Plus de 5 ans</div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>AGE</b>
            </div>
            <div>31 ans</div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>ADRESSE</b>
            </div>
            <div>15 rue el bekri beb khadra tunis</div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>TELEPHONE</b>
            </div>
            <div>
              <a
                href="tel:50269194"
                type="button"
                className=" btn-lg vibrate-1"
              >
                (+216) 50 269 194
              </a>
            </div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>EMAIL</b>
            </div>
            <div>
              <a
                href="mailto:tarekbenarfa53[@]gmail.com"
                type="button"
                className=" btn-lg vibrate-1"
              >
                tarekbenarfa53@gmail.com
              </a>
            </div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>DIPLOME</b>
            </div>
            <div>Licence Appliquée en Développement Système d’information</div>
          </div>
        </div>
        <div className="profile-social">
          <span>
            <a
              href="https://www.facebook.com/TAREK.BENARFA/"
              title="facebook"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/benarfa-tarek-104964112/"
              title="linkedin"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
          <span>
            <a href="tel:50269194" title="whatsapp" target="_self">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
      <div className=" autre">
        <div className="titles profession ">
          <h2>Compétences professionnelles</h2>
        </div>
        <div className="competence">
          <div className="row">
            {showInGroups &&
              Competence.map((com) => (
                <div className="col-md-4" key={com.name}>
                  <div className="prgrs">
                    <div className="container">
                      <h3>{com.name}</h3>
                      <div
                        className="prgrsbar progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={com.num}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar"
                          style={{ width: `${com.num}%` }}
                        >
                          <span>{com.num}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container  ">
          <div className="titles profession  ">
            <h2>Nos Réalisations</h2>
          </div>
          <SlideshowLightbox
            className="grid grid-cols-2 profession md:grid-cols-4 gap-4"
            showThumbnails={true}
          >
            <img
              className="w-full rounded"
              src="/assets/athbbord.png"
              alt="athbbord"
            />
            <img
              className="w-full rounded"
              src="/assets/bboard.png"
              alt="bboard"
            />
            <img
              className="w-full rounded"
              src="/assets/authwalopst.png"
              alt="authwalopst"
            />
            <img
              className="w-full rounded"
              src="/assets/wallpost.png"
              alt="wallpost"
            />
            <img
              className="w-full rounded"
              src="/assets/yellow.png"
              alt="yellow"
            />
            <img
              className="w-full rounded"
              src="/assets/siteyellow.png"
              alt="siteyellow"
            />
          </SlideshowLightbox>
        </div>
        <div className="container">
          <div className="profession">
            <Profession />
          </div>
        </div>
        <div className="container">
          <div className="profession ">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
