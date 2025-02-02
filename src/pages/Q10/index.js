import React from 'react'

import Layout from 'components/Layout'

import { Scene1, Scene2 } from './scenes'

import './Q10.scss'

class Q10 extends React.Component {
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
        <h1>Q10</h1>

        <div className='frame q10'>
          {scene === 1 && <Scene1 changeScene={this.changeScene} scene={scene} {...this.props} />}
          {scene === 2 && <Scene2 changeScene={this.changeScene} scene={scene} {...this.props} />}
        </div>
      </Layout>
    )
  }
}

export default Q10
