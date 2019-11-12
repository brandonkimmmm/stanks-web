import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import PlayerCard from './'

function getPlayers() {
	axios.
}

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

	useEffect(() => {
		console.log(players);
	}, [players]);

	return (
		<Container>
			<Col>
				<Row>
					<h1>hello</h1>
				</Row>
			</Col>
		</Container>
	)
}

export default PlayerList;