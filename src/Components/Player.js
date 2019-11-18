import React, { useEffect, useState } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
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
					console.log(data.data);
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
					<img src={player.image} alt='Player' />
				</Col>
				<Col>
					<ListGroup>
						<ListGroup.Item>{player.full_name}</ListGroup.Item>
						<ListGroup.Item>{player.dob}</ListGroup.Item>
						<ListGroup.Item>{player.nickname}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<PlayerTable
							props={props}
					/>
				</Col>
			</Row>
		</Container>
	);

}

export default Player;