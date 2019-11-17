import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Player({ props }) {
	const [stats, setStats] = useState();

	const { first, last } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:10010/v0/player/birthday/stats?player_name=${first}+${last}`)
			.then((data) => {
				console.log(data.data);
				setStats(data.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	if (stats) {
		return (
			<Table>
				<thead>
					<tr>
						<th>G</th>
						<th>MP</th>
						<th>FG</th>
						<th>FGA</th>
						<th>FG%</th>
						<th>3P</th>
						<th>3PA</th>
						<th>3P%</th>
						<th>FT</th>
						<th>FTA</th>
						<th>FT%</th>
						<th>OREB</th>
						<th>REB</th>
						<th>AST</th>
						<th>STL</th>
						<th>BLK</th>
						<th>TO</th>
						<th>PTS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{stats.gp}</td>
						<td>{stats.min}</td>
						<td>{stats.fgm}</td>
						<td>{stats.fga}</td>
						<td>{stats.fgPct}</td>
						<td>{stats.fg3m}</td>
						<td>{stats.fg3a}</td>
						<td>{stats.fg3Pct}</td>
						<td>{stats.ftm}</td>
						<td>{stats.fta}</td>
						<td>{stats.ftPct}</td>
						<td>{stats.oReb}</td>
						<td>{stats.reb}</td>
						<td>{stats.ast}</td>
						<td>{stats.stl}</td>
						<td>{stats.blk}</td>
						<td>{stats.to}</td>
						<td>{stats.pts}</td>
					</tr>
				</tbody>
			</Table>
		);
	} else {
		return null;
	}
}

export default Player;