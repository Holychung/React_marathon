import React from 'react'
import { Col, Button, FormControl, SplitButton, MenuItem } from 'react-bootstrap'

class PeopleItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			counter: 13,
		}
		this.incrementCount = this.incrementCount.bind(this)
		this.decrementCount = this.decrementCount.bind(this)
	}

	incrementCount(){
		this.setState( { counter: this.state.counter + 1 } )
	}

	decrementCount(){
		this.setState( { counter: this.state.counter - 1 } )
	}	

	render(){
		return(
			<div>
				<div>{this.props.index+1}</div>
				<div> Need Run: {this.state.counter} 
					<Button bsStyle="success" onClick={ this.incrementCount } > ＋ </Button>
					<Button bsStyle="danger" onClick={ this.decrementCount } > － </Button>
				</div>
			</div>
		)
	}
}

export default PeopleItem