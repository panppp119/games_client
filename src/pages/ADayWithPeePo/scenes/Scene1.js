import React from 'react'

import char from '../imgs/char.png'
import name from '../imgs/title.png'

class Scene1 extends React.Component {
  render () {
    const { scene, changeScene } = this.props

    return (
      <div className='scene-1'>
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='lesson' onClick={() => changeScene(scene + 1)}>บทเรียน</button>
        <button className='start' onClick={() => changeScene(3)}>START GAME</button>
      </div>
    )
  }
}

export default Scene1
