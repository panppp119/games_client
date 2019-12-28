import React from 'react'
import Sound from 'react-sound'

import Actions from 'components/Actions'

import char from '../imgs/gun.png'
import name from '../imgs/name.png'
import char_w from '../imgs/char_w.png'
import char_p from '../imgs/char_p.png'
import char_g from '../imgs/char_g.png'
import head_w from '../imgs/head_w.png'
import head_p from '../imgs/head_p.png'
import head_g from '../imgs/head_g.png'
import target_w from '../imgs/target_w.png'
import target_p from '../imgs/target_p.png'
import target_g from '../imgs/target_g.png'
import bg from '../imgs/bg.png'
import audio from '../bg-audio.mp3'
import laser from '../laser.wav'
import heart from '../imgs/life.png'
import bubble from '../imgs/bubble.png'
import word1 from '../imgs/1.png'
import word2 from '../imgs/2.png'
import word3 from '../imgs/3.png'
import word4 from '../imgs/4.png'
import word5 from '../imgs/5.png'
import word6 from '../imgs/6.png'
import word7 from '../imgs/7.png'
import word8 from '../imgs/8.png'
import word9 from '../imgs/9.png'
import word10 from '../imgs/10.png'
import word11 from '../imgs/11.png'
import word12 from '../imgs/12.png'
import word13 from '../imgs/13.png'
import word14 from '../imgs/14.png'
import word15 from '../imgs/15.png'
import word16 from '../imgs/16.png'
import word17 from '../imgs/17.png'
import word18 from '../imgs/18.png'
import word19 from '../imgs/19.png'
import word20 from '../imgs/20.png'
import word21 from '../imgs/21.png'
import word22 from '../imgs/22.png'
import word23 from '../imgs/23.png'
import word24 from '../imgs/24.png'
import word25 from '../imgs/25.png'
import word26 from '../imgs/26.png'
import word27 from '../imgs/27.png'
import word28 from '../imgs/28.png'
import word29 from '../imgs/29.png'
import word30 from '../imgs/30.png'
import word31 from '../imgs/31.png'
import word32 from '../imgs/32.png'
import word33 from '../imgs/33.png'
import word34 from '../imgs/34.png'
import word35 from '../imgs/35.png'
import word36 from '../imgs/36.png'
import word37 from '../imgs/37.png'
import word38 from '../imgs/38.png'
import word39 from '../imgs/39.png'
import word40 from '../imgs/40.png'
import word41 from '../imgs/41.png'
import word42 from '../imgs/42.png'
import word43 from '../imgs/43.png'
import word44 from '../imgs/44.png'
import word45 from '../imgs/45.png'
import word46 from '../imgs/46.png'
import word47 from '../imgs/47.png'
import word48 from '../imgs/48.png'
import word49 from '../imgs/49.png'
import word50 from '../imgs/50.png'
import word51 from '../imgs/51.png'
import word52 from '../imgs/52.png'
import word53 from '../imgs/53.png'
import word54 from '../imgs/54.png'
import word55 from '../imgs/55.png'
import word56 from '../imgs/56.png'
import word57 from '../imgs/57.png'
import word58 from '../imgs/58.png'
import word59 from '../imgs/59.png'
import word60 from '../imgs/60.png'
import word61 from '../imgs/61.png'
import word62 from '../imgs/62.png'
import word63 from '../imgs/63.png'
import word64 from '../imgs/64.png'
import word65 from '../imgs/65.png'
import word66 from '../imgs/66.png'
import word67 from '../imgs/67.png'
import word68 from '../imgs/68.png'
import word69 from '../imgs/69.png'
import word70 from '../imgs/70.png'
import word71 from '../imgs/71.png'
import word72 from '../imgs/72.png'
import word73 from '../imgs/73.png'
import word74 from '../imgs/74.png'
import word75 from '../imgs/75.png'
import word76 from '../imgs/76.png'
import word77 from '../imgs/77.png'
import word78 from '../imgs/78.png'
import word79 from '../imgs/79.png'
import word80 from '../imgs/80.png'
import word81 from '../imgs/81.png'
import word82 from '../imgs/82.png'
import word83 from '../imgs/83.png'
import word84 from '../imgs/84.png'
import word85 from '../imgs/85.png'
import word86 from '../imgs/86.png'
import word87 from '../imgs/87.png'
import word88 from '../imgs/88.png'
import word89 from '../imgs/89.png'
import word90 from '../imgs/90.png'
import word91 from '../imgs/91.png'
import word92 from '../imgs/92.png'
import word93 from '../imgs/93.png'
import word94 from '../imgs/94.png'
import word95 from '../imgs/95.png'
import word96 from '../imgs/96.png'
import word97 from '../imgs/97.png'
import word98 from '../imgs/98.png'
import word99 from '../imgs/99.png'
import word100 from '../imgs/100.png'
import word101 from '../imgs/101.png'
import word102 from '../imgs/102.png'

var myInterval

class Scene2 extends React.Component {
  state = {
    page: 0,
    playerName: '',
    score: 0,
    time: 100,
    timer: 100,
    pause: false,
    sound: 'PLAYING',
    type: 'white',
    life: 5,
    rd1: Math.floor(Math.random() * 102),
    rd2: 0,
    rd3: 0,
    rd4: 0,
    rd5: 0,
    re6: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', e => {
      this.mousemove(e.x, e.y)
    })

    this.random()

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
      page: 0,
      playerName: '',
      score: 0,
      time: 100,
      timer: 100,
      pause: false,
      sound: 'PLAYING',
      type: 'white',
      life: 5,
      rd1: Math.floor(Math.random() * 102),
      rd2: 0,
      rd3: 0,
      rd4: 0,
      rd5: 0,
      re6: 0,
    })
  }

  random (name) {
    var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0

    setInterval(() => {
      a++
      if (a < 2 && !this.state.pause) {
        this.setState({ rd1: Math.floor(Math.random() * 102)})
      }
      else {
        this.setState({ rd1: 0 })
      }

      if (a === 2) {
        a = 0
      }
    }, 3000)

    setTimeout(() => {
      setInterval(() => {
        b++
        if (b < 2 && !this.state.pause) {
          this.setState({ rd2: Math.floor(Math.random() * 102)})
        }
        else {
          this.setState({ rd2: 0 })
        }

        if (b === 2) {
          b = 0
        }
      }, 3000)
    }, 1000)

    setTimeout(() => {
      setInterval(() => {
        c++
        if (c < 2 && !this.state.pause) {
          this.setState({ rd3: Math.floor(Math.random() * 102)})
        }
        else {
          this.setState({ rd3: 0 })
        }

        if (c === 2) {
          c = 0
        }
      }, 3000)
    }, 2000)

    setTimeout(() => {
      setInterval(() => {
        d++
        if (d < 2 && !this.state.pause) {
          this.setState({ rd4: Math.floor(Math.random() * 102)})
        }
        else {
          this.setState({ rd4: 0 })
        }

        if (d === 2) {
          d = 0
        }
      }, 3000)
    }, 3000)

    setTimeout(() => {
      setInterval(() => {
        e++
        if (e < 2 && !this.state.pause) {
          this.setState({ rd5: Math.floor(Math.random() * 102)})
        }
        else {
          this.setState({ rd5: 0 })
        }

        if (e === 2) {
          e = 0
        }
      }, 3000)
    }, 4000)

    setTimeout(() => {
      setInterval(() => {
        f++
        if (f < 2 && !this.state.pause) {
          this.setState({ rd6: Math.floor(Math.random() * 102)})
        }
        else {
          this.setState({ rd6: 0 })
        }

        if (f === 2) {
          f = 0
        }
      }, 3000)
    }, 5000)
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
    this.changePage(0)
    this.setState({ score: 0, life: 5 })
  }

  handleClickBubble = (name, num, audio) => {
    const { score } = this.state

    var laser = new Audio(audio);
    laser.play()

    var random
    switch (name) {
      case 'img1': random = 'rd1'
        break
      case 'img2': random = 'rd2'
        break
      case 'img3': random = 'rd3'
        break
      case 'img4': random = 'rd4'
        break
      case 'img5': random = 'rd5'
        break
      case 'img6': random = 'rd6'
        break
      default: break
    }

    if (
      num === 2 ||
      num === 3 ||
      num === 4 ||
      num === 5 ||
      num === 6 ||
      num === 7 ||
      num === 8 ||
      num === 9 ||
      num === 10 ||
      num === 11 ||
      num === 12 ||
      num === 13 ||
      num === 14 ||
      num === 15 ||
      num === 16 ||
      num === 17 ||
      num === 18 ||
      num === 19 ||
      num === 20 ||
      num === 21 ||
      num === 22 ||
      num === 23 ||
      num === 24 ||
      num === 25 ||
      num === 26 ||
      num === 27 ||
      num === 28 ||
      num === 29 ||
      num === 30 ||
      num === 31 ||
      num === 32 ||
      num === 33 ||
      num === 34 ||
      num === 36 ||
      num === 36 ||
      num === 37 ||
      num === 69 ||
      num === 71 ||
      num === 76 ||
      num === 77 ||
      num === 78 ||
      num === 79 ||
      num === 80 ||
      num === 82 ||
      num === 85 ||
      num === 89 ||
      num === 91 ||
      num === 96 ||
      num === 97 ||
      num === 98 ||
      num === 99 ||
      num === 100 ||
      num === 102
    ) {
      this.setState({ score: score + 5, [random]: Math.floor(Math.random() * 102) })
    }
    else {
      if (this.state.life === 1) {
        this.setState({ score: score > 0 ? score - 1 : 0 })
        this.changePage(4)
        clearInterval(myInterval)
      }
      else {
        this.setState({
          score: score > 0 ? score - 1 : 0,
          life: this.state.life - 1,
          [random]: Math.floor(Math.random() * 102)
        })
      }
    }
  }

  render () {
    const { changeScene } = this.props
    const { page, playerName, timer, type, score, life, rd1, rd2, rd3, rd4, rd5, rd6 } = this.state
    const scene = 2
    var img1, img2, img3, img4, img5, img6

    if (rd1 === 1)  img1 = word1
    if (rd1 === 2) img1 = word2
    if (rd1 === 3) img1 = word3
    if (rd1 === 4) img1 = word4
    if (rd1 === 5) img1 = word5
    if (rd1 === 6) img1 = word6
    if (rd1 === 7) img1 = word7
    if (rd1 === 8) img1 = word8
    if (rd1 === 9) img1 = word9
    if (rd1 === 10) img1 = word10
    if (rd1 === 11) img1 = word11
    if (rd1 === 12) img1 = word12
    if (rd1 === 13) img1 = word13
    if (rd1 === 14) img1 = word14
    if (rd1 === 15) img1 = word15
    if (rd1 === 16) img1 = word16
    if (rd1 === 17) img1 = word17
    if (rd1 === 18) img1 = word18
    if (rd1 === 19) img1 = word19
    if (rd1 === 20) img1 = word20
    if (rd1 === 21) img1 = word21
    if (rd1 === 22) img1 = word22
    if (rd1 === 23) img1 = word23
    if (rd1 === 24) img1 = word24
    if (rd1 === 25) img1 = word25
    if (rd1 === 26) img1 = word26
    if (rd1 === 27) img1 = word27
    if (rd1 === 28) img1 = word28
    if (rd1 === 29) img1 = word29
    if (rd1 === 30) img1 = word30
    if (rd1 === 31) img1 = word31
    if (rd1 === 32) img1 = word32
    if (rd1 === 33) img1 = word33
    if (rd1 === 34) img1 = word34
    if (rd1 === 35) img1 = word35
    if (rd1 === 36) img1 = word36
    if (rd1 === 37) img1 = word37
    if (rd1 === 38) img1 = word38
    if (rd1 === 39) img1 = word39
    if (rd1 === 40) img1 = word40
    if (rd1 === 41) img1 = word41
    if (rd1 === 42) img1 = word42
    if (rd1 === 43) img1 = word43
    if (rd1 === 44) img1 = word44
    if (rd1 === 45) img1 = word45
    if (rd1 === 46) img1 = word46
    if (rd1 === 47) img1 = word47
    if (rd1 === 48) img1 = word48
    if (rd1 === 49) img1 = word49
    if (rd1 === 50) img1 = word50
    if (rd1 === 51) img1 = word51
    if (rd1 === 52) img1 = word52
    if (rd1 === 53) img1 = word53
    if (rd1 === 54) img1 = word54
    if (rd1 === 55) img1 = word55
    if (rd1 === 56) img1 = word56
    if (rd1 === 57) img1 = word57
    if (rd1 === 58) img1 = word58
    if (rd1 === 59) img1 = word59
    if (rd1 === 60) img1 = word60
    if (rd1 === 61) img1 = word61
    if (rd1 === 62) img1 = word62
    if (rd1 === 63) img1 = word63
    if (rd1 === 64) img1 = word64
    if (rd1 === 65) img1 = word65
    if (rd1 === 66) img1 = word66
    if (rd1 === 67) img1 = word67
    if (rd1 === 68) img1 = word68
    if (rd1 === 69) img1 = word69
    if (rd1 === 70) img1 = word70
    if (rd1 === 71) img1 = word71
    if (rd1 === 72) img1 = word72
    if (rd1 === 73) img1 = word73
    if (rd1 === 74) img1 = word74
    if (rd1 === 75) img1 = word75
    if (rd1 === 76) img1 = word76
    if (rd1 === 77) img1 = word77
    if (rd1 === 78) img1 = word78
    if (rd1 === 79) img1 = word79
    if (rd1 === 80) img1 = word80
    if (rd1 === 81) img1 = word81
    if (rd1 === 82) img1 = word82
    if (rd1 === 83) img1 = word83
    if (rd1 === 84) img1 = word84
    if (rd1 === 85) img1 = word85
    if (rd1 === 86) img1 = word86
    if (rd1 === 87) img1 = word87
    if (rd1 === 88) img1 = word88
    if (rd1 === 89) img1 = word89
    if (rd1 === 90) img1 = word90
    if (rd1 === 91) img1 = word91
    if (rd1 === 92) img1 = word92
    if (rd1 === 93) img1 = word93
    if (rd1 === 94) img1 = word94
    if (rd1 === 95) img1 = word95
    if (rd1 === 96) img1 = word96
    if (rd1 === 97) img1 = word97
    if (rd1 === 98) img1 = word98
    if (rd1 === 99) img1 = word99
    if (rd1 === 100) img1 = word100
    if (rd1 === 101) img1 = word101
    if (rd1 === 102) img1 = word102

    if (rd2 === 1)  img2 = word1
    if (rd2 === 2) img2 = word2
    if (rd2 === 3) img2 = word3
    if (rd2 === 4) img2 = word4
    if (rd2 === 5) img2 = word5
    if (rd2 === 6) img2 = word6
    if (rd2 === 7) img2 = word7
    if (rd2 === 8) img2 = word8
    if (rd2 === 9) img2 = word9
    if (rd2 === 10) img2 = word10
    if (rd2 === 11) img2 = word11
    if (rd2 === 12) img2 = word12
    if (rd2 === 13) img2 = word13
    if (rd2 === 14) img2 = word14
    if (rd2 === 15) img2 = word15
    if (rd2 === 16) img2 = word16
    if (rd2 === 17) img2 = word17
    if (rd2 === 18) img2 = word18
    if (rd2 === 19) img2 = word19
    if (rd2 === 20) img2 = word20
    if (rd2 === 21) img2 = word21
    if (rd2 === 22) img2 = word22
    if (rd2 === 23) img2 = word23
    if (rd2 === 24) img2 = word24
    if (rd2 === 25) img2 = word25
    if (rd2 === 26) img2 = word26
    if (rd2 === 27) img2 = word27
    if (rd2 === 28) img2 = word28
    if (rd2 === 29) img2 = word29
    if (rd2 === 30) img2 = word30
    if (rd2 === 31) img2 = word31
    if (rd2 === 32) img2 = word32
    if (rd2 === 33) img2 = word33
    if (rd2 === 34) img2 = word34
    if (rd2 === 35) img2 = word35
    if (rd2 === 36) img2 = word36
    if (rd2 === 37) img2 = word37
    if (rd2 === 38) img2 = word38
    if (rd2 === 39) img2 = word39
    if (rd2 === 40) img2 = word40
    if (rd2 === 41) img2 = word41
    if (rd2 === 42) img2 = word42
    if (rd2 === 43) img2 = word43
    if (rd2 === 44) img2 = word44
    if (rd2 === 45) img2 = word45
    if (rd2 === 46) img2 = word46
    if (rd2 === 47) img2 = word47
    if (rd2 === 48) img2 = word48
    if (rd2 === 49) img2 = word49
    if (rd2 === 50) img2 = word50
    if (rd2 === 51) img2 = word51
    if (rd2 === 52) img2 = word52
    if (rd2 === 53) img2 = word53
    if (rd2 === 54) img2 = word54
    if (rd2 === 55) img2 = word55
    if (rd2 === 56) img2 = word56
    if (rd2 === 57) img2 = word57
    if (rd2 === 58) img2 = word58
    if (rd2 === 59) img2 = word59
    if (rd2 === 60) img2 = word60
    if (rd2 === 61) img2 = word61
    if (rd2 === 62) img2 = word62
    if (rd2 === 63) img2 = word63
    if (rd2 === 64) img2 = word64
    if (rd2 === 65) img2 = word65
    if (rd2 === 66) img2 = word66
    if (rd2 === 67) img2 = word67
    if (rd2 === 68) img2 = word68
    if (rd2 === 69) img2 = word69
    if (rd2 === 70) img2 = word70
    if (rd2 === 71) img2 = word71
    if (rd2 === 72) img2 = word72
    if (rd2 === 73) img2 = word73
    if (rd2 === 74) img2 = word74
    if (rd2 === 75) img2 = word75
    if (rd2 === 76) img2 = word76
    if (rd2 === 77) img2 = word77
    if (rd2 === 78) img2 = word78
    if (rd2 === 79) img2 = word79
    if (rd2 === 80) img2 = word80
    if (rd2 === 81) img2 = word81
    if (rd2 === 82) img2 = word82
    if (rd2 === 83) img2 = word83
    if (rd2 === 84) img2 = word84
    if (rd2 === 85) img2 = word85
    if (rd2 === 86) img2 = word86
    if (rd2 === 87) img2 = word87
    if (rd2 === 88) img2 = word88
    if (rd2 === 89) img2 = word89
    if (rd2 === 90) img2 = word90
    if (rd2 === 91) img2 = word91
    if (rd2 === 92) img2 = word92
    if (rd2 === 93) img2 = word93
    if (rd2 === 94) img2 = word94
    if (rd2 === 95) img2 = word95
    if (rd2 === 96) img2 = word96
    if (rd2 === 97) img2 = word97
    if (rd2 === 98) img2 = word98
    if (rd2 === 99) img2 = word99
    if (rd2 === 100) img2 = word100
    if (rd2 === 101) img2 = word101
    if (rd2 === 102) img2 = word102

    if (rd3 === 1)  img3 = word1
    if (rd3 === 2) img3 = word2
    if (rd3 === 3) img3 = word3
    if (rd3 === 4) img3 = word4
    if (rd3 === 5) img3 = word5
    if (rd3 === 6) img3 = word6
    if (rd3 === 7) img3 = word7
    if (rd3 === 8) img3 = word8
    if (rd3 === 9) img3 = word9
    if (rd3 === 10) img3 = word10
    if (rd3 === 11) img3 = word11
    if (rd3 === 12) img3 = word12
    if (rd3 === 13) img3 = word13
    if (rd3 === 14) img3 = word14
    if (rd3 === 15) img3 = word15
    if (rd3 === 16) img3 = word16
    if (rd3 === 17) img3 = word17
    if (rd3 === 18) img3 = word18
    if (rd3 === 19) img3 = word19
    if (rd3 === 20) img3 = word20
    if (rd3 === 21) img3 = word21
    if (rd3 === 22) img3 = word22
    if (rd3 === 23) img3 = word23
    if (rd3 === 24) img3 = word24
    if (rd3 === 25) img3 = word25
    if (rd3 === 26) img3 = word26
    if (rd3 === 27) img3 = word27
    if (rd3 === 28) img3 = word28
    if (rd3 === 29) img3 = word29
    if (rd3 === 30) img3 = word30
    if (rd3 === 31) img3 = word31
    if (rd3 === 32) img3 = word32
    if (rd3 === 33) img3 = word33
    if (rd3 === 34) img3 = word34
    if (rd3 === 35) img3 = word35
    if (rd3 === 36) img3 = word36
    if (rd3 === 37) img3 = word37
    if (rd3 === 38) img3 = word38
    if (rd3 === 39) img3 = word39
    if (rd3 === 40) img3 = word40
    if (rd3 === 41) img3 = word41
    if (rd3 === 42) img3 = word42
    if (rd3 === 43) img3 = word43
    if (rd3 === 44) img3 = word44
    if (rd3 === 45) img3 = word45
    if (rd3 === 46) img3 = word46
    if (rd3 === 47) img3 = word47
    if (rd3 === 48) img3 = word48
    if (rd3 === 49) img3 = word49
    if (rd3 === 50) img3 = word50
    if (rd3 === 51) img3 = word51
    if (rd3 === 52) img3 = word52
    if (rd3 === 53) img3 = word53
    if (rd3 === 54) img3 = word54
    if (rd3 === 55) img3 = word55
    if (rd3 === 56) img3 = word56
    if (rd3 === 57) img3 = word57
    if (rd3 === 58) img3 = word58
    if (rd3 === 59) img3 = word59
    if (rd3 === 60) img3 = word60
    if (rd3 === 61) img3 = word61
    if (rd3 === 62) img3 = word62
    if (rd3 === 63) img3 = word63
    if (rd3 === 64) img3 = word64
    if (rd3 === 65) img3 = word65
    if (rd3 === 66) img3 = word66
    if (rd3 === 67) img3 = word67
    if (rd3 === 68) img3 = word68
    if (rd3 === 69) img3 = word69
    if (rd3 === 70) img3 = word70
    if (rd3 === 71) img3 = word71
    if (rd3 === 72) img3 = word72
    if (rd3 === 73) img3 = word73
    if (rd3 === 74) img3 = word74
    if (rd3 === 75) img3 = word75
    if (rd3 === 76) img3 = word76
    if (rd3 === 77) img3 = word77
    if (rd3 === 78) img3 = word78
    if (rd3 === 79) img3 = word79
    if (rd3 === 80) img3 = word80
    if (rd3 === 81) img3 = word81
    if (rd3 === 82) img3 = word82
    if (rd3 === 83) img3 = word83
    if (rd3 === 84) img3 = word84
    if (rd3 === 85) img3 = word85
    if (rd3 === 86) img3 = word86
    if (rd3 === 87) img3 = word87
    if (rd3 === 88) img3 = word88
    if (rd3 === 89) img3 = word89
    if (rd3 === 90) img3 = word90
    if (rd3 === 91) img3 = word91
    if (rd3 === 92) img3 = word92
    if (rd3 === 93) img3 = word93
    if (rd3 === 94) img3 = word94
    if (rd3 === 95) img3 = word95
    if (rd3 === 96) img3 = word96
    if (rd3 === 97) img3 = word97
    if (rd3 === 98) img3 = word98
    if (rd3 === 99) img3 = word99
    if (rd3 === 100) img3 = word100
    if (rd3 === 101) img3 = word101
    if (rd3 === 102) img3 = word102

    if (rd4 === 1)  img4 = word1
    if (rd4 === 2) img4 = word2
    if (rd4 === 3) img4 = word3
    if (rd4 === 4) img4 = word4
    if (rd4 === 5) img4 = word5
    if (rd4 === 6) img4 = word6
    if (rd4 === 7) img4 = word7
    if (rd4 === 8) img4 = word8
    if (rd4 === 9) img4 = word9
    if (rd4 === 10) img4 = word10
    if (rd4 === 11) img4 = word11
    if (rd4 === 12) img4 = word12
    if (rd4 === 13) img4 = word13
    if (rd4 === 14) img4 = word14
    if (rd4 === 15) img4 = word15
    if (rd4 === 16) img4 = word16
    if (rd4 === 17) img4 = word17
    if (rd4 === 18) img4 = word18
    if (rd4 === 19) img4 = word19
    if (rd4 === 20) img4 = word20
    if (rd4 === 21) img4 = word21
    if (rd4 === 22) img4 = word22
    if (rd4 === 23) img4 = word23
    if (rd4 === 24) img4 = word24
    if (rd4 === 25) img4 = word25
    if (rd4 === 26) img4 = word26
    if (rd4 === 27) img4 = word27
    if (rd4 === 28) img4 = word28
    if (rd4 === 29) img4 = word29
    if (rd4 === 30) img4 = word30
    if (rd4 === 31) img4 = word31
    if (rd4 === 32) img4 = word32
    if (rd4 === 33) img4 = word33
    if (rd4 === 34) img4 = word34
    if (rd4 === 35) img4 = word35
    if (rd4 === 36) img4 = word36
    if (rd4 === 37) img4 = word37
    if (rd4 === 38) img4 = word38
    if (rd4 === 39) img4 = word39
    if (rd4 === 40) img4 = word40
    if (rd4 === 41) img4 = word41
    if (rd4 === 42) img4 = word42
    if (rd4 === 43) img4 = word43
    if (rd4 === 44) img4 = word44
    if (rd4 === 45) img4 = word45
    if (rd4 === 46) img4 = word46
    if (rd4 === 47) img4 = word47
    if (rd4 === 48) img4 = word48
    if (rd4 === 49) img4 = word49
    if (rd4 === 50) img4 = word50
    if (rd4 === 51) img4 = word51
    if (rd4 === 52) img4 = word52
    if (rd4 === 53) img4 = word53
    if (rd4 === 54) img4 = word54
    if (rd4 === 55) img4 = word55
    if (rd4 === 56) img4 = word56
    if (rd4 === 57) img4 = word57
    if (rd4 === 58) img4 = word58
    if (rd4 === 59) img4 = word59
    if (rd4 === 60) img4 = word60
    if (rd4 === 61) img4 = word61
    if (rd4 === 62) img4 = word62
    if (rd4 === 63) img4 = word63
    if (rd4 === 64) img4 = word64
    if (rd4 === 65) img4 = word65
    if (rd4 === 66) img4 = word66
    if (rd4 === 67) img4 = word67
    if (rd4 === 68) img4 = word68
    if (rd4 === 69) img4 = word69
    if (rd4 === 70) img4 = word70
    if (rd4 === 71) img4 = word71
    if (rd4 === 72) img4 = word72
    if (rd4 === 73) img4 = word73
    if (rd4 === 74) img4 = word74
    if (rd4 === 75) img4 = word75
    if (rd4 === 76) img4 = word76
    if (rd4 === 77) img4 = word77
    if (rd4 === 78) img4 = word78
    if (rd4 === 79) img4 = word79
    if (rd4 === 80) img4 = word80
    if (rd4 === 81) img4 = word81
    if (rd4 === 82) img4 = word82
    if (rd4 === 83) img4 = word83
    if (rd4 === 84) img4 = word84
    if (rd4 === 85) img4 = word85
    if (rd4 === 86) img4 = word86
    if (rd4 === 87) img4 = word87
    if (rd4 === 88) img4 = word88
    if (rd4 === 89) img4 = word89
    if (rd4 === 90) img4 = word90
    if (rd4 === 91) img4 = word91
    if (rd4 === 92) img4 = word92
    if (rd4 === 93) img4 = word93
    if (rd4 === 94) img4 = word94
    if (rd4 === 95) img4 = word95
    if (rd4 === 96) img4 = word96
    if (rd4 === 97) img4 = word97
    if (rd4 === 98) img4 = word98
    if (rd4 === 99) img4 = word99
    if (rd4 === 100) img4 = word100
    if (rd4 === 101) img4 = word101
    if (rd4 === 102) img4 = word102

    if (rd5 === 1)  img5 = word1
    if (rd5 === 2) img5 = word2
    if (rd5 === 3) img5 = word3
    if (rd5 === 4) img5 = word4
    if (rd5 === 5) img5 = word5
    if (rd5 === 6) img5 = word6
    if (rd5 === 7) img5 = word7
    if (rd5 === 8) img5 = word8
    if (rd5 === 9) img5 = word9
    if (rd5 === 10) img5 = word10
    if (rd5 === 11) img5 = word11
    if (rd5 === 12) img5 = word12
    if (rd5 === 13) img5 = word13
    if (rd5 === 14) img5 = word14
    if (rd5 === 15) img5 = word15
    if (rd5 === 16) img5 = word16
    if (rd5 === 17) img5 = word17
    if (rd5 === 18) img5 = word18
    if (rd5 === 19) img5 = word19
    if (rd5 === 20) img5 = word20
    if (rd5 === 21) img5 = word21
    if (rd5 === 22) img5 = word22
    if (rd5 === 23) img5 = word23
    if (rd5 === 24) img5 = word24
    if (rd5 === 25) img5 = word25
    if (rd5 === 26) img5 = word26
    if (rd5 === 27) img5 = word27
    if (rd5 === 28) img5 = word28
    if (rd5 === 29) img5 = word29
    if (rd5 === 30) img5 = word30
    if (rd5 === 31) img5 = word31
    if (rd5 === 32) img5 = word32
    if (rd5 === 33) img5 = word33
    if (rd5 === 34) img5 = word34
    if (rd5 === 35) img5 = word35
    if (rd5 === 36) img5 = word36
    if (rd5 === 37) img5 = word37
    if (rd5 === 38) img5 = word38
    if (rd5 === 39) img5 = word39
    if (rd5 === 40) img5 = word40
    if (rd5 === 41) img5 = word41
    if (rd5 === 42) img5 = word42
    if (rd5 === 43) img5 = word43
    if (rd5 === 44) img5 = word44
    if (rd5 === 45) img5 = word45
    if (rd5 === 46) img5 = word46
    if (rd5 === 47) img5 = word47
    if (rd5 === 48) img5 = word48
    if (rd5 === 49) img5 = word49
    if (rd5 === 50) img5 = word50
    if (rd5 === 51) img5 = word51
    if (rd5 === 52) img5 = word52
    if (rd5 === 53) img5 = word53
    if (rd5 === 54) img5 = word54
    if (rd5 === 55) img5 = word55
    if (rd5 === 56) img5 = word56
    if (rd5 === 57) img5 = word57
    if (rd5 === 58) img5 = word58
    if (rd5 === 59) img5 = word59
    if (rd5 === 60) img5 = word60
    if (rd5 === 61) img5 = word61
    if (rd5 === 62) img5 = word62
    if (rd5 === 63) img5 = word63
    if (rd5 === 64) img5 = word64
    if (rd5 === 65) img5 = word65
    if (rd5 === 66) img5 = word66
    if (rd5 === 67) img5 = word67
    if (rd5 === 68) img5 = word68
    if (rd5 === 69) img5 = word69
    if (rd5 === 70) img5 = word70
    if (rd5 === 71) img5 = word71
    if (rd5 === 72) img5 = word72
    if (rd5 === 73) img5 = word73
    if (rd5 === 74) img5 = word74
    if (rd5 === 75) img5 = word75
    if (rd5 === 76) img5 = word76
    if (rd5 === 77) img5 = word77
    if (rd5 === 78) img5 = word78
    if (rd5 === 79) img5 = word79
    if (rd5 === 80) img5 = word80
    if (rd5 === 81) img5 = word81
    if (rd5 === 82) img5 = word82
    if (rd5 === 83) img5 = word83
    if (rd5 === 84) img5 = word84
    if (rd5 === 85) img5 = word85
    if (rd5 === 86) img5 = word86
    if (rd5 === 87) img5 = word87
    if (rd5 === 88) img5 = word88
    if (rd5 === 89) img5 = word89
    if (rd5 === 90) img5 = word90
    if (rd5 === 91) img5 = word91
    if (rd5 === 92) img5 = word92
    if (rd5 === 93) img5 = word93
    if (rd5 === 94) img5 = word94
    if (rd5 === 95) img5 = word95
    if (rd5 === 96) img5 = word96
    if (rd5 === 97) img5 = word97
    if (rd5 === 98) img5 = word98
    if (rd5 === 99) img5 = word99
    if (rd5 === 100) img5 = word100
    if (rd5 === 101) img5 = word101
    if (rd5 === 102) img5 = word102

    if (rd6 === 1)  img6 = word1
    if (rd6 === 2) img6 = word2
    if (rd6 === 3) img6 = word3
    if (rd6 === 4) img6 = word4
    if (rd6 === 5) img6 = word5
    if (rd6 === 6) img6 = word6
    if (rd6 === 7) img6 = word7
    if (rd6 === 8) img6 = word8
    if (rd6 === 9) img6 = word9
    if (rd6 === 10) img6 = word10
    if (rd6 === 11) img6 = word11
    if (rd6 === 12) img6 = word12
    if (rd6 === 13) img6 = word13
    if (rd6 === 14) img6 = word14
    if (rd6 === 15) img6 = word15
    if (rd6 === 16) img6 = word16
    if (rd6 === 17) img6 = word17
    if (rd6 === 18) img6 = word18
    if (rd6 === 19) img6 = word19
    if (rd6 === 20) img6 = word20
    if (rd6 === 21) img6 = word21
    if (rd6 === 22) img6 = word22
    if (rd6 === 23) img6 = word23
    if (rd6 === 24) img6 = word24
    if (rd6 === 25) img6 = word25
    if (rd6 === 26) img6 = word26
    if (rd6 === 27) img6 = word27
    if (rd6 === 28) img6 = word28
    if (rd6 === 29) img6 = word29
    if (rd6 === 30) img6 = word30
    if (rd6 === 31) img6 = word31
    if (rd6 === 32) img6 = word32
    if (rd6 === 33) img6 = word33
    if (rd6 === 34) img6 = word34
    if (rd6 === 35) img6 = word35
    if (rd6 === 36) img6 = word36
    if (rd6 === 37) img6 = word37
    if (rd6 === 38) img6 = word38
    if (rd6 === 39) img6 = word39
    if (rd6 === 40) img6 = word40
    if (rd6 === 41) img6 = word41
    if (rd6 === 42) img6 = word42
    if (rd6 === 43) img6 = word43
    if (rd6 === 44) img6 = word44
    if (rd6 === 45) img6 = word45
    if (rd6 === 46) img6 = word46
    if (rd6 === 47) img6 = word47
    if (rd6 === 48) img6 = word48
    if (rd6 === 49) img6 = word49
    if (rd6 === 50) img6 = word50
    if (rd6 === 51) img6 = word51
    if (rd6 === 52) img6 = word52
    if (rd6 === 53) img6 = word53
    if (rd6 === 54) img6 = word54
    if (rd6 === 55) img6 = word55
    if (rd6 === 56) img6 = word56
    if (rd6 === 57) img6 = word57
    if (rd6 === 58) img6 = word58
    if (rd6 === 59) img6 = word59
    if (rd6 === 60) img6 = word60
    if (rd6 === 61) img6 = word61
    if (rd6 === 62) img6 = word62
    if (rd6 === 63) img6 = word63
    if (rd6 === 64) img6 = word64
    if (rd6 === 65) img6 = word65
    if (rd6 === 66) img6 = word66
    if (rd6 === 67) img6 = word67
    if (rd6 === 68) img6 = word68
    if (rd6 === 69) img6 = word69
    if (rd6 === 70) img6 = word70
    if (rd6 === 71) img6 = word71
    if (rd6 === 72) img6 = word72
    if (rd6 === 73) img6 = word73
    if (rd6 === 74) img6 = word74
    if (rd6 === 75) img6 = word75
    if (rd6 === 76) img6 = word76
    if (rd6 === 77) img6 = word77
    if (rd6 === 78) img6 = word78
    if (rd6 === 79) img6 = word79
    if (rd6 === 80) img6 = word80
    if (rd6 === 81) img6 = word81
    if (rd6 === 82) img6 = word82
    if (rd6 === 83) img6 = word83
    if (rd6 === 84) img6 = word84
    if (rd6 === 85) img6 = word85
    if (rd6 === 86) img6 = word86
    if (rd6 === 87) img6 = word87
    if (rd6 === 88) img6 = word88
    if (rd6 === 89) img6 = word89
    if (rd6 === 90) img6 = word90
    if (rd6 === 91) img6 = word91
    if (rd6 === 92) img6 = word92
    if (rd6 === 93) img6 = word93
    if (rd6 === 94) img6 = word94
    if (rd6 === 95) img6 = word95
    if (rd6 === 96) img6 = word96
    if (rd6 === 97) img6 = word97
    if (rd6 === 98) img6 = word98
    if (rd6 === 99) img6 = word99
    if (rd6 === 100) img6 = word100
    if (rd6 === 101) img6 = word101
    if (rd6 === 102) img6 = word102

    const overlay = (
      <div className='overlay'>
        <button onClick={this.changePause}>RESUME</button>
      </div>
    )

    const page0 = (
      <div className='gscene-0' style={{ backgroundImage: `url(${bg})` }}>
        <img src={char} alt='char' className='char' />
        <img src={name} alt='name' className='name' />

        <button className='start' onClick={() => this.changePage(page + 1)}>PLAY</button>
      </div>
    )

    const page1 = (
      <div className='gscene-1'>
        <h1>HOW TO</h1>
        <img src={head_w} alt="head" style={{ left: 50, top: 150, height: 55 }}/>
        <img src={head_p} alt="head" style={{ left: 150, top: 150, height: 55 }}/>
        <img src={head_g} alt="head" style={{ left: 250, top: 150, height: 55 }}/>
        <img src={target_w} alt="target" style={{ left: 50, top: 240, width: 60 }}/>
        <img src={target_p} alt="target" style={{ left: 150, top: 240, width: 60 }}/>
        <img src={target_g} alt="target" style={{ left: 250, top: 240, width: 60 }}/>
        <img src={heart} alt="heart" style={{ left: 50, top: 337, width: 50 }}/>
        <img src={heart} alt="heart" style={{ left: 110, top: 337, width: 50 }}/>
        <img src={heart} alt="heart" style={{ left: 170, top: 337, width: 50 }}/>
        <img src={heart} alt="heart" style={{ left: 230, top: 337, width: 50 }}/>
        <img src={heart} alt="heart" style={{ left: 290, top: 337, width: 50 }}/>
        <img src={bubble} alt="bubble" style={{ left: 50, top: 407, height: 60 }}/>
        <img src={char} alt="char" className='char'/>
        <p className='c1'>ตัวละครมีให้เลือก 3 แบบ</p>
        <p className='c2'>ขยับเมาส์ในการเล็งเป้าหมาย แล้วกดยิง</p>
        <p className='c3'>พลังชีวิตมีทั้งหมด 5 ชีวิต</p>
        <p className='c4'>จะมีคำต่างๆ อยู่ในเป้าหมาย</p>
        <p className='c6'>
          กดยิงคำไม่สุภาพ คำที่ใช้ผิดตามหลักไวยากรณ์ของภาษาไทย : +5 คะแนน<br/>
กดยิงคำสุภาพ คำที่ใช้ถูกตามหลักไวยากรณ์ของภาษาไทย : หัวใจลด 1 ดวง และ -1 คะแนนต่อคำ
        </p>
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
      <div className='gscene-3' style={{ cursor: `url('${target}'), default` }}>
        <h2 className='time'>TIME: {timer}</h2>
        <h2 className='score'>SCORE: {score}</h2>
        <div className='life'>
          {life >= 1 && <img src={heart} alt='life'/>}
          {life >= 2 && <img src={heart} alt='life'/>}
          {life >= 3 && <img src={heart} alt='life'/>}
          {life >= 4 && <img src={heart} alt='life'/>}
          {life === 5 && <img src={heart} alt='life'/>}
        </div>

        {rd1 !== 0 && <img src={img1} alt={img1} style={{ top: 180, left: 100 , width: 200}}
          onClick={() => this.handleClickBubble('img1', rd1, laser)} />}
        {rd2 !== 0 && <img src={img2} alt={img2} style={{ bottom: 120, left: 100, width: 200 }}
          onClick={() => this.handleClickBubble('img2', rd2, laser)} />}
        {rd3 !== 0 && <img src={img3} alt={img3} style={{ top: 180, right: 100, width: 200 }}
          onClick={() => this.handleClickBubble('img', rd3, laser)} />}
        {rd4 !== 0 && <img src={img4} alt={img4} style={{ bottom: 120, right: 100, width: 200 }}
          onClick={() => this.handleClickBubble('img4', rd4, laser)} />}
        {rd5 !== 0 && <img src={img5} alt={img5} style={{ left: 0, right: 0, margin: 'auto', top: 100, width: 200 }}
          onClick={() => this.handleClickBubble('img5', rd5, laser)} />}
        {rd6 !== 0 && <img src={img6} alt={img6} style={{ left: 0, right: 0, margin: 'auto', bottom: 50, width: 200 }}
          onClick={() => this.handleClickBubble('img6', rd6, laser)} />}
      </div>
    )

    const page4 = (
      <div className='gscene-4' style={{ backgroundImage: `url(${bg})` }}>
        <img src={type === 'white' ? char_w : type === 'p' ? char_p : char_g} alt="char" className='char' />

        <h2 style={{left: 'auto', right: 150, width: 200}}>SCORE</h2>
        <h2 className='total-score'>{score}</h2>
        <button className='play-again' onClick={() => this.playAgain()}>PLAY AGAIN</button>
      </div>
    )

    const controls = {
      pause: this.state.sound === Sound.status.PLAYING,
      resume: this.state.sound === Sound.status.PAUSED
    }

    return (
      <div className='scene-3'>
        {page === 0 && page0}
        {page === 1 && page1}
        {page === 2 && page2}
        {page === 3 && page3}
        {page === 4 && page4}

        <Actions
          home={page === 3 ? false : page === 0 ? 'scene' : 'page'}
          next={page < 2 && page !== 0}
          prev={page <= 2 && page !== 0}
          sound
          scene={scene}
          page={page}
          pause={page === 3}
          changePause={this.changePause}
          changeScene={changeScene}
          changePage={this.changePage}
          history={this.props.history}
          handlePause={this.handlePause}
          controls={controls}
          pauseStatus={this.state.pause}
          lastPage={4}
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
