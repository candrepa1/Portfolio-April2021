import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Container = styled.div`
	@media only screen and ${breakpoints.xs} {
		overflow: hidden;
		height: 100vh;
		background: #151819;
		color: white;
		display: flex;
		align-items: center;
		font-family: "Poppins", sans-serif;
		box-sizing: border-box;
	}
`;

export const MainGridContainer = styled.div`
	@media only screen and ${breakpoints.xs} {
		background: #151819;
		color: white;
		font-family: "Poppins", sans-serif;
		padding: 25px;
	}

	@media only screen and ${breakpoints.sm} {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 15% 85%;
		height: 100vh;
		background: #151819;
		color: white;
		font-family: "Poppins", sans-serif;
	}
`;
