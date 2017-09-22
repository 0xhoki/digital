import React, { Component } from 'react';
import logo from './logo.svg';





import Start_page from './components/start/start';
// import First_page from './components/first/first';
// import Second_page from './components/second/second';
// import Third_page from './components/third/third';
// import Fourth_page from './components/fourth/fourth';
// import Fifth_page from './components/fifth/fifth';
// import Sixth_page from './components/sixth/sixth';



import Second_page from './components/second/second';


class App extends Component {
  render() {
    
    return (
      <div>
           <div> <Start_page /> </div>
           {/* <div> <First_page /> </div> */}
           {/* <div> <Second_page /> </div> */}
           {/* <div> <Third_page /> </div> */}
           {/* <div> <Fourth_page /> </div> */}
           {/* <div> <Fifth_page /> </div> */}
           {/* <div> <Sixth_page /> </div> */}
      </div>



    );
  }
}

export default App;
