import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayerCard({ player }) {
	return (
		<Card>
			<Card.Img variant='top' src={player.image} />
			<Card.Body>
				<Card.Text>
					{player.full_name}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default PlayerCard;