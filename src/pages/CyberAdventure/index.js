import React from 'react'

import Layout from 'components/Layout'

import { Scene1, Scene2 } from './scenes'

import './CyberAdventure.scss'

class CyberAdventure extends React.Component {
  state = {
    scene: 1
  }

  changeScene = (scene) => {
    this.setState({ scene })
  }

  render () {
    const { scene } = this.state
    const initialState = {
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
    }

    return (
      <Layout initialState={initialState}>
        <h1>Cyber Adventure</h1>

        <div className='frame cyber-adventure'>
          {scene === 1 && <Scene1 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 2 && <Scene2 changeScene={this.changeScene} scene={scene} {...this.props} />}
        </div>
      </Layout>
    )
  }
}

export default CyberAdventure
