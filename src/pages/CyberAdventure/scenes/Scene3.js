import React from 'react'

import Actions from 'components/Actions'

import s2_1 from '../imgs/s2-1.png'
import s2_2 from '../imgs/s2-2.png'
import s3_1 from '../imgs/s3-1.png'
import s3_2 from '../imgs/s3-2.png'
import s3_3 from '../imgs/s3-3.png'
import s4_1 from '../imgs/s4-1.png'
import s4_2 from '../imgs/s4-2.png'
import s5_1 from '../imgs/s5-1.png'
import s6_1 from '../imgs/s6-1.png'
import s6_2 from '../imgs/s6-2.png'
import s7_1 from '../imgs/s7-1.png'
import s8_1 from '../imgs/s8-1.png'
import s8_2 from '../imgs/s8-2.png'
import s8_3 from '../imgs/s8-3.png'
import s9_1 from '../imgs/s9-1.png'
import s9_2 from '../imgs/s9-2.png'
import s9_3 from '../imgs/s9-3.png'
import s9_4 from '../imgs/s9-4.png'
import s10_1 from '../imgs/s10-1.png'
import s10_2 from '../imgs/s10-2.png'
import s10_3 from '../imgs/s10-3.png'
import s10_4 from '../imgs/s10-4.png'
import s11_1 from '../imgs/s11-1.png'
import s11_2 from '../imgs/s11-2.png'
import s12_1 from '../imgs/s12-1.png'
import s12_2 from '../imgs/s12-2.png'
import s13_1 from '../imgs/s13-1.png'
import s13_2 from '../imgs/s13-2.png'
import s14_1 from '../imgs/s14-1.png'
import s15_1 from '../imgs/s15-1.png'
import s16_1 from '../imgs/s16-1.png'
import s17_1 from '../imgs/s17-1.png'
import s17_2 from '../imgs/s17-2.png'
import s18_1 from '../imgs/s18-1.png'
import s19_1 from '../imgs/s19-1.png'
import s19_2 from '../imgs/s19-2.png'
import s19_3 from '../imgs/s19-3.png'
import s20_1 from '../imgs/s20-1.png'
import s21_1 from '../imgs/s21-1.png'
import s21_2 from '../imgs/s21-2.png'
import s21_3 from '../imgs/s21-3.png'
import s22_1 from '../imgs/s22-1.png'
import s22_2 from '../imgs/s22-2.png'
import s22_3 from '../imgs/s22-3.png'
import s22_4 from '../imgs/s22-4.png'
import s23_1 from '../imgs/s23-1.png'
import s24_1 from '../imgs/s24-1.png'
import icon_1 from '../imgs/icon-1.png'
import icon_2 from '../imgs/icon-2.png'
import icon_3 from '../imgs/icon-3.png'
import icon_4 from '../imgs/icon-4.png'
import icon_5 from '../imgs/icon-5.png'
import icon_6 from '../imgs/icon-6.png'
import icon_7 from '../imgs/icon-7.png'
import icon_7_1 from '../imgs/icon-7-1.png'
import icon_8 from '../imgs/icon-8.png'

var myInterval

class Scene3 extends React.Component {
  state = {
    page: 1,
    playerName: '',
    score: 0,
    pause: false
  }

  changePage = (page) => {
    this.setState({ page })

    if (page > 2 && page < 13) {
      (page === 3 || page === 4 || page === 5) && setTimeout(() => {
        this.changePage(page + 1)
      }, 5000)
    }
  }

  handleChangeName = (name) => {
    this.setState({ playerName: name })
  }

  changePause = () => {
    this.setState({ pause: !this.state.pause })
  }

  correctAnswer = () => {
    this.setState({ score: this.state.score + this.state.timer })
    this.changePage(this.state.page + 1)
  }

  incorrectAnswer = () => {
    this.changePage(this.state.page + 1)
  }

  playAgain = () => {
    this.props.changeScene(1)
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer } = this.state
    const scene = 2

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <p className='c1'>เลือกไอเทมตามสถานการณ์ต่างๆ อย่างเหมาะสม แต่ละครั้งที่เลือกจะแสดงให้เห็นว่าเกิดอะไรขึ้นบ้าง แล้วนำไปยังสถานการณ์ต่อไป</p>
        <p className='c2'>ไอเทมที่ได้เลือกไปแล้วจะไม่สามารถเลือกได้อีก</p>
        <p className='c3'>คะแนนเต็ม 100 คะแนน</p>
        <p className='c4'>ตอบถูก : +20 คะแนน</p>
        <p className='c5'>ตอบผิด : พลังชีวิตลด 1-3 แต้มที</p>
        <img src={s22_1} alt='char' style={{ animation: 'fadeRight 1s ease-in-out' }} />
      </div>
    )

    const page2 = (
      <div className='gscene-2'>
        <h2>ENTER NAME</h2>
        <input type='text' onChange={(e) => this.handleChangeName(e.target.value)} />
        <button className='submit-name'
          disabled={playerName === ''}
          onClick={() => this.changePage(page + 1)}>ENTER</button>
      </div>
    )

    const page3 = (
      <div className='gscene-3'>
        <img src={s3_1} alt='char' className='i-1' />
        <img src={s3_2} alt='char' className='i-2' />
        <img src={s3_3} alt='char' className='i-3' />
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
        <img src={s4_1} alt='char' className='i-1' />
        <img src={s4_2} alt='char' className='i-2' />
      </div>
    )

    const page5 = (
      <div className='gscene-5'>
        <img src={s5_1} alt='char' className='i-1' />
      </div>
    )

    const page6 = (
      <div className='gscene-6'>
        <img src={s6_1} alt='char' className='i-1' />
      </div>
    )

    const page7 = (
      <div className='gscene-7'>
        <img src={s7_1} alt='char' className='i-1' />
      </div>
    )

    const page8 = (
      <div className='gscene-8'>
        <img src={s8_1} alt='char' className='i-1' />
      </div>
    )

    const page9 = (
      <div className='gscene-9'>
        <img src={s9_1} alt='char' className='i-1' />
      </div>
    )

    const page10 = (
      <div className='gscene-10'>
        <img src={s10_1} alt='char' className='i-1' />
      </div>
    )

    const page11 = (
      <div className='gscene-11'>
        <img src={s11_1} alt='char' className='i-1' />
      </div>
    )

    const page12 = (
      <div className='gscene-12'>
        <img src={s12_1} alt='char' className='i-1' />
      </div>
    )

    const page13 = (
      <div className='gscene-13'>
        <img src={s12_1} alt='char' className='i-1' />
        <h2 className='total-score'>{this.state.score}</h2>
        <button className='play-again' onClick={this.playAgain}>PLAY AGAIN</button>
      </div>
    )

    return (
      <div className='scene-3'>
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

        <Actions
          next={page === 1 && page !== 13}
          prev={page === 1 || page === 2}
          sound
          pause={page !== 1 && page !== 2}
          scene={page === 1 ? 3 : page}
          page={page}
          changePause={this.changePause}
          changeScene={page === 1 ? changeScene : this.changePage}
          changePage={this.changePage}
          history={this.props.history}
        />

        {this.state.pause && overlay}
      </div>
    )
  }
}

export default Scene3
