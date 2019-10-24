import React from 'react';
//import zombie1 from './img/zombie1.jpg';
//import zombie2 from './img/zombie2.jpg';
//import zombie3 from './img/zombie3.jpg';
//import images from './'

const Card = ({id, name, image, email}) =>{
	return(
		<div className = 'tc dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img class='fancyImage' alt='zombie 1' src={require('./img/' + image + '.jpg')} width={200} height={200} />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		</div>
		);
}

export default Card;
