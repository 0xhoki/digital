import React, { Component } from 'react';
import './myslider.css';

import { ProgressBar } from 'react-bootstrap';

class Mysliderbar extends Component {

  render() {
    
    return (
      <div className = "custom-center-pb">
         <ProgressBar className="custom-center-pb" active now={25}/>
      </div>



    );
  }
}

export default Mysliderbar;
