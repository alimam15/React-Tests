import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {zombies} from '../zombies';


class App extends Component {
	constructor(){
		super()
		this.state = {
			zombies: zombies,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
		
		
		//console.log(filterZombies);
	}

	render() {
			const filteredZombies = this.state.zombies.filter(zombie => {
				return zombie.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return(
			<div className='tc'>
				<h1>Zombies are funny</h1>
				<SearchBox searchChange={this.onSearchChange} />
				  <Scroll>
				  	<CardList zombies={filteredZombies} />
				  </Scroll>
			</div>
			);
	}
}

export default App;