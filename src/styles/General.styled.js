import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	background: #151819;
	color: white;
	display: flex;
	align-items: center;
	font-family: "Poppins", sans-serif;
	box-sizing: border-box;
`;

export const MainGridContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 15% 85%;
	height: 100vh;
	background: #151819;
	color: white;
	font-family: "Poppins", sans-serif;
`;
