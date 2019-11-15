import React from 'react'

import gun from '../imgs/gun.png'
import name from '../imgs/name.png'

class Scene1 extends React.Component {
  render () {
    const { scene, changeScene } = this.props

    return (
      <div className='scene-1'>
        <img src={gun} alt='gun' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='lesson' onClick={() => changeScene(scene + 1)}>บทเรียน</button>
        <button className='start' onClick={() => changeScene(3)}>START GAME</button>
      </div>
    )
  }
}

export default Scene1
