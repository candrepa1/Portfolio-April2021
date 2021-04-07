import styled from "styled-components";

export const Overlay = styled.span`
	background: rgba(29, 45, 80, 0.3);
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	display: none;
	align-items: center;
	justify-content: center;
	color: white;
	text-align: center;
`;

export const CardContainer = styled.div`
	/* box-shadow: 10px 10px #2a2a2a; */
	display: flex;
	flex-direction: column;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: transform;
	transition-property: transform;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
	&:hover,
	&:focus,
	&:active {
		-webkit-transform: translateY(-8px);
		transform: translateY(-8px);
	}
	&:hover ${Overlay} {
		display: flex;
	}
`;

export const CodeBar = styled.div`
	display: flex;
	align-items: center;
	background-color: #dddddd;
	padding-left: 10px;
	justify-content: space-between;
`;

export const CodeBarCircle = styled.div`
	border-radius: 50%;
	width: 12px;
	height: 12px;
	margin-right: 5px;
`;

export const Title = styled.h3`
	color: #8a8a8a;
	margin: 0;
	font-size: 15px;
	text-align: center;
	margin-right: 45%;
`;

export const CodeBarCircleContainer = styled.div`
	display: flex;
`;

export const Img = styled.img`
	/* height: 80%; */
	width: 100%;
	position: relative;
`;

export const Description = styled.p`
	margin: 0;
	padding: 10px;
	text-align: center;
`;

export const Button = styled.a`
	padding: 10px 15px;
	margin: 5px;
	text-align: center;
	border: 0;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
	background: black;
	color: white;
	text-decoration: none;
	&:hover {
		background: #202020;
	}
`;

export const Extra = styled.p`
	text-align: center;
	margin: 0;
	padding-bottom: 10px;
`;

export const TextContainer = styled.div`
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
