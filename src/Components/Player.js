import React from 'react';
import Card from 'react-bootstrap/Card';

function Player() {
	return (
		<Card stype={{ width: '500px' }}>
			<Card.Body>
				<Card.Img variant='top' src='data:image/jpeg;base64,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' />
				<Card.Text>
					LeBron James
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Player;