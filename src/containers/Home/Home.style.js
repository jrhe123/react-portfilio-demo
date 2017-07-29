import styled, {css} from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const MainImage = styled.div`
	height: 100vh;
  width: 100%;
	background-image: url(${require('../../assets/cinemagraph.gif')});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	text-align: center;
	color: #fff;

	font-size: 36px;

	h1{
		margin-bottom: 0;
    text-shadow: 3px 3px 10px #000;
	}
  h2{
    text-shadow: 3px 3px 10px #000;
  }
`;


export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3498db;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;