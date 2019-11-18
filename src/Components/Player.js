import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PlayerTable from './StatsTable';
import axios from 'axios';
import { useParams } from 'react-router';

function Player(props) {
	const [player, setPlayer] = useState(
		{
			image: undefined
		}
	);

	const { first, last } = useParams();

	useEffect(() => {
		if (props.location.player) {
			setPlayer(props.location.player)
		} else {
			axios.get(`http://localhost:10010/v0/player?player_name=${first}+${last}`)
				.then((data) => {
					setPlayer(data.data);
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<img src={player.image} />
				</Col>
			</Row>
			<Row>
				<PlayerTable
					props={props}
				/>
			</Row>
		</Container>
	);

}

export default Player;