import React from 'react'

import PeopleItem from './PeopleItem'

class People extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			ranking: [1,2],
		}
		this.handleRanking = this.handleRanking.bind(this)
	}
	handleRanking(num){
		this.setState({ ranking: this.state.ranking.concat( [num] ) })
	}

	render(){
		var PeopleList = new Array(this.props.numPeople).fill(0);
		// for (var i = 0; i < this.props.numPeople; i++) {
		//     PeopleList.push(<PeopleItem />);
		// }

		return(
			<div>
				{PeopleList.map((unused, key) =>
					<PeopleItem key={key} onChangeRanking={this.handleRanking} />
				)}
				{this.state.ranking.map((people, i) =>
					<div>{people}</div>
				)}
			</div>
		)
	}
} 

export default People