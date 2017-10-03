import React, { Component } from 'react';

import img_left from './assets/image/img_left.png'
import img_right from './assets/image/img_right.png'

import './fifth.css';

import Sixth_page from '../sixth/sixth';
import Start_page from '../start/start';
import Mytopprogressbar from '../mytoppb/mytoppb';

function bmi_explain(f){
  if(f < 18.5)
    return "Onder-gewicht";
  else if(f>=18.5 & f<=24.9)
    return "Normaal";
  else if(f>=25 & f<=29.9)
    return "licht Overgewicht";
  else if(f>=30 & f<=39.9)
    return "Zwaarlijvigheid (obesitas)";
  else if(f>=40)
    return "Ernstige zwaarlijvigheid";
}

class Fifth_page extends Component {
  constructor(props){
    super(props);
    this.state={
        button_flag: 0,
        gender: this.props.gender,
        age: this.props.age,
        weight: this.props.weight,
        height: this.props.height/100.0,
        value_bmi: Number(( (this.props.weight*10000.0)/(this.props.height*this.props.height) ).toFixed(2)),
    }
    
    
  }  
  render() { 
   
    if(this.state.button_flag === 0){
      return (
        
              <div className = "App">
                <div className = "App-fifth-header">


                  <div className = "fifth-content-container m-b-50 m-t-50">
                    <div className = "row m-t-50"> 
                      <div className = "row m-l-50 m-r-50"><p className = "font-third-title">Je BMI berekening resultaat</p></div>
                      <div className = "row m-l-20 m-r-20"><p className = "center-font-third-second max-width-525">We hebben al je parameters bekeken en opgenomen in onze berekening.
                                                Je BMI IS <span className = "font-add"> {this.state.value_bmi}</span>. Dit wil zeggen dat je …</p></div>
                    </div>

                    <div className = "row">
                      <p className = "center-font-third-second max-width-525">
                        <span className = "font-add">
                          {bmi_explain(this.state.value_bmi)}
                        </span>
                      </p>
                    </div>

                    <div className = "row m-t-40 custom-short-padding">
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

                    <div className = "row m-t-50 cutsom-left-flex ">
                      <div className = "column1 col-sm-4 ">
                        <img className = "img-fifth-one" src={img_left}/>
                      </div>
                      <div className = "col-sm-8 m-t-20 custom-m-l-20">
                        <p className = "title-one p-l-50">WAAROM IS MIJN BMI BELANGRIJK?</p>
                        <p className = "title-two p-l-50">e BMI is belangrijk, omdat het aangeeft in hoeverre er sprake is van een
                                                          gezond gewicht. Aan de hand van de formule voor je BMI kun je
                                                          berekenen of er sprake is van ondergewicht, een gezond gewicht of
                                                          overgewicht. Is je BMI te laag of te hoog? Dan is het verstandig om actie
                                                          te ondernemen.</p>
                      </div>
                    </div>
                    <div className = "row m-t-20 cutsom-right-flex">

                      <div className = "col-sm-8 m-t-40">
                        <p className = "title-one ">ANDERE CALCULATORS</p>
                        <p className = "title-two ">We bieden nog een reeks van andere calculators aan om je 
                          lichaam nog beter in kaart te brengen. Klik op deze link om terug naar de home pagete gaan.</p>
                      </div>
                      <div className = "column1 col-sm-4 ">
                        <img className = "img-fifth-two " src={img_right}/>
                      </div>
                    </div>
         
                  </div>
                </div>
              </div>
        
            );      
    }
    else if(this.state.button_flag === 1){
        return (
          <div> <Sixth_page gender = {this.state.gender} age={this.state.age} value_bmi={this.state.value_bmi} /> </div>
        );
    }
    else if(this.state.button_flag == 2){
        return (
          <div> <Start_page /> </div>
        );
    }

  }
}

export default Fifth_page;
