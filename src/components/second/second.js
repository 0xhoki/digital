import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './common.css';
import './second.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Third_page from '../third/third';

class Second_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag2:1
    }
  }
  render() {

    return (
      (this.state.flag2==1)?(
      <div className = "App">
        <div className = "App-header">
          <div className = "container">

            <div className = "row p-l-100 p-r-100" >
              <div > <Mytopprogressbar value = "2"/> </div>
            </div>

            <div className = "row m-t-80">
              <div className = "content-container">
                <div className = "row">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je leeftijd</p>
                  <p className = "font-content-text m-t-30">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>
                <div className = "row m-t-100">
                  <div > <Mysliderbar /> </div>
                </div>

                <div className = "row m-t-100">
                  <button className = "button-custom" onClick={ ()=>{this.setState({flag2:2})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


  ):(<div> <Third_page/> </div>));
  }
}
export default Second_page;
