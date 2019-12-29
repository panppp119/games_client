import React from 'react'

import Layout from 'components/Layout'
import './Provider.scss'

class Provider extends React.Component {
  render () {
    return (
      <Layout>
        <div className='provider-page'>
          <h1>Provider</h1>

          <div className='detail'>
            <p>ชื่อ-นามสกุล : นางสาวสุคนธ์ฑา พันธเสน</p>
            <p>วัน เดือน ปีเกิด : 26 มิถุนายน 2530</p>
            <p>สถานที่เกิด : จังหวัดสมุทรสาคร</p>
            <p>สถานที่ทำงาน : โรงเรียนกระทุ่มแบน "วิเศษสมุทคุณ"</p>
            <p>ตำแหน่ง : ครู คศ.1</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Provider
