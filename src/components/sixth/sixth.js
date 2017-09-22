import React, { Component } from 'react';



import img_left from './assets/image/img_left.png'
import img_right from './assets/image/img_right.png'


import './sixth.css';
import './common.css';



class Sixth_page extends Component {
  render() {
    
    return (

      <div className = "App">
        <div className = "App-header">
          <div className = "content-container">
            <div className = "row">
              <div className = "row"><p className = "font-third-title">Je BMI berekening resultaat</p></div>
              <div className = "row"><p className = "font-third-second">We hebben al je parameters bekeken en opgenomen in onze berekening.
                                        Je BMI IS X. Dit wil zeggen dat je …</p></div>
              <div className = "row m-t-50">
                <div className = "column col-sm-6">
                  <button className = "button-custom">Start is breaking</button> 
                </div>
                <div className = "column col-sm-6">
                  <button className = "button-custom">Start is breaking</button> 
                </div>
              </div>
            </div>
            <div className = "row">
              <div className = "column col-sm-4">
                <img src={img_left}/> 
              </div>
              <div className = "column col-sm-8">

              </div>
            </div>
            <div className = "row">
              <div className = "column col-sm-4">

              </div>
              <div className = "column col-sm-8">

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Sixth_page;
