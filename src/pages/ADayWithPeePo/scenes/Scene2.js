import React, { Fragment } from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'

import char from '../imgs/char.png'
import name from '../imgs/title.png'
import txtScore from '../imgs/score.png'
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
import char11 from '../imgs/char11.png'
import item1 from '../imgs/item1.png'
import item2 from '../imgs/item2.png'
import item3 from '../imgs/item3.png'
import item4 from '../imgs/item4.png'
import item5 from '../imgs/item5.png'
import item6 from '../imgs/item6.png'
import item7 from '../imgs/item7.png'
import item8 from '../imgs/item8.png'
import item9 from '../imgs/item9.png'
import item10 from '../imgs/item10.png'
import audio from '../bg-audio.wav'

var myInterval

class Scene2 extends React.Component {
  state = {
    page: 0,
    playerName: '',
    score: 0,
    time: 10,
    timer: 10,
    pause: false,
    sound: 'PLAYING'
  }

  changePage = (page) => {
    this.setState({ page })

    if (page > 2 && page < 13) {
      this.setState({ timer: this.state.time })
      this.countdown()
    }

    if (page === 0) {
      this.setState({ score: 0 })
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
    this.changePage(0)
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer, score } = this.state
    const scene = 2

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    const page0 = (
      <div className='gscene-0'>
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='start' onClick={() => this.changePage(page + 1)}>PLAY</button>
      </div>
    )

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <img src={char} alt="char" className='char'/>
        <p className='c1'>สถานการณ์ที่จะแสดงมีทั้งหมด 10 สถานการณ์ เลือกคำตอบที่ถูกต้องจากตัวเลือกด้านล่าง ให้สอดคล้องกับสถานการณ์ที่แสดง โดยต้องตอบภายใน 10 วินาที</p>
        <p className='c2'><button>CORRECT</button> คือ การกระทำที่ถูก พรบ.คอมพิวเตอร์ (ฉบับที่ 2) พ.ศ.2560</p>
        <p className='c3'><button>INCORRECT</button> คือ การกระทำที่ผิด พรบ.คอมพิวเตอร์ (ฉบับที่ 2) พ.ศ.2560</p>
        <p className='c4'>กรณีตอบไม่ทันภายใน 10 วินาที จะข้ามไปยังสถานการณ์ต่อไป</p>
        <p className='c5'>คะแนนเต็ม 10 คะแนน</p>
        <p className='c6'>ตอบถูก : +1 คะแนน รวมกับเวลาที่เหลือจาก 10 วินาที</p>
        <p className='c7'>ตอบผิด : ไม่ได้คะแนนและข้ามไปยังสภานการณ์ต่อไปทันที</p>
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
        <img src={item1} alt='item' className='item' />
        <img src={char1} alt='char' className='char' />
        <p className='label'>ปีโป้ต้องการส่งจดหมายอิเล็กทรอนิกส์<br />(E-mail) ไปให้จีจี้</p>
        <button className='choice' onClick={this.correctAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.incorrectAnswer}>INCORRECT</button>
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
        <img src={item2} alt='item' className='item' />
        <img src={char2} alt='char' className='char' />
        <p className='label'>ปีโป้กำลังจะสั่งซื้อก๊อตซิล่าผ่าน<br />เว็บไซต์ออนไลน์ซึ่งกำลังลดราคา 10%</p>
        <button className='choice' onClick={this.correctAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.incorrectAnswer}>INCORRECT</button>
      </div>
    )

    const page5 = (
      <div className='gscene-5'>
        <img src={item3} alt='item' className='item' />
        <img src={char3} alt='char' className='char' />
        <p className='label'>ปีโป้โพสต์ข้อความในเฟซบุ๊ค(Facebook) <br />ว่า เจนนี่นิสัยแบบนี้ต้องเลิกคบ</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page6 = (
      <div className='gscene-6'>
        <img src={item4} alt='item' className='item' />
        <img src={char4} alt='char' className='char' />
        <p className='label'>ปีโป้กำลังเล่นเกมออนไลน์ในโทรศัพท์มือถือ</p>
        <button className='choice' onClick={this.correctAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.incorrectAnswer}>INCORRECT</button>
      </div>
    )

    const page7 = (
      <div className='gscene-7'>
        <img src={item5} alt='item' className='item' />
        <img src={char5} alt='char' className='char' />
        <p className='label'>ปีโป้กำลังจะดาวน์โหลดภาพยนตร์ที่มีลิขสิทธิ์ หรือหนังซูม จากเว็บไซต์หนึ่ง</p>
        <h2 className='zoom'>ZOOM!</h2>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page8 = (
      <div className='gscene-8'>
        <img src={item6} alt='item' className='item' />
        <img src={char6} alt='char' className='char' />
        <p className='label'>ปีโป้ต้องการจะแฮกข้อมูลผู้ใช้และ<br />รหัสผ่าน(Username and Password) ในการเข้าสู่ระบบของเฟซบุ๊คของแอมมี่เพื่อดูข้อมูลส่วนตัว</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page9 = (
      <div className='gscene-9'>
        <img src={item7} alt='item' className='item' />
        <img src={char7} alt='char' className='char' />
        <p className='label'>ปีโป้ได้ทำการตัดต่อรูปภาพในลักษณะ<br />ภาพโป๊ของซูซี่ แล้วนำภาพมาโพสต์ลง<br />อินสตาแกรม(Instagram)</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page10 = (
      <div className='gscene-10'>
        <img src={item8} alt='item' className='item' />
        <img src={char8} alt='char' className='char' />
        <p className='label'>ปีโป้เข้าเว็บไซต์ของโรงเรียนเพื่อค้นหาชื่อและนามสกุลของคุณครูที่ปรึกษา</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page11 = (
      <div className='gscene-11'>
        <img src={item9} alt='item' className='item' />
        <img src={char9} alt='char' className='char' />
        <p className='label'>ปีโป้โพสต์ฝากร้านค้าในอินสตาแกรม(IG) <br />ของณเดชน์ คูกิมิยะ</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page12 = (
      <div className='gscene-12'>
        <img src={item10} alt='item' className='item' />
        <img src={char10} alt='char' className='char' />
        <p className='label'>ปีโป้กดปุ่มแชร์คลิปวิดีโอโป๊ให้เจนนี่</p>
        <button className='choice' onClick={this.incorrectAnswer}>CORRECT</button>
        <button className='choice incorrect' onClick={this.correctAnswer}>INCORRECT</button>
      </div>
    )

    const page13 = (
      <div className='gscene-13'>
        <img src={txtScore} alt='score' className='txt-score' />
        <img src={char11} alt='char' className='char' />
        <h2 className='total-score'>{this.state.score}</h2>
        <button className='play-again' onClick={this.playAgain}>PLAY AGAIN</button>
      </div>
    )

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED
    }

    return (
      <div className='scene-3'>
        {page > 2 && page < 13 && (
          <Fragment>
            <h2 className='countdown'>TIME: {timer}</h2>
            <h2 className='score'>SCORE: {score}</h2>
          </Fragment>
        )}

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

        <Actions
          home={page > 2 ? false : (page === 0 ? 'scene' : 'page')}
          next={page < 2 && page !== 0}
          prev={page <= 2 && page !== 0}
          sound
          scene={scene}
          page={page}
          pause={page > 2 && page !== 13}
          changePause={this.changePause}
          changeScene={changeScene}
          changePage={this.changePage}
          history={this.props.history}
          handlePause={this.handlePause}
          controls={controls}
          pauseStatus={this.state.pause}
          lastPage={13}
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

export default Scene2
