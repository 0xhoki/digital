
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Mytopprogressbar from '../mytoppb/mytoppb';
import Mysliderbar from '../myslider/myslider';

import Third_page from '../third/third';

class Second_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag2:1,
      age:25,
      gender: this.props.gender
    }
    this.setAgeHandle = this.setAge.bind(this);
  }
  setAge(aagg){
    this.setState({age: aagg});
  }

  render() {
    return (
      (this.state.flag2==1)?(
      <div className = "App">
        <div className = "App-first-header">
            <div className = "row custom-progress" >
              <div > <Mytopprogressbar  value = "2"/> </div>
            </div>

            <div className = "row m-t-50 m-b-50">
              <div className = "first-content-container ">
                <div className = "row m-t-50">
                  <p className = "font-content-title">Je BMI berekenen we op basis van je leeftijd</p>
                  <p className = "font-content-text m-t-50 max-width-525">Het berekenen van het BMI van een man of vrouw is niet anderes in
                                                            de berekening of parameters, enkel in het lezen en interpreteren van
                                                            de resulaten.</p>
                </div>


                <div className = "row m-t-20 m-b-70">
                  <div className = "m-t-100" > <Mysliderbar slider_value={this.setAgeHandle} value_input = "2"/> </div>
                </div>

                <div className = "row m-b-50">
                  <button className = "button-custom-active" onClick={ ()=>{this.setState({flag2:2})}}>Volgende stap</button> 
                </div>

              </div>
            </div>
          </div>

      </div>


  ):(<div> <Third_page age={this.state.age} gender={this.state.gender}/> </div>));
  }
}
export default Second_page;
