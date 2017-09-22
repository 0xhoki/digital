import React, { Component } from 'react';
import logo from './logo.svg';
import image_header from './assets/image/bg.png'
import image_third_first from './assets/image/img-third-first.png'
import image_third_second from './assets/image/img-third-second.png'
import image_third_third from './assets/image/img-third-third.png'

import image_footer_first from './assets/image/footer-first.png'
import image_footer_second from './assets/image/footer-second.png'
import image_footer_third from './assets/image/footer-third.png'
import image_footer_fourth from './assets/image/footer-fourth.png'
import image_footer_fifth from './assets/image/footer-fifth.png'

import './App.css';
import './common.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <div className = "App-header">
          <span>
              <nav className="navbar navbar-custom navbar-style">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand  font-top-left" href="#">bmi.vlaanderen</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right ">
                    <li><a className = "font-top-right" href="#">HOME</a></li>
                    <li><a className = "font-top-right" href="#">CALCULATORS</a></li>
                    <li><a className = "font-top-right" href="#">TEAM</a></li>
                    <li><a className = "font-top-right" href="#">OVER ONS</a></li>
                    <li><a className = "font-top-right" href="#">CONTACTEER ONS</a></li>
                  </ul>
                </div>
              </nav>
          </span>


          <div className = "container text-left m-r-0 m-l-0">

            <div className = "p-l-100">
              <div>
                <p className="font-second">BMI berekenen voor vrouwen, mannen en kinderen.</p>
                <button className = "btn-custom m-t-50">Start is breaking</button> 
              </div>
              
                
            </div>

            <div className = "m-t-100">
              <div className = "content-container">
                  <div className = "row row-custom">
                    <div className = "column col-sm-5 row-custom-center">
                      <img clasName = "img-one" src={image_third_first}/> 
                    </div>

                    <div className = "column col-sm-7">
                      <p className = "font-third-one">WAT IS BMI EN HOE MOET JE DE RESULATEN LEZEN?</p>
                      <p className = "font-third-second">De BMI of Body Mass Index is een  eenvoudige manier om te berekenen 
                                                          of je gewicht gezond is in verhouding met je lengte, leeftijd en geslacht.
                                                          Via deze site kan je eenvoudig berekenen of je wel gezond bezig bent.</p>
                    </div>
                  </div>


                  <div className = "row row-custom">

                    <div className = "col-sm-5 row-custom-center">
                      <img className = "img-two" src={image_third_second}/> 
                    </div>

                    <div className = "column col-sm-7">
                      <p className = "font-third-one">HOE BEREKENEN WE JE BMI EN OP BASIS VAN WAT?</p>
                      <p className = "font-third-second">De Quetelet-index of BMI-index geeft het gewicht in verhouding tot de
                                                        lengte van een persoon weer in één cijfer. Voor volwassenen duidt een
                                                        cijfer minder dan 18,5 op ondergewicht en meer dan 25 is er overgewicht
                                                        en vanaf 30 zwaar overgewicht of obesitas. De berekeningsmethode
                                                        verschilt licht voor mannen en vrouwen en kinderen. De BMI doet wel
                                                        geen uitspraken over de hoeveelheid vet in het lichaam.</p>
                    </div>
                  </div>


                  <div className = "row row-custom">
                    <div className = "column col-sm-5 row-custom-center" >
                      <img className = "img-three" src={image_third_third} alt="Smiley face" /> 
                    </div>

                    <div className = "column col-sm-7">
                      <p className = "font-third-one">HOE ACTIE ONDERNEMEN BIJ EEN TE HOOG BMI?</p>
                      <p className = "font-third-second">Deze website berekent je BMI gratis en snel als je volgende gegevens
                                                        invult: lengte, gewicht, leeftijd en geslacht. Wanneer je Body Mass Index
                                                        te hoog of te laag blijkt te zijn, is het verstandig een arts te raadplegen.
                                                        Op eigen houtje beginnen diëten is ongezond en zelfs gevaarlijk.</p>
                    </div>                    
                  </div>
              </div>

            </div>
            
            <div className = "row row-custom-bottom">
              <div className = "column-custom-bottom">
                <img src={image_footer_first}/> 
              
              </div>
              <div className = "column-custom-bottom">
                <img src={image_footer_second}/> 
              
              </div>
              <div className = "column-custom-bottom">
                <img src={image_footer_third}/> 
              
              </div>
              <div className = "column-custom-bottom">
                <img src={image_footer_fourth}/> 
              </div>

              <div className = "column-custom-bottom">
                <img src={image_footer_fifth}/> 
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
