import styled from 'styled-components';


// Router link
import {Link} from 'react-router';

// styled-component
import {Flex, Div} from 'theme/Container';

// colors
import {blue, yellow, red} from 'theme/variables';

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 20px;
	top: 15px;
	z-index:999;
`;

export const NavItem = styled(Link)`
	margin-right: 30px;
	font-size: 20px;
	color: ${yellow};
	position: relative;
	cursor: pointer;
	text-decoration: none;

	&:hover{
		color: ${blue};
		&:after{
			content: ' ';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: ${red};
			z-index: -1;
			transform: scale(1.3, 1.5);
		}
	}
`;