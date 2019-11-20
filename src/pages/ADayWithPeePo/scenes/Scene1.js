import React from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'

import char from '../imgs/char.png'
import name from '../imgs/title.png'
import slide1 from '../imgs/slide1.JPG'
import slide2 from '../imgs/slide2.JPG'
import slide3 from '../imgs/slide3.JPG'
import slide4 from '../imgs/slide4.jpg'
import slide5 from '../imgs/slide5.JPG'
import slide6 from '../imgs/slide6.JPG'
import slide7 from '../imgs/slide7.JPG'
import slide8 from '../imgs/slide8.JPG'
import slide9 from '../imgs/slide9.JPG'
import slide10 from '../imgs/slide10.JPG'
import slide11 from '../imgs/slide11.JPG'
import slide12 from '../imgs/slide12.JPG'
import slide13 from '../imgs/slide13.JPG'
import slide14 from '../imgs/slide14.JPG'
import slide15 from '../imgs/slide15.JPG'
import slide16 from '../imgs/slide16.JPG'
import slide17 from '../imgs/slide17.JPG'
import slide18 from '../imgs/slide18.JPG'
import slide19 from '../imgs/slide19.JPG'
import slide20 from '../imgs/slide20.JPG'
import slide21 from '../imgs/slide21.JPG'
import slide22 from '../imgs/slide22.JPG'
import text1 from '../imgs/N1.png'
import audio from '../bg-audio.wav'

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
        {actions}
      </div>
    )

    const page5 = <div className='page-5 page' style={{ backgroundImage: `url(${slide5})`}} />
    const page6 = <div className='page-6 page' style={{ backgroundImage: `url(${slide6})`}} />
    const page7 = <div className='page-7 page' style={{ backgroundImage: `url(${slide7})`}} />
    const page8 = <div className='page-8 page' style={{ backgroundImage: `url(${slide8})`}} />
    const page9 = <div className='page-9 page' style={{ backgroundImage: `url(${slide9})`}} />
    const page10 = <div className='page-10 page' style={{ backgroundImage: `url(${slide10})`}} />
    const page11 = <div className='page-11 page' style={{ backgroundImage: `url(${slide11})`}} />
    const page12 = <div className='page-12 page' style={{ backgroundImage: `url(${slide12})`}} />
    const page13 = <div className='page-13 page' style={{ backgroundImage: `url(${slide13})`}} />
    const page14 = <div className='page-14 page' style={{ backgroundImage: `url(${slide14})`}} />
    const page15 = <div className='page-15 page' style={{ backgroundImage: `url(${slide15})`}} />
    const page16 = <div className='page-16 page' style={{ backgroundImage: `url(${slide16})`}} />
    const page17 = <div className='page-17 page' style={{ backgroundImage: `url(${slide17})`}} />
    const page18 = <div className='page-18 page' style={{ backgroundImage: `url(${slide18})`}} />
    const page19 = <div className='page-19 page' style={{ backgroundImage: `url(${slide19})`}} />
    const page20 = <div className='page-20 page' style={{ backgroundImage: `url(${slide20})`}} />
    const page21 = <div className='page-21 page' style={{ backgroundImage: `url(${slide21})`}} />
    const page22 = <div className='page-22 page' style={{ backgroundImage: `url(${slide22})`}} />

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
        {page === 12 && page12}
        {page === 13 && page13}
        {page === 14 && page14}
        {page === 15 && page15}
        {page === 16 && page16}
        {page === 17 && page17}
        {page === 18 && page18}
        {page === 19 && page19}
        {page === 20 && page20}
        {page === 21 && page21}
        {page === 22 && page22}

        {
          page > 1 && page <= 22 && (
            <Actions
              home='page'
              next
              prev
              sound
              scene={page === 1 ? scene : page}
              page={page === 22 ? scene : page}
              changeScene={page === 1 ? changeScene : this.changePage}
              changePage={page === 22 ? changeScene : this.changePage}
              history={this.props.history}
              handlePause={this.handlePause}
              controls={controls}
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
