import React from 'react'

import Layout from 'components/Layout'

import { Scene1, Scene2 } from './scenes'

import './ADayWithPeePo.scss'

class ADayWithPeePo extends React.Component {
  state = {
    scene: 1
  }

  changeScene = (scene) => {
    this.setState({ scene })
  }

  render () {
    const { scene } = this.state

    return (
      <Layout>
        <h1>A Day With PeePo</h1>

        <div className='frame a-day-with-peepo'>
          {scene === 1 && <Scene1 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 2 && <Scene2 changeScene={this.changeScene} scene={scene} {...this.props} />}
        </div>
      </Layout>
    )
  }
}

export default ADayWithPeePo
