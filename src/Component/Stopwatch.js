import React from 'react'
import { Button } from 'react-bootstrap'
import './Stopwatch.css'

function formattedTime(time){
	let min = Math.floor(time / 6000)
	let sec = ('0' + Math.floor(time / 100)).slice(-2)
	if(time / 100 >= 60)
		sec = ('0' + Math.floor(time / 100 % 60)).slice(-2)
	let millisec = ('0' + time % 100).slice(-2)
	time = min + ':' + sec + "′′" + millisec
	return time;
}

class Stopwatch extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			timeElapsed: 0,
			records: [],
		}
		this.intervalId = null
		this.handleStartClick = this.handleStartClick.bind(this)
		this.handleResetClick = this.handleResetClick.bind(this)
		this.handlePauseClick = this.handlePauseClick.bind(this)
		this.handleRecordsClick = this.handleRecordsClick.bind(this)
	}

	handleStartClick(){
		clearInterval(this.intervalId)
		this.intervalId = setInterval( () => {
			this.setState({ timeElapsed: this.state.timeElapsed + 1 }) 
		} , 10)
	}

	handleResetClick(){
		clearInterval(this.intervalId)
		this.setState({	
			timeElapsed: 0,
			records: [],
		})
	}

	handlePauseClick(){
		clearInterval(this.intervalId)
	}

	handleRecordsClick(){
		this.setState({ records: this.state.records.concat([this.state.timeElapsed]) })
	}

	render(){
		return(
			<div className="stopwatch">
				<div className="stopwatch-timer">
					{ formattedTime(this.state.timeElapsed) }
				</div>
				<Button bsClass="start-btn" bsSize='large' onClick={this.handleStartClick}> Start </Button>
				<Button bsClass="reset-btn" bsSize='large' onClick={this.handleResetClick}> Reset </Button>
				<Button bsClass="pause-btn" bsSize='large' onClick={this.handlePauseClick}> Pause </Button>
				<Button bsClass="record-btn" bsSize='large' onClick={this.handleRecordsClick}> Record </Button>
				
				<ul className="stopwatch-record">
		        	{ this.state.records.map((record, index) =>
		            	<li className="stopwatch-record"><strong>{index + 1}</strong>/ {formattedTime(record)}</li>)
		        	}
        		</ul>
			</div>
		)
	}
}

export default Stopwatch