import styled from 'styled-components';

// color
import {black} from 'theme/variables';


export const ImageButton = styled.div`

	cursor: pointer;
	overflow: hidden;
	display: inline-block;
	& > img {
		transition: transform .3s;
	}
	&:hover{
		& > img {
			transform: scale(1.3);
		}
	}
`;

export const Index = styled.div`

	position: absolute;
	left: 0;
	bottom: -50px;
	z-index: -1;
	h1{
		font-size: 50px;
		margin: 0;
		font-weight: bold;
		color: ${black};
		opacity: 0.4;
		transform: translateY(20%);
	}
`;


export const ParallaxContainer = styled.div`
	width: 400px;
`;