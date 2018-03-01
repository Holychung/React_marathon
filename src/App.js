import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Col, Button, FormControl, MenuItem } from 'react-bootstrap'

import Marathon from './Pages/Marathon'

class Home extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<h1>Home Page</h1>
				<h3>
					<Link to={`${process.env.PUBLIC_URL}/marathon`} > Marathon </Link>
				</h3>
			</div>
		)
	}
}

const NotFound = () => <h1>404 ERROR</h1>

const App = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={ Home } />
				<Route ={`${process.env.PUBLIC_URL}/marathon`} component={ Marathon } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	</BrowserRouter>
)

export default App