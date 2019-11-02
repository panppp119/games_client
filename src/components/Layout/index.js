import React from 'react'

import NavBar from 'components/NavBar'
import './Layout.css'

class Layout extends React.Component {
  render () {
    return (
      <div className='layout'>
        <NavBar />

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
