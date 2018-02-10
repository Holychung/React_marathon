import React from 'react'
import { Button } from 'react-bootstrap'

import Menu from '../Component/Menu'
import People from '../Component/People'
import PeopleItem from '../Component/PeopleItem'
import Stopwatch from '../Component/Stopwatch'

class Marathon extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			numPeople: 5,
		}
		this.addPerson = this.addPerson.bind(this)
		this.minusPerson = this.minusPerson.bind(this)
		this.handlePeopleChange = this.handlePeopleChange.bind(this)
	}
	addPerson(){
			this.setState( { numPeople: this.state.numPeople + 1 } )	
	}
	minusPerson(){
		if (this.state.numPeople == 0)
			this.setState( { numPeople: 0} )
		else
			this.setState( { numPeople: this.state.numPeople - 1 } )	
	}
	handlePeopleChange(num){
		this.setState( { numPeople: num } )
	}

	render(){
		return(
			<div>
				<h1>5000m</h1>
				<Menu onChangePeople={ this.handlePeopleChange }/>
				{/*
				<Button bsSize='large' onClick={ this.addPerson }> Add </Button>
				<Button bsSize='large' onClick={ this.minusPerson }> Minus </Button>
				*/}
				<People numPeople={this.state.numPeople} />
				<Stopwatch />
			</div>
		)
	}	

}

export default Marathon