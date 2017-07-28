import React, { Component, PropTypes } from 'react';

// Video player
import ReactPlayer from 'react-player';


// styled-component
import {Container} from 'theme/Container';
import {H2} from 'theme/types';
import {Title} from './About.style';


export default class About extends Component {

  render() {
    return (
      <Container>
      	<Title>Hello World</Title>
      	<H2 align="center">Angular video</H2>
      	<ReactPlayer 
			controls
      		url={require('assets/demo.mp4')} />
      </Container>
    );
  }

}