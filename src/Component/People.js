import React from 'react'

import PeopleItem from './PeopleItem'

class People extends React.Component {
	render(){
		var PeopleList = new Array(this.props.numPeople).fill(0);
		// for (var i = 0; i < this.props.numPeople; i++) {
		//     PeopleList.push(<PeopleItem />);
		// }

		return(
			<div>
				{PeopleList.map((people, key) =>
					<PeopleItem index={key} />
				)}
			</div>
		)
	}
} 

export default People