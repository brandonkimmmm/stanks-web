import React, { useState, useEffect, Fragment } from 'react';
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
			<Fragment>
				<Row>
					{
						players.data.map((player, i) => (
							<Col key={i} lg={4}>
								<PlayerCard key={i} player={player} />
							</Col>
						))
					}
				</Row>
			</Fragment>
		)
	} else {
		return null;
	}
}

export default PlayerList;