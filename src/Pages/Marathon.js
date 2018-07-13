import React from 'react'

import Nav from '../Component/Nav'
import PeopleItem from '../Component/PeopleItem'
import Stopwatch from '../Component/Stopwatch'

import './Marathon.css'

class Marathon extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      totalRunner: 0,
      checked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    }
    this.addRunner = this.addRunner.bind(this)
    this.minusRunner = this.minusRunner.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  addRunner(){
      this.setState({ totalRunner: this.state.totalRunner + 1 })
  }
  minusRunner(){
    if (this.state.totalRunner === 0)
      this.setState({ totalRunner: 0 })
    else
      this.setState({ totalRunner: this.state.totalRunner - 1 })  
  }
  handleInputChange(event) {
    let target = event.target
    let index = Number(target.name)
    let copy = this.state.checked.slice()
    copy[index] = target.checked
    this.setState({ checked: copy })

    // 改變總人數
    target.checked === true ? this.addRunner() : this.minusRunner()
  }

  render(){
    return(
      <div>
        <Nav />
        <div className="runner-select">
          <div>
            <div className="custom-head">選擇背號</div>
            <div className="custom-head">所有跑者</div>
          </div>
          <div className="row">
            <div className="left-block">
              <div className="row">
                <div className="spacing" />
                <input className="custom-box" type="checkbox" name="0" checked={this.state.checked[0]} onChange={this.handleInputChange} />
                <label className="custom-label">1</label>
                <input className="custom-box" type="checkbox" name="1" checked={this.state.checked[1]} onChange={this.handleInputChange} />
                <label className="custom-label">2</label>
                <input className="custom-box" type="checkbox" name="2" checked={this.state.checked[2]} onChange={this.handleInputChange} />
                <label className="custom-label">3</label>
                <input className="custom-box" type="checkbox" name="3" checked={this.state.checked[3]} onChange={this.handleInputChange} />
                <label className="custom-label">4</label>
                <input className="custom-box" type="checkbox" name="4" checked={this.state.checked[4]} onChange={this.handleInputChange} />
                <label className="custom-label">5</label>
              </div>
              <div className="row">
                <div className="spacing" />
                <input className="custom-box" type="checkbox" name="5" checked={this.state.checked[5]} onChange={this.handleInputChange} />
                <label className="custom-label">6</label>
                <input className="custom-box" type="checkbox" name="6" checked={this.state.checked[6]} onChange={this.handleInputChange} />
                <label className="custom-label">7</label>
                <input className="custom-box" type="checkbox" name="7" checked={this.state.checked[7]} onChange={this.handleInputChange} />
                <label className="custom-label">8</label>
                <input className="custom-box" type="checkbox" name="8" checked={this.state.checked[8]} onChange={this.handleInputChange} />
                <label className="custom-label">9</label>
                <input className="custom-box" type="checkbox" name="9" checked={this.state.checked[9]} onChange={this.handleInputChange} />
                <label className="custom-label">10</label>
              </div>
              <div className="row">
                <div className="spacing" />
                <input className="custom-box" type="checkbox" name="10" checked={this.state.checked[10]} onChange={this.handleInputChange} />
                <label className="custom-label">11</label>
                <input className="custom-box" type="checkbox" name="11" checked={this.state.checked[11]} onChange={this.handleInputChange} />
                <label className="custom-label">12</label>
                <input className="custom-box" type="checkbox" name="12" checked={this.state.checked[12]} onChange={this.handleInputChange} />
                <label className="custom-label">13</label>
                <input className="custom-box" type="checkbox" name="13" checked={this.state.checked[13]} onChange={this.handleInputChange} />
                <label className="custom-label">14</label>
                <input className="custom-box" type="checkbox" name="14" checked={this.state.checked[14]} onChange={this.handleInputChange} />
                <label className="custom-label">15</label>
              </div>
            </div>
            <div className="right-block">
              {this.state.checked.map((person, index) => 
                person === true ? <PeopleItem key={index} number={index+1} /> : null 
              )}
            </div>

          </div>
        </div>
        
        <br />

        <div className="custom-head">總人數</div>
        <div className="custom-number">{ this.state.totalRunner }</div>

        <br />

        <Stopwatch />
      </div>
    )
  } 

}

export default Marathon