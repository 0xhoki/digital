import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Fourth_page from '../fourth/fourth';

class Third_page extends Component {
  constructor(props){
    super(props);

    this.state={
      flag3:1,
      gender: this.props.gender,  
      age: this.props.age,
      weight: 85
    }
    this.setWeightHandle = this.setWeight.bind(this);
  }
  setWeight(www){
    this.setState({weight:www});
  }
  render() {

    return (
      (this.state.flag3==1)?(

      <div className = "App">
        <div className = "App-first-header">

          <div className = "row custom-progress" >
            <div > <Mytopprogressbar value = "3"/> </div>
          </div>

          <div className = "row m-t-50 m-b-50">
              <div className = "first-content-container">
                <div className = "row m-t-50">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je gewicht</p>
                  <p className = "font-content-text m-t-50 max-width-525">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>
                <div className = "row m-t-20 m-b-70">
                  <div className = "m-t-100" > <Mysliderbar slider_value={this.setWeightHandle} value_input = "3"/> </div>
                </div>

                <div className = "row m-b-50">
                  <button className = "button-custom-active" onClick={ ()=>{this.setState({flag3:2})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>
        </div>
    ):(<div> <Fourth_page gender={this.state.gender} age={this.state.age} weight={this.state.weight} /> </div>));
  }
}
export default Third_page;
