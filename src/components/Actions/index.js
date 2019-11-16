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
    const { scene, changeScene, changePause, stopSound, history, changePage, page, home } = this.props

    if (scene > 1 ) {
      switch (type) {
        case 'home':
          switch (home) {
            case 'page': changePage(1)
              break
            case 'scene': changeScene(2)
              break
            default: history.push('/')
              break
          }
          break
        case 'pause': changePause()
          break
        case 'next': page ? changePage(page + 1) : changeScene(scene + 1)
          break
        case 'prev': home === 'page' ? changePage(scene - 1) : changeScene(scene - 1)
          break
        default: break
      }
    }
  }

  render () {
    const { next, prev, home, pause, sound, position, controls, pauseStatus } = this.props

    return (
      <div className={`scene-actions ${position}`}>
        {home && <button onClick={() => this.handleClick('home')}><FaHome /></button>}
        {sound && controls.pause && <button onClick={() => this.props.handlePause('PAUSED')}><FaVolumeMute /></button>}
        {sound && controls.resume && <button onClick={() => this.props.handlePause('PLAYING')}><FaVolumeDown /></button>}
        {prev && <button onClick={() => this.handleClick('prev')}><FaChevronLeft /></button>}
        {pause && pauseStatus && <button onClick={() => this.handleClick('pause')}><FaPlay /></button>}
        {pause && !pauseStatus && <button onClick={() => this.handleClick('pause')}><FaPause /></button>}
        {next && <button onClick={() => this.handleClick('next')}><FaChevronRight /></button>}
      </div>
    )
  }
}

export default Actions
