import React from 'react'

import NavBar from 'components/NavBar'
import './Layout.css'

class Layout extends React.Component {
  render () {
    const { initialState } = this.props

    return (
      <div className='layout'>
        <NavBar initialState={initialState} />

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
