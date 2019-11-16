import React from 'react'

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
import char from '../imgs/char.png'
import name from '../imgs/name.png'

class Scene2 extends React.Component {
  state = {
    page: 1,
  }

  changePage = (page) => {
    this.setState({ page })
  }

  render () {
    const { scene, changeScene } = this.props
    const { page } = this.state

    const page1 = (
      <div className='page-1 page' style={{ backgroundImage: `url(${slide1})`}}>
        <button onClick={() => this.changePage(2)}>START</button>
      </div>
    )

    const page2 = (
      <div className='page-2 page' style={{ backgroundImage: `url(${slide2})`}}>
        <div className='top-nav'>
          <button onClick={() => this.changePage(1)}>หน้าแรก</button>
          <button onClick={() => this.changePage(2)}>แนะนำการใช้งาน</button>
          <button onClick={() => this.changePage(3)}>จุดประสงค์การเรียนรู้</button>
          <button onClick={() => this.changePage(4)}>เนื้อหาบทเรียน</button>
        </div>
      </div>
    )

    const page3 = (
      <div className='page-3 page' style={{ backgroundImage: `url(${slide3})`}}>
        <div className='top-nav'>
          <button onClick={() => this.changePage(1)}>หน้าแรก</button>
          <button onClick={() => this.changePage(2)}>แนะนำการใช้งาน</button>
          <button onClick={() => this.changePage(3)}>จุดประสงค์การเรียนรู้</button>
          <button onClick={() => this.changePage(4)}>เนื้อหาบทเรียน</button>
        </div>
      </div>
    )

    const page4 = (
      <div className='page-4 page' style={{ backgroundImage: `url(${slide4})`}}>
        <div className='top-nav'>
          <button onClick={() => this.changePage(1)}>หน้าแรก</button>
          <button onClick={() => this.changePage(2)}>แนะนำการใช้งาน</button>
          <button onClick={() => this.changePage(3)}>จุดประสงค์การเรียนรู้</button>
          <button onClick={() => this.changePage(4)}>เนื้อหาบทเรียน</button>
        </div>
      </div>
    )

    const page5 = <div className='page-5 page' style={{ backgroundImage: `url(${slide5})`}}/>
    const page6 = <div className='page-6 page' style={{ backgroundImage: `url(${slide6})`}} />
    const page7 = <div className='page-7 page' style={{ backgroundImage: `url(${slide7})`}} />
    const page8 = <div className='page-8 page' style={{ backgroundImage: `url(${slide8})`}} />
    const page9 = <div className='page-9 page' style={{ backgroundImage: `url(${slide9})`}} />
    const page10 = <div className='page-10 page' style={{ backgroundImage: `url(${slide10})`}} />
    const page11 = <div className='page-11 page' style={{ backgroundImage: `url(${slide11})`}} />

    const page12 = (
      <div className='page-12 page'>
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='start' onClick={() => changeScene(3)}>START GAME</button>
      </div>
    )

    var position = 'bottom-right'
    if (page === 6) {
      position = 'bottom-center'
    }
    else if (page === 7 || page === 9 || page === 12) {
      position = 'bottom-left'
    }

    return (
      <div className='scene-2'>
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

        {
          page > 1 && page <= 12 && (
            <Actions
              home='page'
              next={page !== 12}
              prev
              sound
              scene={page === 1 ? scene : page}
              page={page}
              changeScene={page === 1 ? changeScene : this.changePage}
              changePage={this.changePage}
              history={this.props.history}
              position={position}
            />
          )
        }
      </div>
    )
  }
}

export default Scene2
