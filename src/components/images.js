const images = [
	'zombie1.jpg',
	'zombie2.jpg',
	'zombie3.jpg',
	'zombie4.png',
	'zombie5.jpg'
];

const getImages = () => images.map(name => `<img src='./img/${name}' alt='${name}' />`);