import React, { Component } from 'react';
// import './myslider.css';
// import { ProgressBar } from 'react-bootstrap';


import 'rc-slider/assets/index.css';

// import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';


function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);



class Mysliderbar extends Component {

  render() {
    
    return (
      <div>
        <div className = "custom-slider">
          <Slider
          defaultValue={50}
          maximumTrackStyle={{ backgroundColor: '#F2F4F7', height: 10 }}
          minimumTrackStyle={{ 
            backgroundColor: '#74EBD5', height: 10 
            }}
          handleStyle={{
            borderColor: '#5C6373',
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -9,
            backgroundColor: '#5C6373',
          }}
        />

        </div>
      </div>
    );
  }
}

export default Mysliderbar;
