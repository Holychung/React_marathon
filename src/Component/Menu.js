import React from 'react'
import { Button, FormControl, ControlLabel, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap'

import './Menu.css'

const SelectNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

class Menu extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dropdownTitle: "人數",
		}
		this.changeTitle = this.changeTitle.bind(this)
	}
	changeTitle(eventKey){
		this.setState( {dropdownTitle: eventKey} )
	}
	render(){
		return(
			<div>
				<div className="question">How many Runner ?
					<DropdownButton 
						id="dropdown-selectnum" 
						title={this.state.dropdownTitle} 
						onSelect={this.props.onChangePeople}> 
						{ SelectNum.map((num, i) => 
							<MenuItem key={i} eventKey={i+1} onSelect={this.changeTitle}> {num} </MenuItem> 
						)}
					</DropdownButton>
				</div>
			</div>
		)
	}
}

export default Menu