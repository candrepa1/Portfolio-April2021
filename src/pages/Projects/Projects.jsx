import React from "react";
import Grid from "../../components/grid/Grid";
import { MainGridContainer } from "../../styles/General.styled";
import { Title } from "./Projects.styled";

const Projects = () => {
	return (
		<MainGridContainer>
			<Title>My Work</Title>
			<Grid />
		</MainGridContainer>
	);
};

export default Projects;
