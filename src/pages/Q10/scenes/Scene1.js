import React from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'

import slide1 from '../imgs/Slide1.JPG'
import slide2 from '../imgs/Slide2.JPG'
import slide3 from '../imgs/Slide3.JPG'
import slide4 from '../imgs/Slide4.JPG'
import slide5 from '../imgs/Slide5.JPG'
import slide6 from '../imgs/Slide6.JPG'
import slide7 from '../imgs/Slide7.JPG'
import slide8 from '../imgs/Slide8.JPG'
import slide9 from '../imgs/Slide9.JPG'
import slide10 from '../imgs/Slide10.JPG'
import slide11 from '../imgs/Slide11.JPG'
import text1 from '../imgs/N1.png'
import text2 from '../imgs/N2.png'
import text3 from '../imgs/N3.png'
import audio from '../bg-audio.mp3'

class Scene1 extends React.Component {
  state = {
    page: 1,
    sound: 'PLAYING'
  }

  changePage = (page) => {
    this.setState({ page })
  }

  handlePause = (status) => {
    this.setState({ sound: status })
  }

  render () {
    const { scene, changeScene } = this.props
    const { page } = this.state

    const actions = (
      <div className='top-nav'>
        <button onClick={() => this.changePage(1)}>หน้าแรก</button>
        <button onClick={() => this.changePage(2)}>แนะนำการใช้งาน</button>
        <button onClick={() => this.changePage(3)}>จุดประสงค์การเรียนรู้</button>
        <button onClick={() => this.changePage(4)}>เนื้อหาบทเรียน</button>
      </div>
    )

    const page1 = (
      <div className='page-1 page' style={{ backgroundImage: `url(${slide1})`}}>
        <button onClick={() => this.changePage(2)}>START</button>
      </div>
    )

    const page2 = (
      <div className='page-2 page' style={{ backgroundImage: `url(${slide2})`}}>
        {actions}
      </div>
    )

    const page3 = (
      <div className='page-3 page' style={{ backgroundImage: `url(${slide3})`}}>
        {actions}
      </div>
    )

    const page4 = (
      <div className='page-4 page' style={{ backgroundImage: `url(${slide4})`}}>
        <img src={text1} alt='text' className='text1' onClick={() => this.changePage(5)} />
        <img src={text2} alt='text' className='text2' onClick={() => this.changePage(6)} />
        <img src={text3} alt='text' className='text3' onClick={() => this.changePage(10)} />
        {actions}
      </div>
    )

    const page5 = <div className='page-5 page' style={{ backgroundImage: `url(${slide5})`}}/>
    const page6 = <div className='page-6 page' style={{ backgroundImage: `url(${slide6})`}} />
    const page7 = <div className='page-7 page' style={{ backgroundImage: `url(${slide7})`}} />
    const page8 = <div className='page-8 page' style={{ backgroundImage: `url(${slide8})`}} />
    const page9 = <div className='page-9 page' style={{ backgroundImage: `url(${slide9})`}} />
    const page10 = <div className='page-10 page' style={{ backgroundImage: `url(${slide10})`}} />
    const page11 = <div className='page-11 page' style={{ backgroundImage: `url(${slide11})`}} />

    var position = 'bottom-right'
    if (page === 6) {
      position = 'bottom-center'
    }
    else if (page === 7 || page === 9) {
      position = 'bottom-left'
    }

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED
    }

    return (
      <div className='scene-2'>
        {page === 0 && page1}
        {page === 1 && page1}
        {page === 2 && page2}
        {page === 3 && page3}
        {page === 4 && page4}
        {page === 5 && page5}
        {page === 6 && page6}
        {page === 7 && page7}
        {page === 8 && page8}
        {page === 9 && page9}
        {page === 10 && page10}
        {page === 11 && page11}

        {
          page > 1 && page <= 11 && (
            <Actions
              home='page'
              next
              prev
              sound
              scene={page === 1 ? scene : page}
              page={page === 11 ? scene : page}
              changeScene={page === 1 ? changeScene : this.changePage}
              changePage={page === 11 ? changeScene : this.changePage}
              history={this.props.history}
              handlePause={this.handlePause}
              controls={controls}
              position={position}
            />
          )
        }

        <Sound
          autoLoad
          loop
          url={audio}
          playStatus={this.state.sound}
        />
      </div>
    )
  }
}

export default Scene1
