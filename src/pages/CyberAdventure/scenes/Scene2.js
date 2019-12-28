import React from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'

import char from '../imgs/s1-1.png'
import name from '../imgs/s1-2.png'
import fire from '../imgs/s1-3.png'
import city from '../imgs/cyber_city.jpg'
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
import s11_1 from '../imgs/s11-1.png'
import s11_2 from '../imgs/s11-2.png'
import s12_1 from '../imgs/s12-1.png'
import s12_2 from '../imgs/s12-2.png'
import s13_1 from '../imgs/s13-1.png'
import s13_2 from '../imgs/s13-2.png'
import s14_1 from '../imgs/s14-1.png'
import s15_1 from '../imgs/s15-1.png'
import s15_2 from '../imgs/s15-2.png'
import s16_1 from '../imgs/s16-1.png'
import s17_1 from '../imgs/s17-1.png'
import s18_1 from '../imgs/s18-1.png'
import s19_1 from '../imgs/s19-1.png'
import s19_2 from '../imgs/s19-2.png'
import s20_1 from '../imgs/s20-1.png'
import s21_1 from '../imgs/s21-1.png'
import s21_2 from '../imgs/s21-2.png'
import s21_3 from '../imgs/s21-3.png'
import s22_1 from '../imgs/s22-1.png'
import s22_2 from '../imgs/s22-2.png'
import s23_1 from '../imgs/s23-1.png'
import s24_1 from '../imgs/s24-1.png'
import icon_g from '../imgs/tools.png'
import icon_g1 from '../imgs/icon-g1.png'
import icon_1 from '../imgs/icon1.png'
import icon_2 from '../imgs/icon2.png'
import icon_3 from '../imgs/icon3.png'
import icon_4 from '../imgs/icon4.png'
import icon_5 from '../imgs/icon5.png'
import icon_6 from '../imgs/icon6.png'
import icon_7 from '../imgs/icon7.png'
import icon_8 from '../imgs/icon8.png'
import life10 from '../imgs/life10.png'
import life8 from '../imgs/life8.png'
import life6 from '../imgs/life6.png'
import life4 from '../imgs/life4.png'
import life1 from '../imgs/life1.png'
import audio from '../bg-audio.wav'
import audio3 from '../audios/3.mp3'
import audio4 from '../audios/4.mp3'
import audio5 from '../audios/5.mp3'
import audio6 from '../audios/6.mp3'
import audio7 from '../audios/7.mp3'
import audio8 from '../audios/8.mp3'
import audio9 from '../audios/9.mp3'
import audio10 from '../audios/10.mp3'
import audio11 from '../audios/11.mp3'
import audio12 from '../audios/12.mp3'
import audio13 from '../audios/13.mp3'
import audio14 from '../audios/14.mp3'
import audio15 from '../audios/15.mp3'
import audio16 from '../audios/16.mp3'
import audio17 from '../audios/17.mp3'
import audio18 from '../audios/18.mp3'
import audio19 from '../audios/19.mp3'
import audio20 from '../audios/20.mp3'
import audio21 from '../audios/21.mp3'
import audio22 from '../audios/22.mp3'
import audio23 from '../audios/23.mp3'
import audio24 from '../audios/24.mp3'

class Scene2 extends React.Component {
  state = {
    page: 0,
    playerName: '',
    life: 10,
    score: 0,
    pause: false,
    sound: 'PLAYING',
    icon1: true,
    icon2: true,
    icon3: true,
    icon4: true,
    icon5: true,
    icon6: true,
    icon7: true,
    icon8: true,
  }

  changePage = (page) => {
    this.setState({ page })

    if (page === 3) {
        this.setState({ score: 0, life: 10 })
    }

    if (page > 3 && page <= 25) {
      this.setState({ sound: Sound.status.PLAYING })
    }

    if (page === 0) {
      this.setState({ life: 10, page: 0 })
    }
  }

  handleChangeName = (name) => {
    this.setState({ playerName: name })
  }

  handlePause = (status) => {
    this.setState({ sound: status })
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
    this.changePage(0)
    this.setState({
      score: 0,
      life: 10,
      icon1: true,
      icon2: true,
      icon3: true,
      icon4: true,
      icon5: true,
      icon6: true,
      icon7: true,
      icon8: true,
    })
  }

  finish = (val) => {
    const { page } = this.state
    if (page !== 7 && page !== 11 && page !== 15 && page !== 19 && page !== 23) {
      this.changePage(val || page + 1)
    }
    else {
      this.setState({ sound: 'STOPPED' })
    }
  }

  correct = (page, name) => {
    this.setState({ score: this.state.score + 20, [name]: false, sound: 'PLAYING' })
    this.changePage(page)
  }

  incorrect = (page, name) => {
    const number = this.state.page === 19 ? 3 : 2
    this.setState({ life: this.state.life - number, [name]: false, sound: 'PLAYING' })
    this.changePage(page)
  }

  componentDidMount() {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return this.handleWindowClose
    });
  }

  componentWillUnmount() {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return this.handleWindowClose
    });
  }

  handleWindowClose() {
    this.setState({
      score: 0,
      life: 10,
      icon1: true,
      icon2: true,
      icon3: true,
      icon4: true,
      icon5: true,
      icon6: true,
      icon7: true,
      icon8: true,
    })
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, score, life } = this.state
    const scene = 2
    var heart

    switch (life) {
      case 10: heart = life10
        break
      case 8: heart = life8
        break
      case 6: heart = life6
        break
      case 4: heart = life4
        break
      case 1: heart = life1
        break
      default: heart = life10
        break
    }

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    const page0 = (
      <div className='gscene-0'>
        <img src={fire} alt='fire' className='fire' />
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='start' onClick={() => this.changePage(page + 1)}>PLAY</button>
      </div>
    )

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <p className='c1'>เลือกไอเทมตามสถานการณ์ต่างๆ อย่างเหมาะสม แต่ละครั้งที่เลือกจะแสดงให้เห็นว่าเกิดอะไรขึ้นบ้าง แล้วนำไปยังสถานการณ์ต่อไป</p>
        <p className='c2'>ไอเทมที่ได้เลือกไปแล้วจะไม่สามารถเลือกได้อีก</p>
        <p className='c3'>คะแนนเต็ม 100 คะแนน</p>
        <p className='c4'>ตอบถูก : +20 คะแนน</p>
        <p className='c5'>ตอบผิด : พลังชีวิตลด 2-3 แต้ม</p>
        <img src={s22_1} alt='char' style={{ animation: 'fadeRight 1s ease-in-out' }} />
      </div>
    )

    const page2 =  <div className='gscene-2' style={{ backgroundImage:  `url(${icon_g})`}} />

    const page3 = (
      <div className='gscene-3'>
        <h2 style={{ width: 300, left: 'auto', right: 100, top: 100}}>ENTER NAME</h2>
        <img src={s2_1} alt='char' style={{ left: 0, bottom: 0, height: '90%' }}/>
        <img src={s2_2} alt='char' style={{ left: 'auto', top: 290, right: 170, height: 150 }}/>
        <input type='text' onChange={(e) => this.handleChangeName(e.target.value)} />
        <button className='submit-name'
          disabled={playerName === ''}
          onClick={() => this.changePage(page + 1)}>LET'S GO</button>
      </div>
    )

    const page4 = (
      <div className='gscene-4'>
        <img src={s3_1} alt='char' className='i-1' />
        <img src={s3_2} alt='char' className='i-2' />
        <img src={s3_3} alt='char' className='i-3' />
        <img src={icon_g1} alt='char' className='i-4' />
        <Sound
          autoLoad
          url={audio3}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page5 = (
      <div className='gscene-5'>
        <img src={s4_1} alt='char' className='i-1' />
        <img src={s4_2} alt='char' className='i-2' />
        <img src={life10} alt='char' className='i-3' />
        <h1 className='i-4'>ค่าพลังชีวิต</h1>
        <Sound
          autoLoad
          url={audio4}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page6 = (
      <div className='gscene-6'>
        <img src={s5_1} alt='char' className='i-1' />

        <Sound
          autoLoad
          url={audio5}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page7 = (
      <div className='gscene-7'>
        <img src={s6_1} alt='char' className='i-1' />
        <img src={s6_2} alt='char' className='i-2' />

        <img src={icon_1} alt='char' className={`icon1 ${!icon1 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon1')} />
        <img src={icon_2} alt='char' className={`icon2 ${!icon2 && 'unactive'}`} onClick={() => this.correct(8, 'icon2')} />
        <img src={icon_3} alt='char' className={`icon3 ${!icon3 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon3')} />
        <img src={icon_4} alt='char' className={`icon4 ${!icon4 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon4')} />
        <img src={icon_5} alt='char' className={`icon5 ${!icon5 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon5')} />
        <img src={icon_6} alt='char' className={`icon6 ${!icon6 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon6')} />
        <img src={icon_7} alt='char' className={`icon7 ${!icon7 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon7')} />
        <img src={icon_8} alt='char' className={`icon8 ${!icon8 && 'unactive'}`} onClick={() => this.incorrect(9, 'icon8')} />

        <Sound
          autoLoad
          url={audio6}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page8 = (
      <div className='gscene-8'>
        <img src={s7_1} alt='char' className='i-1' />
        <Sound
          autoLoad
          url={audio7}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish(10)}
        />
      </div>
    )

    const page9 = (
      <div className='gscene-9'>
        <img src={s8_1} alt='char' className='i-1' />
        <img src={s8_2} alt='char' className='i-2' />
        <img src={s8_3} alt='char' className='i-3' />
        <img src={heart} alt='char' className='i-4' />
        <Sound
          autoLoad
          url={audio8}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish(10)}
        />
      </div>
    )

    const page10 = (
      <div className='gscene-10'>
        <img src={s9_1} alt='char' className='i-1' />
        <img src={s9_2} alt='char' className='i-2' />
        <img src={s9_3} alt='char' className='i-3' />
        <img src={s9_4} alt='char' className='i-4' />
        <Sound
          autoLoad
          url={audio9}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page11 = (
      <div className='gscene-11'>
        <img src={s10_1} alt='char' className='i-1' />
        <img src={s10_2} alt='char' className='i-2' />
        <img src={s10_3} alt='char' className='i-3' />

        <img src={icon_1} alt='char' className={`icon1 ${!icon1 && 'unactive'}`} onClick={() => icon1 && this.incorrect(13, 'icon1')}
          style={{bottom: 20, left: 10}} />
        <img src={icon_2} alt='char' className={`icon2 ${!icon2 && 'unactive'}`} onClick={() => icon2 && this.incorrect(13, 'icon2')}
          style={{bottom: 20, left: 120}} />
        <img src={icon_3} alt='char' className={`icon3 ${!icon3 && 'unactive'}`} onClick={() => icon3 && this.incorrect(13, 'icon3')}
          style={{bottom: 20, left: 220}}/>
        <img src={icon_4} alt='char' className={`icon4 ${!icon4 && 'unactive'}`} onClick={() => icon4 && this.incorrect(13, 'icon4')}
          style={{ bottom: 20, left: 320}}/>
        <img src={icon_5} alt='char' className={`icon5 ${!icon5 && 'unactive'}`} onClick={() => icon5 && this.incorrect(13, 'icon5')}
          style={{bottom: 20, left: 420}}/>
        <img src={icon_6} alt='char' className={`icon6 ${!icon6 && 'unactive'}`} onClick={() => icon6 && this.correct(12, 'icon6')}
          style={{bottom: 20, left: 520}}/>
        <img src={icon_7} alt='char' className={`icon7 ${!icon7 && 'unactive'}`} onClick={() => icon7 && this.incorrect(13, 'icon7')}
          style={{bottom: 20, left: 620}}/>
        <img src={icon_8} alt='char' className={`icon8 ${!icon8 && 'unactive'}`} onClick={() => icon8 && this.incorrect(13, 'icon8')}
          style={{ bottom: 20, left: 710}}/>
        <Sound
          autoLoad
          url={audio10}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page12 = (
      <div className='gscene-12'>
        <img src={s11_1} alt='char' className='i-1' />
        <img src={s11_2} alt='char' className='i-2' />
        <Sound
          autoLoad
          url={audio11}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish(14)}
        />
      </div>
    )

    const page13 = (
      <div className='gscene-13'>
        <img src={s12_1} alt='char' className='i-1' />
        <img src={s12_2} alt='char' className='i-2' />
        <img src={heart} alt='char' className='i-3' />
        <Sound
          autoLoad
          url={audio12}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page14 = (
      <div className='gscene-14'>
        <img src={s13_1} alt='char' className='i-1' />
        <img src={s13_2} alt='char' className='i-2' />
        <Sound
          autoLoad
          url={audio13}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page15 = (
      <div className='gscene-15'>
        <img src={s14_1} alt='char' className='i-1'/>

        <img src={icon_1} alt='char' className={`icon1 ${!icon1 && 'unactive'}`}
          onClick={() => icon1 && this.incorrect(17, 'icon1')}
          style={{ top: 10, left: 10 }}
        />
        <img src={icon_2} alt='char' className={`icon2 ${!icon2 && 'unactive'}`}
          onClick={() => icon2 && this.incorrect(17, 'icon2')}
          style={{ top: 24, left: 130}}
        />
        <img src={icon_3} alt='char' className={`icon3 ${!icon3 && 'unactive'}`}
          onClick={() => icon3 && this.correct(16, 'icon3')}
          style={{ top: 24, left: 240}}
        />
        <img src={icon_4} alt='char' className={`icon4 ${!icon4 && 'unactive'}`}
          onClick={() => icon4 && this.incorrect(17, 'icon4')}
          style={{ top: 24, left: 350}}
        />
        <img src={icon_5} alt='char' className={`icon5 ${!icon5 && 'unactive'}`}
          onClick={() => icon5 && this.incorrect(17, 'icon5')}
          style={{ top: 150, left: 10}}
        />
        <img src={icon_6} alt='char' className={`icon6 ${!icon6 && 'unactive'}`}
          onClick={() => icon6 && this.incorrect(17, 'icon6')}
          style={{ top: 150, left: 130}}
        />
        <img src={icon_7} alt='char' className={`icon7 ${!icon7 && 'unactive'}`}
          onClick={() => icon7 && this.incorrect(17, 'icon7')}
          style={{ top: 150, left: 240}}
        />
        <img src={icon_8} alt='char' className={`icon8 ${!icon8 && 'unactive'}`}
          onClick={() => icon8 && this.incorrect(17, 'icon8')}
          style={{ top: 150, left: 350}}
        />

        <Sound
          autoLoad
          url={audio14}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page16 = (
      <div className='gscene-16'>
        <img src={s15_1} alt='char' className='i-1' style={{ width: '100%', bottom: 0}} />
        <img src={s15_2} alt='char' className='i-2' />
        <img src={heart} alt='char' className='i-3' />
        <Sound
          autoLoad
          url={audio15}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish(19)}
        />
      </div>
    )

    const page17 = (
      <div className='gscene-17'>
        <img src={s16_1} alt='char' className='i-1' style={{ height: '100%', bottom: 0}} />
        <img src={heart} alt='char' className='i-3' />
        <Sound
          autoLoad
          url={audio16}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page18 = (
      <div className='gscene-18'>
        <img src={s17_1} alt='char' className='i-1' />
        <Sound
          autoLoad
          url={audio17}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page19 = (
      <div className='gscene-19'>
        <img src={s18_1} alt='char' className='i-1' />

        <img src={icon_1} alt='char' className={`icon1 ${!icon1 && 'unactive'}`} onClick={() => icon1 && this.incorrect(21, 'icon1')}
          style={{bottom: 20, left: 10}} />
        <img src={icon_2} alt='char' className={`icon2 ${!icon2 && 'unactive'}`} onClick={() => icon2 && this.incorrect(21, 'icon2')}
          style={{bottom: 20, left: 120}} />
        <img src={icon_3} alt='char' className={`icon3 ${!icon3 && 'unactive'}`} onClick={() => icon3 && this.incorrect(21, 'icon3')}
          style={{bottom: 20, left: 220}}/>
        <img src={icon_4} alt='char' className={`icon4 ${!icon4 && 'unactive'}`} onClick={() => icon4 && this.correct(20, 'icon4')}
          style={{ bottom: 20, left: 320}}/>
        <img src={icon_5} alt='char' className={`icon5 ${!icon5 && 'unactive'}`} onClick={() => icon5 && this.incorrect(21, 'icon5')}
          style={{bottom: 20, left: 420}}/>
        <img src={icon_6} alt='char' className={`icon6 ${!icon6 && 'unactive'}`} onClick={() => icon6 && this.incorrect(21, 'icon6')}
          style={{bottom: 20, left: 520}}/>
        <img src={icon_7} alt='char' className={`icon7 ${!icon7 && 'unactive'}`} onClick={() => icon7 && this.incorrect(21, 'icon7')}
          style={{bottom: 20, left: 620}}/>
        <img src={icon_8} alt='char' className={`icon8 ${!icon8 && 'unactive'}`} onClick={() => icon8 && this.incorrect(21, 'icon8')}
          style={{bottom: 20, left: 720}}/>

        <Sound
          autoLoad
          url={audio18}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page20 = (
      <div className='gscene-20'>
        <img src={s19_1} alt='char' className='i-1' style={{ width: '100%', bottom: 0}} />
        <img src={s19_2} alt='char' className='i-2' />
        <img src={heart} alt='char' className='i-3' />
        <Sound
          autoLoad
          url={audio19}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish(22)}
        />
      </div>
    )

    const page21 = (
      <div className='gscene-21'>
        <img src={s20_1} alt='char' className='i-1' style={{ height: '100%', bottom: 0}} />
        <Sound
          autoLoad
          url={audio20}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page22 = (
      <div className='gscene-22'>
        <img src={s21_1} alt='char' className='i-1' />
        <img src={s21_2} alt='char' className='i-2' />
        <img src={s21_3} alt='char' className='i-3' />
        <Sound
          autoLoad
          url={audio21}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page23 = (
      <div className='gscene-23'>
        <img src={s22_1} alt='char' className='i-1'/>
        <img src={s22_2} alt='char' className='i-2'/>

        <img src={icon_1} alt='char' className={`icon1 ${!icon1 && 'unactive'}`}
          onClick={() => icon1 && this.incorrect(25, 'icon1')}
          style={{ top: 20, left: 50 }}
        />
        <img src={icon_2} alt='char' className={`icon2 ${!icon2 && 'unactive'}`}
          onClick={() => icon2 && this.incorrect(25, 'icon2')}
          style={{ top: 150, left: 50}}
        />
        <img src={icon_3} alt='char' className={`icon3 ${!icon3 && 'unactive'}`}
          onClick={() => icon3 && this.incorrect(25, 'icon3')}
          style={{ top: 300, left: 50}}
        />
        <img src={icon_4} alt='char' className={`icon4 ${!icon4 && 'unactive'}`}
          onClick={() => icon4 && this.incorrect(25, 'icon4')}
          style={{ top: 450, left: 50}}
        />
        <img src={icon_5} alt='char' className={`icon5 ${!icon5 && 'unactive'}`}
          onClick={() => icon5 && this.incorrect(25, 'icon5')}
          style={{ top: 20, right: 50}}
        />
        <img src={icon_6} alt='char' className={`icon6 ${!icon6 && 'unactive'}`}
          onClick={() => icon6 && this.incorrect(25, 'icon6')}
          style={{ top: 150, right: 50}}
        />
        <img src={icon_7} alt='char' className={`icon7 ${!icon7 && 'unactive'}`}
          onClick={() => icon7 && this.incorrect(25, 'icon7')}
          style={{ top: 300, right: 50}}
        />
        <img src={icon_8} alt='char' className={`icon8 ${!icon8 && 'unactive'}`}
          onClick={() => icon8 && this.correct(24, 'icon8')}
          style={{ top: 450, right: 50}}
        />
        <Sound
          autoLoad
          url={audio22}
          playStatus={this.state.sound}
          onFinishedPlaying={() => this.finish()}
        />
      </div>
    )

    const page24 = (
      <div className='gscene-24' style={{ backgroundImage: `url(${city})`}}>
        <img src={s23_1} alt='char' className='i-1' />

        <h3 style={{top: 50, right: 170, color: 'var(--white)'}}>SCORE</h3>
        <h2 className='score' style={{top: 120, right: 100, left: 'auto', backgroundColor: 'white', fontSize: 60, width: 230}}>{score}</h2>

        <button className='play-again' onClick={this.playAgain}>PLAY AGAIN</button>
        <Sound
          autoLoad
          url={audio23}
          playStatus={this.state.sound}
        />
      </div>
    )

    const page25 = (
      <div className='gscene-25'>
        <img src={s24_1} alt='char' className='i-1' style={{ height: '100%', bottom: 0, right: 0}} />

        <h3 style={{top: 50, right: 170, color: 'var(--black)'}}>SCORE</h3>
        <h2 className='score' style={{top: 120, right: 100, left: 'auto', backgroundColor: 'white', fontSize: 60, width: 230}}>{score}</h2>

        <button className='play-again' onClick={this.playAgain} style={{ right: 59 }}>PLAY AGAIN</button>
        <Sound
          autoLoad
          url={audio24}
          playStatus={this.state.sound}
        />
      </div>
    )

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED,
      stop: this.state.sound === Sound.status.STOPPED
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
        {page === 15 && page15}
        {page === 16 && page16}
        {page === 17 && page17}
        {page === 18 && page18}
        {page === 19 && page19}
        {page === 20 && page20}
        {page === 21 && page21}
        {page === 22 && page22}
        {page === 23 && page23}
        {page === 24 && page24}
        {page === 25 && page25}

        <Actions
          home={page < 3}
          next={page < 3 && page !== 0}
          prev={page <= 3 && page !== 0}
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
          lastPage={25}
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
