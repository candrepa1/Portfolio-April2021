import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Title = styled.h1`
	@media only screen and ${breakpoints.xs} {
		text-align: center;
		margin-top: 0;
	}
	@media only screen and ${breakpoints.sm} {
		margin: auto 0;
	}
`;
