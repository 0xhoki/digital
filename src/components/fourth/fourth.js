import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Fifth_page from '../fifth/fifth';

class Fourth_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag4:1,
      gender: this.props.gender,
      age: this.props.age,
      weight: this.props.weight,
      height: 185
    }
    this.setHeightHandle = this.setHeight.bind(this);
  }  
  setHeight(hhh){
    this.setState({height:hhh});
  }
  render() {

    return (
      (this.state.flag4===1)?(

      <div className = "App">
        <div className = "App-first-header">
          <div className = "row custom-progress" >
            <div > <Mytopprogressbar value = "4"/> </div>
          </div>

          <div className = "row m-t-80 m-b-50">
              <div className = "first-content-container">
                <div className = "row m-t-50">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je lengte</p>
                  <p className = "font-content-text m-t-50 max-width-525">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>
                <div className = "row m-t-100 m-b-100">
                  <div className = "m-t-100  m-l-50 m-r-50" > <Mysliderbar slider_value={this.setHeightHandle} value_input = "4"/> </div>
                </div>

                <div className = "row m-b-50">
                  <button className = "first-button-custom" onClick={ ()=>{this.setState({flag4:2})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>
        </div>

    ):(<div> <Fifth_page gender={this.state.gender} age={this.state.age} weight={this.state.weight} height={this.state.height} /> </div>));
  }
}
export default Fourth_page;
