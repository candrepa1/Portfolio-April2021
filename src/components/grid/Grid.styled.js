import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const GridContainer = styled.div`
	@media only screen and ${breakpoints.sm} {
		display: grid;
		grid-template-rows: auto auto auto;
		grid-template-columns: 1fr;
		gap: 30px;
		overflow-y: auto;
		padding: 30px;
		padding-bottom: 0;
		&:after {
			grid-column: span 1;
			height: 7px;
			content: "";
		}
	}
	@media only screen and ${breakpoints.lg} {
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
		&:after {
			grid-column: span 2;
			height: 7px;
			content: "";
		}
	}
`;
