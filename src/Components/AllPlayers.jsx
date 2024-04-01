import {useEffect, useState} from 'react'
import PlayerCard from './PlayerCard'

const COHORT_NAME = '2402-FTB-ET-WEB-FT'
const BASE_API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}'

const AllPlayers = () => {
	const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
		const fetchAllPlayers = async () => {
		// fetch all available players on API 
			try{
			const response = await fetch(`${BASE_API_URL}/players`);
			console.log(response)
			const json = await response.json();
			console.log(json)
			setPlayerList(json.data.players);
			} catch (error) {
				console.log(`ERROR : `,error)
			}
		};

		fetchAllPlayers()
	}, [])


	return (
		<> 
			<h2>ALL PLAYERS COMPONENT</h2>
			{playerList.length ? (
				playerList.map((player) => {
					return <PlayerCard key={player.id} player={player} />
				})
			) : (
				<p>No players yet!</p>
			)}
		</>
	)
}

export default AllPlayers