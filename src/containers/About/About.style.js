import styled from 'styled-components';


import {Relative} from 'theme/Container';


// color
import {red} from 'theme/variables';


import PlayButton from 'components/PlayButton/PlayButton';



export const Title = styled.h1`

	margin-top: 0;
	color: ${red};
`;

export const VideoContainer = styled(Relative)`
	width: 70%;
`;

