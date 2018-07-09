import React from 'react'
import { Button } from 'react-bootstrap'

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
    this.setState({ counter: this.state.counter + 1 })
  }
  decrementCount(){
    if(this.state.counter === 0)
      this.setState({ counter: 0 })
    else
      this.setState({ counter: this.state.counter - 1 })
  } 
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-2">{ this.props.number }</h1>
          <Button bsStyle="success" onClick={ this.incrementCount } > ＋ </Button>
          {((this.state.counter) === 1) ?  
            <div className="last-run"> Run: { this.state.counter } </div> 
            : (this.state.counter === 0) ?
              <div className="finish-run">
                Finish
                { () => this.props.onChangeRanking(this.props.key) }
              </div>
            : <div className="col-1"> Run: { this.state.counter } </div> 
          }
          <Button bsStyle="danger" onClick={ this.decrementCount } > － </Button>
        </div>
      </div>
    )
  }
}

export default PeopleItem