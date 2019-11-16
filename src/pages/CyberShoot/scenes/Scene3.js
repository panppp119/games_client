import React from 'react'

import Actions from 'components/Actions'

import char_w from '../imgs/char_w.png'
import char_p from '../imgs/char_p.png'
import char_g from '../imgs/char_g.png'
import head_w from '../imgs/head_w.png'
import head_p from '../imgs/head_p.png'
import head_g from '../imgs/head_g.png'
import target_w from '../imgs/target_w.png'
import target_p from '../imgs/target_p.png'
import target_g from '../imgs/target_g.png'
import gun from '../imgs/gun.png'

var myInterval

class Scene3 extends React.Component {
  state = {
    page: 1,
    playerName: '',
    score: 0,
    time: 100,
    timer: 100,
    pause: false
  }

  changePage = (page) => {
    this.setState({ page })

    if (page === 3) {
      this.setState({ timer: this.state.time })
      this.countdown()
    }
  }

  handleChangeName = (name) => {
    this.setState({ playerName: name })
  }

  countdown = () => {
    myInterval = setInterval(() => {
      if (this.state.timer > 1 && !this.state.pause) {
        this.setState({ timer: this.state.timer - 1 })
      }
      else {
        if (this.state.pause) {
          clearInterval(myInterval)
        }
        else {
          clearInterval(myInterval)
          this.changePage(this.state.page + 1)
        }
      }
    }, 1000);
  }

  changePause = () => {
    this.setState({ pause: !this.state.pause })
    !this.state.pause && this.countdown()
  }

  correctAnswer = () => {
    this.setState({ score: this.state.score + this.state.timer })
    clearInterval(myInterval)
    this.changePage(this.state.page + 1)
  }

  incorrectAnswer = () => {
    clearInterval(myInterval)
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
        <p className='c1'>ตัวละครมีให้เลือก 3 แบบ</p>
        <p className='c2'>ขยับเมาส์ในการเล็งเป้าหมาย แล้วกดยิง</p>
        <p className='c3'>พลังชีวิตมีทั้งหมด 5 ชีวิต</p>
        <p className='c4'>ตอบถูก : +20 คะแนน</p>
        <p className='c5'>จะมีคำต่างๆ อยู่ในเป้าหมาย <span>
          กดยิงคำไม่สุภาพ คำที่ใช้ผิดตามหลักไวยากรณ์ของภาษาไทย : +5 คะแนน
กดยิงคำสุภาพ คำที่ใช้ถูกตามหลักไวยากรณ์ของภาษาไทย : พลังชีวิต -1
หากไม่มีการยิง เป้าหมายจะหายไป : -2 คะแนน
        </span></p>
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
        <h2 className='time'>{timer}</h2>
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
      </div>
    )

    return (
      <div className='scene-3'>
        {page === 1 && page1}
        {page === 2 && page2}
        {page === 3 && page3}
        {page === 4 && page4}

        <Actions
          next={page === 1 && page !== 4}
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
