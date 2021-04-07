import styled from "styled-components";

export const TopBackground = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Name = styled.h1`
	margin: 0;
	font-size: 40px;
`;

export const Description = styled.h3`
	font-size: 23px;
	text-align: center;
	font-weight: 400;
`;

export const ButtonsContainer = styled.div`
	display: flex;
`;

export const Button = styled.button`
	background: #64d8cb;
	padding: 10px 15px;
	margin-right: 10px;
	border: none;
	border-radius: 8px;
	font-size: 18px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	&:hover {
		background: #59bbaf;
	}
`;

export const ConnectContainer = styled.div`
	margin-bottom: 30px;
`;

export const A = styled.a`
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: transform;
	transition-property: transform;
	&:hover,
	&:focus,
	&:active {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
`;
