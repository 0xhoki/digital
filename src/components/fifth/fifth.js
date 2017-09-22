import React, { Component } from 'react';

import img_left from './assets/image/img_left.png'
import img_right from './assets/image/img_right.png'


import './fifth.css';
import './common.css';

import Sixth_page from '../sixth/sixth';
import Second_page from '../second/second';

class Fifth_page extends Component {
  constructor(props){
    super(props);
    this.state={
        button_flag: 0
    }
  }  
  render() {
    
    if(this.state.button_flag == 0){
      return (
        
              <div className = "App">
                <div className = "App-fifth-header">
                  <div className = "fifth-content-container m-b-50">
                    <div className = "row">
                      <div className = "row m-l-50 m-r-50"><p className = "font-third-title">Je BMI berekening resultaat</p></div>
                      <div className = "row m-l-40 m-r-40"><p className = "font-third-second">We hebben al je parameters bekeken en opgenomen in onze berekening.
                                                Je BMI IS X. Dit wil zeggen dat je …</p></div>
                      <div className = "row m-t-50 m-r-50 m-l-50">
                        <div className = "column col-sm-6 m-b-10">
                          <button onClick = 
                          { ()=>{
                            if(this.state.button_flag != 1)
                              this.setState({button_flag:1}
                            )}
                          }
                          className = "button-custom-active">Onderneem Actie</button> 
                        </div>
                        <div className = "column col-sm-6">
                          <button onClick = {()=>{
                            if(this.state.button_flag !=2)
                              this.setState({button_flag:2}                        
                            )}} className = "button-custom-deactive">Opnieuw Berekenen</button> 
                        </div>

                      </div>
                    </div>
                    <div className = "row m-t-70 m-r-15 m-l-15">
                      <div className = "column col-sm-7">
                        <img className = "img-fifth" src={img_left}/> 
                      </div>
                      <div className = "column col-sm-5">
                        <div className = "row"><p className = "font-third-one">WAAROM IS MIJN BMI BELANGRIJK?</p></div>
                        <div className = "row"><p className = "font-third-second">Je BMI is belangrijk, omdat het aangeeft in hoeverre er sprake is van een
                                                                                gezond gewicht. Aan de hand van de formule voor je BMI kun je
                                                                                berekenen of er sprake is van ondergewicht, een gezond gewicht of
                                                                                overgewicht. Is je BMI te laag of te hoog? Dan is het verstandig om actie
                                                                                te ondernemen.</p></div>
                      </div>
                    </div>
                    <div className = "row m-t-70 m-r-15 m-l-15 ">
                      <div className = "column col-sm-5">
                        <img className = "img-fifth" src={img_right}/> 
                      </div>
                      <div className = "column col-sm-7 ">
                        <div className = "row m-t-50"><p className = "font-third-one">ANDERE CALCULATORS</p></div>
                        <div className = "row"><p className = "font-third-second">We bieden nog een reeks van andere calculators aan om je lichaam nog
                                                                                  beter in kaart te brengen. Klik op deze link om terug naar de home pagete gaan.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
            );      
    }
    else if(this.state.button_flag == 1){
        return (
          <div> <Sixth_page /> </div>
        );
    }
    else if(this.state.button_flag == 2){
        return (
          <div> <Second_page /> </div>
        );
    }

  }
}

export default Fifth_page;
