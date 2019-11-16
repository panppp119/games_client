import React from 'react'

import Layout from 'components/Layout'

import { Scene1, Scene2, Scene3 } from './scenes'

import './CyberShoot.scss'

class CyberShoot extends React.Component {
  state = {
    scene: 2
  }

  changeScene = (scene) => {
    this.setState({ scene })
  }

  render () {
    const { scene } = this.state

    return (
      <Layout>
        <h1>Cyber Shoot</h1>

        <div className='frame cyber-shoot'>
          {scene === 1 && <Scene1 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 2 && <Scene2 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 3 && <Scene3 changeScene={this.changeScene} scene={scene} {...this.props} />}
        </div>
      </Layout>
    )
  }
}

export default CyberShoot
