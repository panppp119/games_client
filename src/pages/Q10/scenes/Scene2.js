import React, { Fragment } from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'
import { database } from 'utils/firebase'

import char from '../imgs/char.png'
import name from '../imgs/name.png'
import start from '../imgs/start.png'
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
import q1_1 from '../imgs/q1-1.png'
import q1_2 from '../imgs/q1-2.png'
import q1_3 from '../imgs/q1-3.png'
import q1_4 from '../imgs/q1-4.png'
import q1_5 from '../imgs/q1-5.png'
import q2_1 from '../imgs/q2-1.png'
import q2_2 from '../imgs/q2-2.png'
import q2_3 from '../imgs/q2-3.png'
import q2_4 from '../imgs/q2-4.png'
import q2_5 from '../imgs/q2-5.png'
import q3_1 from '../imgs/q3-1.png'
import q3_2 from '../imgs/q3-2.png'
import q3_3 from '../imgs/q3-3.png'
import q3_4 from '../imgs/q3-4.png'
import q3_5 from '../imgs/q3-5.png'
import q4_1 from '../imgs/q4-1.png'
import q4_2 from '../imgs/q4-2.png'
import q4_3 from '../imgs/q4-3.png'
import q4_4 from '../imgs/q4-4.png'
import q4_5 from '../imgs/q4-5.png'
import q5_1 from '../imgs/q5-1.png'
import q5_2 from '../imgs/q5-2.png'
import q5_3 from '../imgs/q5-3.png'
import q5_4 from '../imgs/q5-4.png'
import q5_5 from '../imgs/q5-5.png'
import q6_1 from '../imgs/q6-1.png'
import q6_2 from '../imgs/q6-2.png'
import q6_3 from '../imgs/q6-3.png'
import q6_4 from '../imgs/q6-4.png'
import q6_5 from '../imgs/q6-5.png'
import q7_1 from '../imgs/q7-1.png'
import q7_2 from '../imgs/q7-2.png'
import q7_3 from '../imgs/q7-3.png'
import q7_4 from '../imgs/q7-4.png'
import q7_5 from '../imgs/q7-5.png'
import q8_1 from '../imgs/q8-1.png'
import q8_2 from '../imgs/q8-2.png'
import q8_3 from '../imgs/q8-3.png'
import q9_1 from '../imgs/q9-1.png'
import q9_2 from '../imgs/q9-2.png'
import q9_3 from '../imgs/q9-3.png'
import q9_4 from '../imgs/q9-4.png'
import q9_5 from '../imgs/q9-5.png'
import q10_1 from '../imgs/q10-1.png'
import q10_2 from '../imgs/q10-2.png'
import q10_3 from '../imgs/q10-3.png'
import audio from '../bg-audio.mp3'

var myInterval
const randomId = Math.floor(100000 + Math.random() * 900000)
const playersRef = database.ref('players');
const gameRef = database.ref('game');

class Scene2 extends React.Component {
  state = {
    page: 0,
    playerName: '',
    players: [],
    score: 0,
    time: 10,
    timer: 10,
    pause: false,
    sound: 'PLAYING',
    choice: 0,
    onPlaying: false
  }

  changePage = (page) => {
    clearInterval(myInterval)
    this.setState({ page, choice: 0 })

    if (page === 2 && gameRef.child('status')) {
        gameRef.on('value',(snapshot) => {
            let game = snapshot.val()
            let gameStatus = (game && game.status && game.status.start) || false

            this.setState({ onPlaying: gameStatus })
        })
    }

    if (page === 14) {
        gameRef.child('status').update({ start: false })
        this.setState({ onPlaying: false })
        setTimeout(() => {
            this.setState({ page: 0, choice: 0 })
            playersRef.remove()
        }, 100000)
    }

    if (page > 3 && page < 14) {
      this.setState({ timer: this.state.time })
      this.countdown()
    }

    if (page === 0) {
      this.setState({ score: 0, timer: this.state.time })
    }
  }

  handleChangeName = (name) => {
    this.setState({ playerName: name })
  }

  handlePause = (status) => {
    this.setState({ sound: status })
  }

  addPlayer = () => {
    const player = {
      name: this.state.playerName,
      score: this.state.score,
      id: randomId
    }
    const players = this.state.players || []

    if (this.state.player && this.state.player.id) {
        playersRef.child(randomId).update(player)
        this.setState({ player })
    }
    else {
        playersRef.child(randomId).update(player)
        this.setState({ player})
    }

    playersRef.on('value',(snapshot) => {
        let items = snapshot.val();
        let newState = [];

        for(let item in items){
          newState.push({
              id: item,
              name: items[item].name,
              score: items[item].score
          })
        }

        this.setState({
          players: newState
        })
    })

    this.changePage(3)
  }

  removePlayer = () => {
    playersRef.child(randomId).remove()
  }

  start = () => {
    gameRef.child('status').update({ start: true })
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

  correct = (choice) => {
    this.setState({ score: this.state.score + 10, choice })
    playersRef.child(randomId).update({ score: this.state.score + 10 })
  }

  incorrect = (choice) => {
    this.setState({ score: this.state.score, choice })
    playersRef.child(randomId).update({ score: this.state.score })
  }

  playAgain = () => {
    this.changePage(0)
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer, score, choice, players, onPlaying } = this.state
    const scene = 2
    const split = 5

    page === 3 && onPlaying && this.changePage(4)

    var firstCol = players.slice(0, split)
    var secondCol = players.slice(split)

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    const page0 = (
      <div className='gscene-0'>
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />
        <img src={start} alt='start' className='start' onClick={() => this.changePage(page + 1)} />
      </div>
    )

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <img src={char} alt="char" className='char'/>
        <p className='c1'>คำถามมีทั้งหมด 10 ข้อ เลือกตอบจากตัวเลือกที่มีภายในเวลา 10 วินาที หากเลือกคำตอบแล้วไม่สามารถเปลี่ยนได้ และต้องรอจนกว่าจะหมดเวลา </p>
        <p className='c2'>หลังจากหมดเวลาจะไปยังข้อต่อไปและเริ่มจับเวลาใหม่อีกครั้ง</p>
        <p className='c5'>คะแนนเต็ม 100 คะแนน ข้อละ 10 คะแนน</p>
        <p className='c6'>ตอบถูก : + คะแนนที่ได้จากเวลาที่เหลือ</p>
        <p className='c7'>ตอบผิด : ไม่ได้คะแนนเพิ่ม</p>
      </div>
    )

    const page2 = (
      <div className='gscene-2'>
        {
          this.state.onPlaying ? (
            <h2>เกมได้เริ่มไปแล้ว กรุณารอรอบถัดไป</h2>
          ) : (
            <Fragment>
              <h2>ENTER NAME</h2>
              <input type='text' onChange={(e) => this.handleChangeName(e.target.value)} />
              <button className='submit-name'
                disabled={playerName === ''}
                onClick={() => this.addPlayer()}>ENTER</button>
            </Fragment>
          )
        }
      </div>
    )

    const page3 = (
      <div className='gscene-3'>
          <h3 style={{ left: 0, right: 0, top: 50, margin: 'auto', textAlign: 'center' }}>รอการเข้าร่วม</h3>
          <ul style={{ top: 120, left: 100 }}>
            {
              firstCol.map((item, i) => {
                return (
                  <li style={{ lineHeight: '70px' }} key={i}>
                    {item.name} {players[0].id === item.id && '[head]'}{item.id === randomId && '[me]'}
                  </li>
                )
              })
            }
          </ul>
          <ul style={{ top: 120, left: 550 }}>
            {
              secondCol.map((item, i) => {
                return (
                  <li style={{ lineHeight: '70px' }} key={i}>
                    {item.name} {players[0].id === item.id && '[head]'}{item.name === playerName && '[me]'}
                  </li>
                )
              })
            }
          </ul>
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
        <img src={char1} alt="char" className='char-right' />
        <img src={q1_1} alt="char" className='q-1' style={{ left: 20 }} />
        <img src={q1_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.correct(1)} />
        <img src={q1_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(2)} />
        <img src={q1_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q1_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(4)} />
      </div>
    )

    const page5 = (
      <div className='gscene-5'>
        <img src={char2} alt="char" className='char-left' />
        <img src={q2_1} alt="char" className='q-1' style={{ right: 20 }} />
        <img src={q2_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q2_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.correct(2)} />
        <img src={q2_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q2_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(4)} />
      </div>
    )

    const page6 = (
      <div className='gscene-6'>
        <img src={char3} alt="char" className='char-right' style={{ right: -75 }} />
        <img src={q3_1} alt="char" className='q-1' style={{ left: 20 }} />
        <img src={q3_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q3_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.correct(2)} />
        <img src={q3_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q3_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(4)} />
      </div>
    )

    const page7 = (
      <div className='gscene-7'>
        <img src={char4} alt="char" className='char-left' style={{ left: -20 }} />
        <img src={q4_1} alt="char" className='q-1' style={{ right: 20 }} />
        <img src={q4_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q4_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.correct(2)} />
        <img src={q4_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q4_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(4)} />
      </div>
    )

    const page8 = (
      <div className='gscene-8'>
        <img src={char5} alt="char" className='char-right' />
        <img src={q5_1} alt="char" className='q-1' style={{ left: 20 }} />
        <img src={q5_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q5_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(2)} />
        <img src={q5_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q5_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.correct(4)} />
      </div>
    )

    const page9 = (
      <div className='gscene-9'>
        <img src={char6} alt="char" className='char-left' />
        <img src={q6_1} alt="char" className='q-1' style={{ right: 20 }} />
        <img src={q6_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q6_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(2)} />
        <img src={q6_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.correct(3)} />
        <img src={q6_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(4)} />
      </div>
    )

    const page10 = (
      <div className='gscene-10'>
        <img src={char7} alt="char" className='char-right' style={{ right: -10, bottom: -10 }} />
        <img src={q7_1} alt="char" className='q-1' style={{ left: 20 }} />
        <img src={q7_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q7_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(2)} />
        <img src={q7_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q7_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.correct(4)} />
      </div>
    )

    const page11 = (
      <div className='gscene-11'>
        <img src={char8} alt="char" className='char-left' />
        <img src={q8_1} alt="char" className='q-1' style={{ right: 20 }} />
        <img src={q8_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.correct(1)} />
        <img src={q8_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.incorrect(2)} />
      </div>
    )

    const page12 = (
      <div className='gscene-12'>
        <img src={char9} alt="char" className='char-right' style={{ width: 400 }} />
        <img src={q9_1} alt="char" className='q-1' style={{ left: 20 }} />
        <img src={q9_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q9_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(2)} />
        <img src={q9_4} alt="char" className={`q-4 ${choice !== 3 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(3)} />
        <img src={q9_5} alt="char" className={`q-5 ${choice !== 4 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.correct(4)} />
      </div>
    )

    const page13 = (
      <div className='gscene-13'>
        <img src={char10} alt="char" className='char-bottom' style={{ width: '100%' }} />
        <img src={q10_1} alt="char" className='q-1' style={{ right: 20 }} />
        <img src={q10_2} alt="char" className={`q-2 ${choice !== 1 && choice !== 0 && 'unactive'}`} style={{ left: 20 }} onClick={() => this.incorrect(1)} />
        <img src={q10_3} alt="char" className={`q-3 ${choice !== 2 && choice !== 0 && 'unactive'}`} style={{ right: 20 }} onClick={() => this.correct(2)} />
      </div>
    )

    const page14 = (
      <div className='gscene-14'>
        <img src={final} alt="char" className='char-right' style={{ right: -10 }} />
        <h1 style={{ left: 50, top: 45, fontSize: 80 }}>FINAL SCORE</h1>
        {/* <h1 style={{ left: 130, top: 200, fontSize: 60, width: 250, textAlign: 'center', backgroundColor: 'white' }}>{score}</h1> */}

        <ul style={{listStyle: 'none', top: 200, left: 50, paddingLeft: 0}}>
          {
            players.sort((a, b) => b.score - a.score).slice(0, 3).map((player, i) => {
              return (
                <li style={{ textAlign: 'left', fontSize: 60, lineHeight: '80px' }} key={i}>
                  <span style={{width: 100, textAlign: 'center'}}>{i + 1}</span>
                  <span style={{marginLeft: 50}}>{player.name}</span>
                  <span style={{marginLeft: 50}}>{player.score}</span>
                </li>
              )
            })
          }
        </ul>

        <button className='play-again' onClick={() => this.playAgain()}>PLAY AGAIN</button>
      </div>
    )

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED
    }

    var position = 'bottom-right'
    if (page === 0 || page === 5 || page === 7 || page === 9 || page === 14) {
      position = 'bottom-left'
    }

    return (
      <div className='scene-3'>
        {page === 0 && page0}
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

        {
          (page === 5 || page === 7 || page === 9 || page === 11)  && (
            <h2 className='timer-left'>{timer}</h2>
          )
        }
        {
          (page === 4 || page === 6 || page === 8 || page === 10 || page === 12 || page === 13)  && (
            <h2 className='timer-right'>{timer}</h2>
          )
        }

        {
          (page !== 14 || (page === 3 && !this.state.onPlaying)) && (
            <Actions
              home={page > 3 ? false : (page === 0 ? 'scene' : 'page')}
              next={(page < 2 && page !== 0) || (
                page === 3 && players.length >= 2
              )}
              prev={page < 3 && page !== 0}
              sound
              scene={scene}
              page={page}
              changePause={this.changePause}
              changeScene={changeScene}
              changePage={this.changePage}
              history={this.props.history}
              handlePause={this.handlePause}
              controls={controls}
              pauseStatus={this.state.pause}
              removePlayer={this.removePlayer}
              start={page === 3 && this.start}
              position={position}
              lastPage={14}
            />
          )
        }

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

export default Scene2
