import React, { Component, PropTypes } from 'react';


// styled-component
import {NavigationContainer, NavItem} from './NavigationBar.style';


export default class NavigationBar extends Component {

  render() {
    return (
      <NavigationContainer>
      	<NavItem to="/">Home</NavItem>
      	<NavItem to="/projects">Effects</NavItem>
      	<NavItem to="/about">About</NavItem>
      </NavigationContainer>
    );
  }

}