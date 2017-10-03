import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import image_third_first from './assets/image/img-third-first.png'
import image_third_second from './assets/image/img-third-second.png'
import image_third_third from './assets/image/img-third-third.png'

import image_heart from './assets/image/heart.png'
import image_footer_first from './assets/image/footer-first.png'
import image_footer_second from './assets/image/footer-second.png'
import image_footer_third from './assets/image/footer-third.png'
import image_footer_fourth from './assets/image/footer-fourth.png'
import image_footer_fifth from './assets/image/footer-fifth.png'

import './start.css';
import First_page from '../first/first';

class Start_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:1
    }
  }
  render() {

    return (
    (this.state.flag==1)?(
    
      <div>
        <div className = "App-first-header-one">
          <span>
            <nav class="navbar navbar-default navbar-transparent">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a href="#" class="navbar-right"><img className = "heart_custom"  src={image_heart}/></a>
                  <a className = "font-top-left" href="#">bmi.vlaanderen</a>
                  </div>
              </div>
            </nav>
  
          </span>
          <div>
            <div className = "m-t-100">
              <div className = "row">
                <p className = "title-second margin-auto">BMI berekenen voor vrouwen, mannen en kinderen.</p>
              </div>
              <div className = "row">
                <button className = "button-custom-active" onClick={ ()=>{this.setState({flag:2})}}>Start je berekening</button>
              </div>
            </div>

            <div className = "start-content-container m-t-100 m-b-50">
                <div className = "row m-t-50 cutsom-right-flex">

                  <div className = "column col-sm-8 m-t-15">
                    <p className = "title-one">WAT IS BMI EN HOE MOET JE DE RESULATEN LEZEN?</p>
                    <p className = "m-t-30 title-two">De BMI of Body Mass Index is een  eenvoudige manier om te berekenen 
                                                        of je gewicht gezond is in verhouding met je lengte, leeftijd en geslacht.
                                                        Via deze site kan je eenvoudig berekenen of je wel gezond bezig bent.</p>
                  </div>
                  <div className = "column col-sm-4">
                    <img className = "img-first" src={image_third_first}/> 
                  </div>
                </div>
                <div className = "row m-t-50 cutsom-left-flex">

                <div className = "column col-sm-4">
                    <img className = "img-second" src={image_third_second}/> 
                  </div>
                  <div className = "col-sm-8 m-t-30 p-l-50">
                    <p className = "title-one">HOE BEREKENEN WE JE BMI EN OP BASIS VAN WAT?</p>
                    <p className = "m-t-30 title-two">De Quetelet-index of BMI-index geeft het gewicht in verhouding tot de
                                                      lengte van een persoon weer in één cijfer. Voor volwassenen duidt een
                                                      cijfer minder dan 18,5 op ondergewicht en meer dan 25 is er overgewicht
                                                      en vanaf 30 zwaar overgewicht of obesitas. De berekeningsmethode
                                                      verschilt licht voor mannen en vrouwen en kinderen. De BMI doet wel
                                                      geen uitspraken over de hoeveelheid vet in het lichaam.</p>
                  </div>
                </div>
                <div className = "row m-t-50 cutsom-right-flex">

                  <div className = "col-sm-8  m-t-30">
                    <p className = "title-one">HOE ACTIE ONDERNEMEN BIJ EEN TE HOOG BMI?</p>
                    <p className = "m-t-30 title-two">Deze website berekent je BMI gratis en snel als je volgende gegevens
                                                      invult: lengte, gewicht, leeftijd en geslacht. Wanneer je Body Mass Index
                                                      te hoog of te laag blijkt te zijn, is het verstandig een arts te raadplegen.
                                                      Op eigen houtje beginnen diëten is ongezond en zelfs gevaarlijk.</p>
                  </div>                    
                  <div className = "column col-sm-4">
                    <img className = "img-second" src={image_third_third} alt="Smiley face" /> 
                  </div>
                </div>
            </div>

        </div>
        </div>
      </div>

    ):(<div> <First_page/> </div>));
  }
}

export default Start_page;
