import React from 'react'

import PeopleItem from '../Component/PeopleItem'
import Stopwatch from '../Component/Stopwatch'

class Marathon extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numPeople: 5,
      checked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    }
    this.addPerson = this.addPerson.bind(this)
    this.minusPerson = this.minusPerson.bind(this)
    this.handlePeopleChange = this.handlePeopleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  addPerson(){
      this.setState({ numPeople: this.state.numPeople + 1 })
  }
  minusPerson(){
    if (this.state.numPeople === 0)
      this.setState({ numPeople: 0 })
    else
      this.setState({ numPeople: this.state.numPeople - 1 })  
  }
  handlePeopleChange(num){
    this.setState({ numPeople: num })
  }
  handleInputChange(event) {
    let target = event.target
    let index = Number(target.name)
    let copy = this.state.checked.slice()
    copy[index] = target.checked
    this.setState({ checked: copy })
  }

  render(){
    return(
      <div className="container-fluid">
        <h1>交大運動會5000M</h1>
        <h2>選擇背號</h2>
        <div className="row">
          <div className="col-1" />
          <input type="checkbox" name="0" checked={this.state.checked[0]} onChange={this.handleInputChange} />
          <label className="col-2">1</label>
          <input type="checkbox" name="1" checked={this.state.checked[1]} onChange={this.handleInputChange} />
          <label className="col-2">2</label>
          <input type="checkbox" name="2" checked={this.state.checked[2]} onChange={this.handleInputChange} />
          <label className="col-2">3</label>
          <input type="checkbox" name="3" checked={this.state.checked[3]} onChange={this.handleInputChange} />
          <label className="col-2">4</label>
          <input type="checkbox" name="4" checked={this.state.checked[4]} onChange={this.handleInputChange} />
          <label className="col-2">5</label>
        </div>
        <div className="row">
          <div className="col-1" />
          <input type="checkbox" name="5" checked={this.state.checked[5]} onChange={this.handleInputChange} />
          <label className="col-2">6</label>
          <input type="checkbox" name="6" checked={this.state.checked[6]} onChange={this.handleInputChange} />
          <label className="col-2">7</label>
          <input type="checkbox" name="7" checked={this.state.checked[7]} onChange={this.handleInputChange} />
          <label className="col-2">8</label>
          <input type="checkbox" name="8" checked={this.state.checked[8]} onChange={this.handleInputChange} />
          <label className="col-2">9</label>
          <input type="checkbox" name="9" checked={this.state.checked[9]} onChange={this.handleInputChange} />
          <label className="col-2">10</label>
        </div>
        <div className="row">
          <div className="col-1" />
          <input type="checkbox" name="10" checked={this.state.checked[10]} onChange={this.handleInputChange} />
          <label className="col-2">11</label>
          <input type="checkbox" name="11" checked={this.state.checked[11]} onChange={this.handleInputChange} />
          <label className="col-2">12</label>
          <input type="checkbox" name="12" checked={this.state.checked[12]} onChange={this.handleInputChange} />
          <label className="col-2">13</label>
          <input type="checkbox" name="13" checked={this.state.checked[13]} onChange={this.handleInputChange} />
          <label className="col-2">14</label>
          <input type="checkbox" name="14" checked={this.state.checked[14]} onChange={this.handleInputChange} />
          <label className="col-2">15</label>
        </div>
        
        <br />

        {this.state.checked.map((person, index) => 
          person === true ? <PeopleItem key={index} number={index+1} /> : null 
        )}

        <br />

        <Stopwatch />
      </div>
    )
  } 

}

export default Marathon