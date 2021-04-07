import React from "react";
import Card from "../card/Card";
import styled from "styled-components";
import Poke from "../../img/poke.png";
import Chat from "../../img/chat.png";
import Trivia from "../../img/trivia.png";

const GridContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr 1fr;
	gap: 50px;
	overflow-y: auto;
	padding: 50px;
	&:after {
		grid-column: span 2;
		height: 10px;
		content: "";
	}
`;

const Grid = () => {
	return (
		<GridContainer>
			<Card
				title="POKEDEX"
				img={Poke}
				description="A SPA made with ReactJS, using ContextAPI for global state
				management. Used Tailwind CSS for styling and responsiveness. Look up
				Pokemons and learn more about them!"
				repo="https://github.com/candrepa1/Pokedex-React"
				live="https://camilaspokedex.netlify.app/#/"
				bg="#2C5F2D"
			/>
			<Card
				title="LIVE CHAT"
				img={Chat}
				description="Made with Socket.io, React, Redux and Redux-Thunk. Log in or sign up and chat in real time with other people in the same room 💬 In case you want to login directly: "
				extra="Email: user@user.com - Password: random123"
				repo="https://github.com/candrepa1/chatDraft"
				live="https://chat-socketio-devsquad.netlify.app"
				bg="#B1624EFF"
			/>
			<Card
				title="TRIVIA APP"
				img={Trivia}
				description="Consumed a trivia API and implemented Object-Oriented Programming principles 🎲 Pick the category, number of questions, and level of difficulty and answer away! Made using Vanilla JavaScript and styled with Bootstrap."
				// bg="#A07855FF"
				bg="#5B84B1FF"
				live="https://camilas-oop-api.netlify.app"
				repo="https://github.com/candrepa1/Trivia-API-OOP"
			/>
		</GridContainer>
	);
};

export default Grid;
