import React from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import PlayerList from './PlayerList';

function Landing() {
	return (
		<Container>
			<Row>
				<Col>
					<Jumbotron>
						<h1>Stanks</h1>
						<p>
							Welcome to Stanks! We have all the unnecessary stats that you never asked for!
						</p>
					</Jumbotron>
				</Col>
			</Row>
			<Row>
				<Col>
					<PlayerList />
				</Col>
			</Row>
		</Container>
	)
}

export default Landing;