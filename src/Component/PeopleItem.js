import React from 'react'
import { Col, Button, FormControl, SplitButton, MenuItem } from 'react-bootstrap'

import './PeopleItem.css'

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
		if(this.state.counter == 0)
			this.setState( { counter: 0 } )
		else
			this.setState( { counter: this.state.counter - 1 } )
	}	

	render(){
		return(
			<div>
				{((this.state.counter) == 1) ?	
					<div className="last-run"> Need Run: {this.state.counter} </div> 
					: (this.state.counter == 0) ?
						<div className="finish-run">
							Finish
							{ () => this.props.onChangeRanking(this.props.key) }
						</div>
					: <div> Need Run: {this.state.counter} </div> 
				}
					<Button bsStyle="success" onClick={ this.incrementCount } > ＋ </Button>
					<Button bsStyle="danger" onClick={ this.decrementCount } > － </Button>
			</div>
		)
	}
}

export default PeopleItem