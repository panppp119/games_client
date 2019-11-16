import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'components/Layout'
import g1 from './imgs/g1.png'
import g2 from './imgs/g2.png'
import g3 from './imgs/g3.png'
import g4 from './imgs/g4.png'
import './Home.scss'

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <h1>Games</h1>

        <div className='layout-content'>
          <div className='column'>
            <Link to='/q10'>
              <img src={g1} alt='q10' />
              <h3>Q10</h3>
            </Link>
          </div>

          <div className='column'>
            <Link to='/cyber_shoot'>
              <img src={g2} alt='cyber-shoot' />
              <h3>Cyber Shoot</h3>
            </Link>
          </div>

          <div className='column'>
            <Link to='/a_day_with_peepo'>
              <img src={g3} alt='a-day-with-peepo' />
              <h3>A Day with PeePo</h3>
            </Link>
          </div>

          <div className='column'>
            <Link to='/cyber_adventure'>
              <img src={g4} alt='cyber-adventure' />
              <h3>Cyber Adventure</h3>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
