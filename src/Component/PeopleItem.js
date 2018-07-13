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
          <h1 className="flag col-2">{ this.props.number }</h1>

          {(this.state.counter === 0) ?
            <button type="button" className="btn btn-danger" disabled> - </button>
            : <button type="button" className="btn btn-danger" onClick={ this.decrementCount } > － </button>
          }
          {((this.state.counter) === 1) ?  
            <div className="last-run col-5 custom-text"> CountDown: { this.state.counter } </div> 
            : (this.state.counter === 0) ?
              <div className="finish-run col-5 custom-text">
                Finish
              </div>
            : <div className="col-5 custom-text"> CountDown: { this.state.counter } </div> 
          }
          {(this.state.counter === 0) ?
            <button type="button" className="btn btn-success" disabled > ＋ </button>
            : <button type="button" className="btn btn-success" onClick={ this.incrementCount } > ＋ </button>
          }
        </div>
        <hr />
      </div>
    )
  }
}

export default PeopleItem