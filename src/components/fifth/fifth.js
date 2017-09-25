import React, { Component } from 'react';

import img_left from './assets/image/img_left.png'
import img_right from './assets/image/img_right.png'


import './fifth.css';

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
    
    if(this.state.button_flag === 0){
      return (
        
              <div className = "App">
                <div className = "App-fifth-header">
                  <div className = "first-content-container m-b-50">
                    <div className = "row"> 
                      <div className = "row m-l-50 m-r-50"><p className = "font-third-title">Je BMI berekening resultaat</p></div>
                      <div className = "row m-l-20 m-r-20"><p className = "center-font-third-second max-width-525">We hebben al je parameters bekeken en opgenomen in onze berekening.
                                                Je BMI IS X. Dit wil zeggen dat je …</p></div>
                    </div>
                    <div className = "row m-t-100 p-l-40 p-r-40">
                        <div className = "column col-sm-6" >
                          <button onClick = 
                          { ()=>{
                            if(this.state.button_flag !== 1)
                              this.setState({button_flag:1}
                            )}
                          }
                          className = "button-custom-active">Onderneem Actie</button> 
                        </div>

                        <div className = "column col-sm-6" >
                          <button onClick = {()=>{
                            if(this.state.button_flag !==2)
                              this.setState({button_flag:2}                        
                            )}} className = "button-custom-deactive">Opnieuw Berekenen</button> 
                        </div> 
                    </div>

                    <div className = "row m-t-100 cutsom-left-flex ">
                      <div className = "column1 col-sm-4 ">
                        <img className = "img-fifth-one" src={img_left}/>
                      </div>
                      <div className = "col-sm-8 m-t-20 ">
                        <p className = "title-one p-l-50">WAAROM IS MIJN BMI BELANGRIJK?</p>
                        <p className = "title-two p-l-50">e BMI is belangrijk, omdat het aangeeft in hoeverre er sprake is van een
                                                          gezond gewicht. Aan de hand van de formule voor je BMI kun je
                                                          berekenen of er sprake is van ondergewicht, een gezond gewicht of
                                                          overgewicht. Is je BMI te laag of te hoog? Dan is het verstandig om actie
                                                          te ondernemen.</p>
                      </div>
                    </div>
                    <div className = "row m-t-70 cutsom-right-flex ">

                      <div className = "col-sm-8 m-t-40">
                        <p className = "title-one ">ANDERE CALCULATORS</p>
                        <p className = "title-two ">We bieden nog een reeks van andere calculators aan om je 
                          lichaam nog beter in kaart te brengen. Klik op deze link om terug naar de home pagete gaan.</p>
                      </div>
                      <div className = "column1 col-sm-4 ">
                        <img className = "img-fifth-two" src={img_right}/>
                      </div>
                    </div>
         
                  </div>
                </div>
              </div>
        
            );      
    }
    else if(this.state.button_flag === 1){
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
