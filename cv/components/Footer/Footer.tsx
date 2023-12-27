"use client";
import React from "react";
import "./Footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactForm from "../ContactForm/ContactForm";
export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="pg-footer">
      <footer className="footer">
 
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <div className="logocv">
                <img src="/assets/logo.png" alt="logo" />
              </div>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Développeur front end</h2>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Liens</h2>
              <div className="footer-menu" >     <Link href="/" legacyBehavior>
                <a className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                  Accueil
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </div>
            </div>
         
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Contactez nous</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a href="tel:50269194" rel="noopener noreferrer" title="50 269 194">
                  (+216) 50 269 194
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a  rel="noopener noreferrer" href="mailto:tarekbenarfa53@gmail.com" title="Mail">
                    Adresse mail
                  </a>
                </li>
          
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">  Envoyer  un mail </h2>
              <ContactForm />
            </div>
         
          </div>
          <div className="footer-social-links">
            {" "}
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              ></path>
            </svg>
            <a
              className="footer-social-link linkedin"
              href="https://www.linkedin.com/in/benarfa-tarek-104964112/"
              target="_blank"
            >
              <span className="hidden-link-text">Linkedin</span>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              className="footer-social-link twitter"
              href="https://www.instagram.com/tarekbenarfa/"
              target="_blank"
            >
              <span className="hidden-link-text">Instagram</span>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              className="footer-social-link youtube"
              href="https://www.facebook.com/TAREK.BENARFA/?locale=fr_FR"
              target="_blank"
            >
              <span className="hidden-link-text">Facebook</span>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              className="footer-social-link github"
              href="https://github.com/tarek12345/cv.git"
              target="_blank"
            >
              <span className="hidden-link-text">Github</span>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self">
                {" "}
                ©2024. | Designed By: Ben arfa tarek. | All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
