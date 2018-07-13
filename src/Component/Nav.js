import React from 'react'
import './Nav.css'

class Nav extends React.Component{
  render(){
    return(
      <div>
        <div className="nav-custom justify-content-center d-flex align-items-center">
          <a className="nav-text">交大運動會五千公尺馬拉松</a>
        </div>
      </div>
    )
  }
}

export default Nav