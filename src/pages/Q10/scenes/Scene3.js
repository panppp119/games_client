import React from 'react'
import socketIOClient from 'socket.io-client';

import Actions from 'components/Actions'

import char1 from '../imgs/char1.png'
import char2 from '../imgs/char2.png'
import char3 from '../imgs/char3.png'
import char4 from '../imgs/char4.png'
import char5 from '../imgs/char5.png'
import char6 from '../imgs/char6.png'
import char7 from '../imgs/char7.png'
import char8 from '../imgs/char8.png'
import char9 from '../imgs/char9.png'
import char10 from '../imgs/char10.png'
import final from '../imgs/final.png'

var myInterval
// Connect Socket.io
const server = `${process.env.REACT_APP_SERVER}`
const socket = socketIOClient(server)

const initial = {
  max: 10,
  players: [],
  player: {},
  question: 1,
  join: false,
  time: 20,
  score: 0,
}

class Scene3 extends React.Component {
  state = {
    page: 1,
    timer: 20,
    pause: false,
    ...initial,
  }

  reset () {
    this.setState(initial)
  }

  addPlayer = () => {
    const player = { ...this.state.player, score: 0 }

    socket.emit('add player', player, this.state.page)
    this.setState({ join: true, player })
    this.changePage(this.state.page + 1)
  }

  removePlayer = () => {
    const { player, scene } = this.state

    socket.emit('remove player', player.name, scene)
    this.reset()
  }

  changePage = (page) => {
    this.setState({ page })

    if (page > 3 && page < 13) {
      this.setState({ timer: this.state.time })
      this.countdown()
    }
  }

  handleChangeName = (name) => {
     this.setState({ player: { name }})
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
    this.props.changeScene(3)
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer, question, players, join, player } = this.state
    const scene = 2
    const split = 2
    const list = players.length > 0
    var hasPlayer = player && player.name

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    hasPlayer && socket.on('update players', (data) => {
      this.setState({ players: data })
    })

    hasPlayer && socket.on('update scene', (data) => {
      this.setState({ scene: data })
    })

    var firstCol = players.slice(0, split)
    var secondCol = players.slice(split)

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <p className='c1'>คำถามมีทั้งหมด 10 ข้อ เลือกตอบจากตัวเลือกที่มีภายในเวลา 10 วินาที หากเลือกคำตอบแล้วไม่สามารถเปลี่ยนได้ และต้องรอจนกว่าจะหมดเวลา </p>
        <p className='c2'>หลังจากหมดเวลาจะไปยังหน้าแสดงคะแนนที่จะแสดงผล 3 อันดับผู้เล่นที่มีคะแนนสูงสุด</p>
        <p className='c5'>คะแนนเต็ม 100 คะแนน ข้อละ 10 คะแนน</p>
        <p className='c6'>ตอบถูก : + คะแนนที่ได้จากเวลาที่เหลือ</p>
        <p className='c7'>ตอบผิด : ไม่ได้คะแนนเพิ่ม</p>
      </div>
    )

    const page2 = (
      <div className='gscene-2'>
        <h2>ENTER NAME</h2>
        {!join && <input type='text' onChange={(e) => this.handleChangeName(e.target.value)} />}
        <button className='submit-name'
          disabled={playerName === ''}
          onClick={(e) => this.addPlayer(e.target.value)}>ENTER</button>
      </div>
    )

    const page3 = (
      <div className='gscene-3'>
        <h2 style={{ top: 50 }}>รอการเข้าร่วม</h2>
        <ul>
          {
            players.map((player, i) => {
              const me = player.name === this.state.player.name
              const head = i === 0

              return (
                <li key={i}>
                  {player.name} {me && <span>[me]</span>} {head && <span>Head</span>}
                </li>
              )
            })
          }
        </ul>
      </div>
    )

    console.log(this.state)

    const page4 = (
      <div className='gscene-3'>
        <img src={char1} alt='char' className='char1' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page5 = (
      <div className='gscene-4'>
        <img src={char2} alt='char' className='char2' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page6 = (
      <div className='gscene-5'>
        <img src={char3} alt='char' className='char1' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page7 = (
      <div className='gscene-6'>
        <img src={char4} alt='char' className='char2' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page8 = (
      <div className='gscene-7'>
        <img src={char5} alt='char' className='char1' />
        <h2 className='zoom'>ZOOM!</h2>
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page9 = (
      <div className='gscene-8'>
        <img src={char6} alt='char' className='char2' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page10 = (
      <div className='gscene-9'>
        <img src={char7} alt='char' className='char1' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page11 = (
      <div className='gscene-10'>
        <img src={char8} alt='char' className='char3' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page12 = (
      <div className='gscene-11'>
        <img src={char9} alt='char' className='char' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page13 = (
      <div className='gscene-12'>
        <img src={char10} alt='char' className='char' />
        <h2 className='countdown'>{timer}</h2>
      </div>
    )

    const page14 = (
      <div className='gscene-13'>
        <img src={final} alt='char' className='char' />
        <h2 className='countdown'>{timer}</h2>
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

        <Actions
          home={page === 2 ? 'page' : 'scene'}
          next={page === 1 && page !== 13}
          prev={page === 1 || page === 2}
          // sound
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
