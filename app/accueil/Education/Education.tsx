import React from "react";
import "./Education.css"
export default function Education() {
  return (

    <div className="expirence  profession ">
      <div className="titles profession ">
        <h2>Éducation</h2>
      </div>
     <div className="row ">
     <div className="col-md-6 first">
      <div className="content__expirence">
      <div className="arrow"></div>
        <b className=" block">2016 – 2013</b>
        <u  className=" block">Etudiant</u>
        <img  className="logoSociate" src="/assets/digitalcommunication.png" alt=" Digital communication" />
        <span className=" block">
          {" "}
         Licence Appliquée en Développement systéme d'information
        </span>
   
      </div>

    
      </div>
        <div className="col-md-6 secand">
      <div className="content__expirence">
      <div className="arrow"></div>
        <b className=" block">01/2018– 03/2018</b>
        <u  className=" block">DÉVELOPPEUR WEB</u>
        <img  className="logoSociate" src="/assets/digitalcommunication.png" alt=" Digital communication 3" />
        <span className=" block">
          {" "}
         Formation certifiée angular  6 
       
        </span>
   
      </div>

      
      </div>

    
    </div>
    </div>
  );
}
