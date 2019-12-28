import React from 'react'

import Layout from 'components/Layout'

import { Scene1, Scene2 } from './scenes'

import './CyberShoot.scss'

class CyberShoot extends React.Component {
  state = {
    scene: 1,
    x: 0,
    y: 0
  }

  changeScene = (scene) => {
    this.setState({ scene })
  }

  render () {
    const { scene } = this.state
    const initialState = {
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

    return (
      <Layout initialState={initialState}>
        <h1>Cyber Shoot</h1>

        <div className='frame cyber-shoot'>
          {scene === 1 && <Scene1 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 2 && <Scene2 changeScene={this.changeScene} scene={scene} {...this.props} />}
        </div>
      </Layout>
    )
  }
}

export default CyberShoot
