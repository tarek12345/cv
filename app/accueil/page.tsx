import React from "react";
import "./page.css";
export default function pageHome() {
  return (
    <div className="homepage">
      <div className="description__profil">
      <div className=" row">
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
              <b>AGE</b>
            </div>
            <div>31 ans</div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>ADRESSE</b>
            </div>
            <div>15 rue  el bekri beb khadra tunis</div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>TELEPHONE</b>
            </div>
            <div><a href="tel:50269194" type="button" className=" btn-lg vibrate-1">(+216) 50 269 194</a></div>
          </div>
          <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>EMAIL</b>
            </div>
            <div><a href="mailto:tarekbenarfa53[@]gmail.com" type="button" className=" btn-lg vibrate-1">tarekbenarfa53@gmail.com</a></div>
          </div> 
           <div className="d-flex justify-star align-items-center info">
            <div className="me-2">
              <b>DIPLOME</b>
            </div>
            <div>Licence Appliquée en Développement Système d’information</div>
          </div>
       
        </div>
        <div className="profile-social">
              <span><a  href='https://www.facebook.com/TAREK.BENARFA/' title="facebook" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></span>
              <span><a  href='https://www.linkedin.com/in/benarfa-tarek-104964112/' title="linkedin" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></span>
              <span><a  href="tel:50269194" title="whatsapp" target="_self"><i className="fa-brands fa-whatsapp"></i></a></span>
           
          </div>
      </div>
      </div>
    </div>
  );
}
