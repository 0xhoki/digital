import React, { Component } from 'react';
// import './myslider.css';
// import { ProgressBar } from 'react-bootstrap';


import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
// import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';


function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v,f) {

  if(f==2)
    return `${v} jaar`;
  else if(f==3)
    return `${v} kg`;
  else if(f==4)
    return `${v} cm`;
}
function set_min(f){
  if(f==2)
    return 0;
  else if(f==3)
    return 20;
  else if(f==4)
    return 120;
}
function set_max(f){
  if(f==2)
    return 50;
  else if(f==3)
    return 150;
  else if(f==4)
    return 250;
}
function set_def(f){
  if(f==2)
    return 25;
  else if(f==3)
    return 85;
  else if(f==4)
    return 185;
}
const Handle = Slider.Handle;
const SliderWithTooltip = createSliderWithTooltip(Slider);
const Range = createSliderWithTooltip(Slider.Range);

class Mysliderbar extends Component {
  constructor (props){
    super(props);
    this.state = {
      myValue: this.props.value_input
    }
  }

  render() {

    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          className = "tooltip-custom"
          prefixCls="rc-slider-tooltip"
          overlay={percentFormatter(value, this.state.myValue) }
          visible={dragging}
          placement="top"
          key={index}
        >
        <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };

    return (

      <div>
        <div className = "custom-slider">

          <Slider 
            min={ set_min(this.state.myValue) }
            max={ set_max(this.state.myValue) } 
            defaultValue={  set_def(this.state.myValue) } 
            handle={handle} 

            maximumTrackStyle={{ backgroundColor: '#F2F4F7', height: 18 }}
            minimumTrackStyle={{ backgroundColor: '#76D8E2', height: 18 }}
            handleStyle = {{
              borderColor: '#5C6373',
              height: 36,
              width: 36,
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
