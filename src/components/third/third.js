import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Fourth_page from '../fourth/fourth';

class Third_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag3:1
    }
  }
  render() {

    return (
      (this.state.flag3==1)?(

      <div className = "App">
        <div className = "App-fifth-header">

          <div className = "row p-l-100 p-r-100" >
            <div > <Mytopprogressbar value = "3"/> </div>
          </div>

          <div className = "row m-t-80 m-b-50">
              <div className = "App-second-header">
                <div className = "row">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je gewicht</p>
                  <p className = "font-content-text m-t-50 max-width-525">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>
                <div className = "row m-t-100">
                  <div className = "m-t-100  m-l-50 m-r-50" > <Mysliderbar value_input = "3"/> </div>
                </div>

                <div className = "row m-t-100">
                  <button className = "first-button-custom" onClick={ ()=>{this.setState({flag3:2})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>
        </div>



    ):(<div> <Fourth_page/> </div>));
  }
}
export default Third_page;
