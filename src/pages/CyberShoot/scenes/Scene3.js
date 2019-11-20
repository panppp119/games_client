import React from 'react'
import Sound from 'react-sound'

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
import audio from '../bg-audio.mp3'
import heart from '../imgs/life.png'

var myInterval

class Scene3 extends React.Component {
  state = {
    page: 1,
    playerName: '',
    score: 0,
    time: 100,
    timer: 100,
    pause: false,
    sound: 'PLAYING',
    type: 'white',
    life: 5
  }

  componentDidMount() {
    document.addEventListener('mousemove', e => {
      this.mousemove(e.x, e.y)
    })
  }

  mousemove (x, y) {
    this.setState({x, y})
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

  handlePause = (status) => {
    this.setState({ sound: status })
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

  changeType = (type) => {
    this.setState({ type })
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
    this.props.changeScene(2)
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer, type, score, life, x, y } = this.state
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
        <div className='actors'>
          <img src={head_w} alt='white'
            className={type === 'white' ? 'active' : ''}
            onClick={() => this.changeType('white')} />
          <img src={head_p} alt='pink'
            className={type === 'pink' ? 'active' : ''}
            onClick={() => this.changeType('pink')} />
          <img src={head_g} alt='grey'
            className={type === 'grey' ? 'active' : ''}
            onClick={() => this.changeType('grey')} />
        </div>
        <button className='submit-name'
          disabled={playerName === ''}
          onClick={() => this.changePage(page + 1)}>ENTER</button>
      </div>
    )

    var target = this.state.type === 'white' ? target_w : this.state.type === 'pink' ? target_p : target_g

    const page3 = (
      <div className='gscene-3'>
        <h2 className='time'>TIME: {timer}</h2>
        <h2 className='score'>SCORE: {score}</h2>
        <div className='life'>
          {life >= 1 && <img src={heart} alt='life'/>}
          {life >= 2 && <img src={heart} alt='life'/>}
          {life >= 3 && <img src={heart} alt='life'/>}
          {life >= 4 && <img src={heart} alt='life'/>}
          {life === 5 && <img src={heart} alt='life'/>}
        </div>

        <img src={target} alt="star" id='star' style={{ position: 'absolute', width: 60, height: 60, top: y - 120, left: x - 240 }}/>
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
      </div>
    )

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED
    }

    return (
      <div className='scene-3'>
        {page === 1 && page1}
        {page === 2 && page2}
        {page === 3 && page3}
        {page === 4 && page4}

        <Actions
          home={page === 2 ? 'page' : 'scene'}
          next={page === 1 && page !== 4}
          prev={page === 1 || page === 2}
          sound
          pause={page !== 1 && page !== 2}
          scene={page === 1 ? 3 : page}
          page={page}
          changePause={this.changePause}
          changeScene={changeScene}
          changePage={this.changePage}
          history={this.props.history}
          handlePause={this.handlePause}
          controls={controls}
          pauseStatus={this.state.pause}
        />

        {this.state.pause && overlay}

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

export default Scene3
