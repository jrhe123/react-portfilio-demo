import React, { Component } from 'react';


import {hashHistory} from 'react-router';


// Nav component
import NavigationBar from 'components/NavigationBar/NavigationBar';


// styled components
import {
	Background
}from './App.style'


// smooth scroll
import ReallySmoothScroll from 'really-smooth-scroll';



hashHistory.listen(() => {
  window.scrollTo(0,0);
})

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
      		<Background />
      		<NavigationBar />
        	{this.props.children}
      </div>
    );
  }
}

export default App;
