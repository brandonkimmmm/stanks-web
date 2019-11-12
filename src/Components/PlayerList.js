import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import PlayerCard from './PlayerCard';

function PlayerList() {
	const [players, setPlayers] = useState();

	useEffect(() => {
		axios.get('http://localhost:10010/v0/players')
			.then((data) => {
				setPlayers(data);
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	if (players) {
		return (
			<Container>
				{/* <Col>
					<Row>
						<h1>hello</h1>
					</Row>
				</Col> */}
				{
					players.data.map((player, i) => (
						<PlayerCard key={i} player={player} />
					))
				}
			</Container>
		)
	} else {
		return null;
	}
}

export default PlayerList;