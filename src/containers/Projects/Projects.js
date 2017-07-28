import React, { Component, PropTypes } from 'react';


// library
import Zoomy from 'react-zoomy';


// Styled component
import {
	ImageButton,
	Index
}from './Projects.style';

import {
	Container,
	Relative,
	Flex,
	ParallaxContainer
} from 'theme/Container';
import {A} from 'theme/types';



// Parallex effect
import ParallaxImage from 'react-image-parallax2';




export default class Projects extends Component {

  render() {
    return (
      <Container>

      	<Relative marginBottom="80px">
	      	<Index>
	      		<h1>EX.1</h1>
	      	</Index>
      	</Relative>

      	<h2>ReactJs App Demo <A href="">Roy Test</A></h2>
	    

	    <h2>Zoomy Effect</h2>  
		<Flex justify={'center'} marginBottom="300px">
	      <Zoomy
	      imageUrl={require('assets/1.jpg')}
	      renderThumbnail={({ showImage }) => 
	      	<ImageButton onClick={showImage}>
	      		<img src={require('assets/1_thumbnail.jpg')}/>
	      	</ImageButton>
	      }
	      scale={[1.1, 1.1]}
	      imageProps={{
	      	style: {
	      		width: '100vw',
	      		height: 'auto'
	      	}
	      }}
	      />
	     </Flex> 


			<h2>Parallax Effect</h2>
				<ParallaxImage 
				reduceHeight={2/3}
				src={require('assets/1_thumbnail.jpg')} />
			
			<br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </Container>
    );
  }

}