import React, { Component } from 'react';

import avatar_w_1 from './assets/image/avatar_w_1.png'
import avatar_m_1 from './assets/image/avatar_m_1.png'
import avatar_w_2 from './assets/image/avatar_w_2.png'
import avatar_m_2 from './assets/image/avatar_m_2.png'
import img_check from './assets/image/ic_check.png'

import 'bootstrap/dist/css/bootstrap.css';
import './first.css';

import Second_page from '../second/second';
import Mytopprogressbar from '../mytoppb/mytoppb';


class First_page extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag1:1,
      person_change_flag:0
    }
  }

  render() {
    return(
    (this.state.flag1 === 1) ? (      <div className = "App">

    <div className = "App-second-header">
      <div className = "row custom-progress" >
        <div > <Mytopprogressbar value = "1"/> </div>
      </div>

      <div className = "row m-t-80 m-b-50">

          <div className = "first-content-container">
            <div className = "row m-t-70">
              <p className = "font-content-title">BMI berekenen begint bij je geslacht</p>
              <p className = "font-content-text m-t-30 max-width-525">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                  de berekening of parameters, enkel in het lezen en interpreteren van
                                                  de resulaten.</p>
            </div>
            <div className = "row m-t-50">

              <div className = "col-md-5">
                <div className = "row"> 
                  <img className = "avatar-image" 
                onClick = {()=>{
                  if(this.state.person_change_flag !==1)
                    this.setState({person_change_flag:(this.state.person_change_flag+1)%2})}
                  }
                 src={this.state.person_change_flag===0? avatar_w_2:avatar_w_1} /> 
                 <img className = "img-check-custom custom-z-index-right"  src={ this.state.person_change_flag===1 ? img_check: ""} />
                 
                 </div>
                <div className = "row m-t-30"> <p className = "font-content-text">Ik ben een vrouw die nieuwsgierig is naar de berekening en resultaat van haar BMI</p> </div>
              </div>

              <div className = "col-md-2 custom-left">
                <hr className = "custom-hr" />
              </div>

              <div className = "col-md-5">
                <div className = "row"> 
                  <img className = "avatar-image" 
                onClick = { 
                  ()=>{
                    if(this.state.person_change_flag !==0)
                      this.setState( {person_change_flag:(this.state.person_change_flag+1)%2} )
                    } 
                  }
                 src={ this.state.person_change_flag===0 ? avatar_m_1: avatar_m_2} /> 
                    <img className = "img-check-custom custom-z-index-right" src={ this.state.person_change_flag===0 ? img_check: ""} />
                
                </div>
                <div className = "row m-t-30"> <p className = "font-content-text">Ik ben een man die nieuwsgierig is naar de berekening en resultaat van zijn BMI</p> </div>
              </div>                  
            </div>

            <div className = "row m-t-100 m-b-100">
              <button className = "first-button-custom" onClick = { ()=>{this.setState( {flag1:2} )} } >Volgende stap</button> 

            </div>

          </div>
        </div>
      </div>

  </div>): (<div><Second_page /></div>));

  }
}
export default First_page;
