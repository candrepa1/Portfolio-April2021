import React from "react";
import {
	CardContainer,
	CodeBar,
	CodeBarCircle,
	CodeBarCircleContainer,
	Title,
	Img,
	Description,
	Overlay,
	Button,
	Extra,
	TextContainer,
} from "./Card.styled";

const Card = ({ title, img, description, repo, live, extra, bg }) => {
	return (
		<CardContainer>
			<CodeBar>
				<CodeBarCircleContainer>
					<CodeBarCircle style={{ backgroundColor: "#ff5f57" }}></CodeBarCircle>
					<CodeBarCircle style={{ backgroundColor: "#ffbd2e" }}></CodeBarCircle>
					<CodeBarCircle style={{ backgroundColor: "#28ca41" }}></CodeBarCircle>
				</CodeBarCircleContainer>
				<Title>{title}</Title>
			</CodeBar>
			<Img src={img} alt={title} />
			<Overlay>
				<Button href={repo} rel="noopener noreferrer nofollow" target="_blank">
					CODE
				</Button>
				<Button href={live} rel="noopener noreferrer nofollow" target="_blank">
					LIVE
				</Button>
			</Overlay>
			<TextContainer style={{ backgroundColor: bg }}>
				<Description>{description}</Description>
				<Extra>{extra}</Extra>
			</TextContainer>
		</CardContainer>
	);
};

export default Card;
