import React from 'react'

import s1_1 from '../imgs/s1-1.png'
import s1_2 from '../imgs/s1-2.png'
import s1_3 from '../imgs/s1-3.png'

class Scene1 extends React.Component {
  render () {
    const { scene, changeScene } = this.props

    return (
      <div className='scene-1'>
        <img src={s1_3} alt='fire' className='fire' />
        <img src={s1_1} alt='char' className='char' />
        <img src={s1_2} alt='name' className='name' />

        <button className='lesson' onClick={() => changeScene(scene + 1)}>บทเรียน</button>
        <button className='start' onClick={() => changeScene(3)}>START GAME</button>
      </div>
    )
  }
}

export default Scene1
