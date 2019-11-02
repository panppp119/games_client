import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

class NavBar extends React.Component {
  render () {
    return (
      <div className='nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/q10'>Q10</Link></li>
          <li><Link to='/cyber_shoot'>Cyber Shoot</Link></li>
          <li><Link to='/a_day_with_peepo'>A Day with PeePo</Link></li>
          <li><Link to='/cyber_adventure'>Cyber Adventure</Link></li>
          <li><Link to='/provider'>Provider</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
