import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import {
	TopBackground,
	Main,
	Name,
	Description,
	ButtonsContainer,
	Button,
	ConnectContainer,
	A,
} from "./Landing.styled";
import { Container } from "../../styles/General.styled";

const Landing = () => {
	return (
		<Container>
			<Particles
				params={{
					particles: {
						number: {
							value: 160,
							density: {
								enable: false,
							},
						},
						size: {
							value: 3,
							random: true,
							anim: {
								speed: 4,
								size_min: 0.3,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							random: true,
							speed: 1,
							direction: "top",
							out_mode: "out",
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "bubble",
							},
							onclick: {
								enable: true,
								mode: "repulse",
							},
						},
						modes: {
							bubble: {
								distance: 250,
								duration: 2,
								size: 0,
								opacity: 0,
							},
							repulse: {
								distance: 400,
								duration: 4,
							},
						},
					},
				}}
				height="99vh"
				width="100vw"
			/>
			<TopBackground>
				<Main>
					<Name>Hey there! My name is Camila,</Name>
					<Description>
						I am a Frontend Developer based in Colombia 🇨🇴 <br />
						Currently building websites with React, <br />
						as well as learning Backend Development with Node.js.
						<br /> <br />
						Let's connect:
					</Description>
					<ConnectContainer>
						<A
							href="https://github.com/candrepa1"
							target="_blank"
							rel="noreferrer"
						>
							<i
								className="fab fa-github fa-2x"
								style={{ marginRight: 15, color: "white" }}
							></i>
						</A>
						<A
							href="https://www.linkedin.com/in/candrepa1/"
							target="_blank"
							rel="noreferrer"
						>
							<i
								className="fab fa-linkedin-in fa-2x"
								style={{ marginRight: 15, color: "white" }}
							></i>
						</A>
						<A href="mailto:candrepa1@gmail.com">
							<i
								className="far fa-envelope fa-2x"
								style={{ color: "white" }}
							></i>
						</A>
					</ConnectContainer>
					<ButtonsContainer>
						<Link to="/projects" style={{ textDecoration: "none" }}>
							<Button>PROJECTS</Button>
						</Link>
						<a
							href="https://drive.google.com/file/d/1p2jlFyl-3Rl3TU1sCgumTQ918e-fiqy0/view?usp=sharing"
							style={{ textDecoration: "none" }}
							rel="noopener noreferrer nofollow"
							target="_blank"
						>
							<Button>CV</Button>
						</a>
					</ButtonsContainer>
				</Main>
			</TopBackground>
		</Container>
	);
};

export default Landing;
