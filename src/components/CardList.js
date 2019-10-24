import React from 'react';
import Card from './Card';

//import zombies from './zombies';

const CardList = ({zombies}) => {

		
		return(
			<div>
			{zombies.map((user,i)=>{
			return (
				<Card  
					key={i}
					id={zombies[i].id} 
					name={zombies[i].name}
					image={zombies[i].image}
					email={zombies[i].email} 
					/>
					);
												})}
			</div>

		);

}

export default CardList;