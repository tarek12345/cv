"use client"
import React from 'react'
import  './page.css'
function ContactPage() {
  return (
    <div className='container p-4' id="contact"> 
      <h2> Contactez nous</h2>  
     <div className='row'>
     <div className='col-md-4 col-12'>
     <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.285959702383!2d10.172632876404977!3d36.811666967052105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3479454786e5%3A0x5e99492a47addb93!2sRue%20El%20Bekri%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1703521305258!5m2!1sfr!2stn"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
     </div> 
     <div className='col-md-8 col-12'>
     <div className=" row description__profil ">
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
     </div> 
     </div>
</div>
  )
}

export default ContactPage