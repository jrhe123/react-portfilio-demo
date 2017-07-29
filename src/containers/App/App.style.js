import styled from 'styled-components';


// colors
import {blue} from 'theme/variables';


export const Background = styled.div`
	
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url(${require('assets/react-logo.png')});
	background-color: #F9F9F9;
	background-size: 60%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.2;
	z-index: -99;
`;