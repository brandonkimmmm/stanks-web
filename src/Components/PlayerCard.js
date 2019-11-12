import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayerCard({ player }) {
	return (
		<Card>
			<Card.Body>
				<Card.Text>
					{player.full_name}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default PlayerCard;