const PlayerCard = ({player}) => {
	return (
		<>
			<section id="cardTable">
				<div className="playerCard">
					<h4>{player.name}</h4>
					<p>{player.breed}</p>
					<img className="pupImage" src={player.imageUrl} alt="Picture of Player" />
				</div>
			</section>		
		</>
	)
}

export default PlayerCard