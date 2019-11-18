import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlayerCard({ player }) {
	return (
		<Card>
			<Card.Img variant='top' src={player.image} />
			<Card.Body>
				<Card.Title>{player.full_name}</Card.Title>
				<Card.Text>
					{player.dob}
				</Card.Text>
				<Button
					variant="primary"
					as={Link}
					to={{
						pathname: `/player/${player.first_name}/${player.last_name}`,
						player
					}}
				>
						See Birthday Stats
				</Button>
			</Card.Body>
		</Card>
	)
}

export default PlayerCard;