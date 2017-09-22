import React, { Component } from 'react';
import './mytoppb.css';

import 'bootstrap/dist/css/bootstrap.css';


import Progress from 'react-progressbar';

class Mytopprogressbar extends Component {

  constructor (props){
    super(props);
    this.state = {
      myValue: this.props.value
    }
  }

  renderAll(){
    const ret=[];

    ret.push(<div className = "custom-col"><div className = "first-step" /></div>);

    for(var i=1;i < this.state.myValue;i++)  {
      ret.push(<div className = "custom-col"><div className = "left-step" /></div>);
    }
    for(var i=this.state.myValue ;i<5;i++)  {
      ret.push(<div className = "custom-col"><div className = "right-step"  /></div>);
    }
    ret.push(<div className = "custom-col"><div className = "last-step"  /></div>);

    return ret;
  }


  render() {
    
    return (
      <div>
          <div className = "row">
            <p className = "font-top">Je bent in 1 stap van 6</p>
          </div>
          <div className = "row">
            {this.renderAll()} 
          </div>
      </div>

    );
  }
}

export default Mytopprogressbar;

