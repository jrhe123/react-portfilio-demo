import styled from 'styled-components';


// colors
import {blue} from 'theme/variables';


export const Background = styled.div`
	
	position: fixed;
	left: 5vw;
	top: 5vh;
	width: 90vw;
	height: 90vh;
	background-image: url(${require('assets/react-logo.png')});
	background-color: ${blue};
	background-size: 60%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.2;
	z-index: -99;
`;