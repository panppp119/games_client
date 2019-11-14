import React from 'react'
import {
  FaHome, FaPause, FaPlay, FaVolumeMute,
  FaVolumeDown, FaChevronRight, FaChevronLeft
} from 'react-icons/fa'

import './Actions.scss'

class Actions extends React.Component {
  static defaultProps = {
    pause: false,
    next: false,
    prev: false,
    home: true,
    sound: false,
    position: 'bottom-right',
    page: false,
    changePage: false
  }

  handleClick = (type) => {
    const { scene, changeScene, changePause, stopSound, history, changePage, page } = this.props

    if (scene > 1 ) {
      switch (type) {
        case 'home': history.push('/')
          break
        case 'pause': changePause()
          break
        case 'sound': stopSound()
          break
        case 'next': page ? changePage(page + 1) : changeScene(scene + 1)
          break
        case 'prev': changeScene(scene - 1)
          break
        default: break
      }
    }
  }

  render () {
    const { next, prev, home, pause, sound, position } = this.props

    return (
      <div className={`scene-actions ${position}`}>
        {home && <button onClick={() => this.handleClick('home')}><FaHome /></button>}
        {prev && <button onClick={() => this.handleClick('prev')}><FaChevronLeft /></button>}
        {pause && <button onClick={() => this.handleClick('pause')}><FaPause /></button>}
        {sound && <button onClick={() => this.handleClick('sound')}><FaVolumeMute /></button>}
        {next && <button onClick={() => this.handleClick('next')}><FaChevronRight /></button>}
      </div>
    )
  }
}

export default Actions
