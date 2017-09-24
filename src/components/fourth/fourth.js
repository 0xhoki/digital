import React, { Component } from 'react';


import avatar_w from './assets/image/avatar_w.png'
import avatar_m from './assets/image/avatar_m.png'

import 'bootstrap/dist/css/bootstrap.css';

import './fourth.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Fifth_page from '../fifth/fifth';

class Fourth_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag4:0
    }
  }  
  render() {

    return (
      (this.state.flag4==0)?(

      <div className = "App">
        <div className = "App-header">

          <div className = "row p-l-100 p-r-100" >
            <div > <Mytopprogressbar value = "4"/> </div>
          </div>

          <div className = "row m-t-80 m-b-50">
              <div className = "first-content-container">
                <div className = "row">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je lengte</p>
                  <p className = "font-content-text m-t-30 m-l-50 m-r-50">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>
                <div className = "row m-t-100">
                  <div > <Mysliderbar /> </div>
                </div>

                <div className = "row m-t-100">
                  <button className = "first-button-custom" onClick={ ()=>{this.setState({flag4:1})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>
        </div>

    ):(<div> <Fifth_page/> </div>));
  }
}
export default Fourth_page;
