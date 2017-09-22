import React, { Component } from 'react';


import avatar_w from './assets/image/avatar_w.png'
import avatar_m from './assets/image/avatar_m.png'

import 'bootstrap/dist/css/bootstrap.css';

import './common.css';
import './first.css';

import Second_page from '../second/second';
import Mytopprogressbar from '../mytoppb/mytoppb';


class First_page extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag1:1
    }
  }

  render() {
    return(
    (this.state.flag1 == 1) ? (      <div className = "App">
    <div className = "App-header">
      <div className = "container">

      <div className = "row p-l-100 p-r-100" >
        <div > <Mytopprogressbar value = "1"/> </div>
      </div>

      <div className = "row m-t-80">
          <div className = "content-container">
            <div className = "row">
              <p className = "font-content-title">BMI berekenen begint bij je geslacht</p>
              <p className = "font-content-text m-t-30">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                  de berekening of parameters, enkel in het lezen en interpreteren van
                                                  de resulaten.</p>
            </div>
            <div className = "row m-t-50">
              <div className = "col-md-5">
                <div className = "row"> <img className = "avatar-image" alt="Smiley face" src={avatar_w} /> </div>
                <div className = "row m-t-30"> <p className = "font-content-text">Ik ben een vrouw die nieuwsgierig is�naar de berekening en resultaat van haar BMI</p> </div>
              </div>

              <div className = "col-md-2">
                <hr />
              </div>

              <div className = "col-md-5">
                <div className = "row"> <img className = "avatar-image" alt="Smiley face" src={avatar_m} /> </div>
                <div className = "row m-t-30"> <p className = "font-content-text">Ik ben een man die nieuwsgierig is naar de berekening en resultaat van zijn BMI</p> </div>
              </div>                  
            </div>

            <div className = "row m-t-100">
              <button className = "button-custom" onClick = { ()=>{this.setState( {flag1:2} )} } >Volgende stap</button> 

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>): (<div><Second_page /></div>));

  }
}
export default First_page;
