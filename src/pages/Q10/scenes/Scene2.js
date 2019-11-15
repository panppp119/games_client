import React from 'react'

import Actions from 'components/Actions'

import char from '../imgs/char11.png'

class Scene2 extends React.Component {
  state = {
    page: 1,
  }

  changePage = (page) => {
    this.setState({ page })
  }

  render () {
    const { scene, changeScene } = this.props
    const { page } = this.state

    const page1 = (
      <div className='page-1'>
        <div className='title'>
          <h1>บทเรียนที่ 1</h1>
          <p>เรื่อง การใช้อินเทอร์เน็ต</p>
        </div>
        <img src={char} alt='char' className='char' />
        <button className='start' onClick={() => this.changePage(page + 1)}>START</button>
      </div>
    )

    const page2 = (
      <div className='page-2'>
        <div className='title'>
          <h1>เรื่อง การใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char' />
        <h3>แนะนำการใช้งาน</h3>
        <ul>
          <li><p>1. นักเรียนควรศึกษาเนื้อหาบทเรียน</p></li>
          <li><p>2. ทำเกมการทดสอบหลังเรียน</p></li>
          <li><p>3. ถ้าทำเกมการสอบหลังเรียนไม่ผ่าน ควรกลับมาศึกษาเนื้อหาอีกครั้ง</p></li>
        </ul>
      </div>
    )

    const page3 = (
      <div className='page-3'>
        <div className='title'>
          <h1>เรื่อง การใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char' />
        <h3>จุดประสงค์การเรียนรู้</h3>
        <ul>
          <li><p>1. บอกความหมายของอินเทอร์เน็ตได้</p></li>
          <li><p>2. บอกประโยชน์จากการใช้อินเทอร์เน็ตได้ถูกต้อง</p></li>
          <li><p>3. บอกโทษจากการใช้อินเทอร์เน็ตได้ถูกต้อง </p></li>
        </ul>
      </div>
    )

    const page4 = (
      <div className='page-4'>
        <div className='title'>
          <h1>เรื่อง การใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char' />
        <h3>เนื้อหาบทเรียน</h3>
        <ul>
          <li><p>1.ความหมายของอินเทอร์เน็ต</p></li>
          <li><p>2.ประโยชน์ของการใช้อินเทอร์เน็ต</p></li>
          <li><p>3.โทษของการใช้อินเทอร์เน็ต</p></li>
        </ul>
      </div>
    )

    const page5 = (
      <div className='page-5'>
        <div className='title'>
          <h1>ความหมายของอินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className='content1'>
          <h4>คือ เครือข่ายคอมพิวเตอร์ขนาดใหญ่ที่เชื่อมโยงคอมพิวเตอร์ทั่วโลกเข้าไว้ด้วยกัน เพื่อให้สามารถแลกเปลี่ยนข้อมูลทั้งข้อความ ภาพ เสียง และวีดิโอ ร่วมกันได้โดยไม่จำกัดระยะทาง โดยระบบสื่อสารโทรคมนาคมเป็นตัวกลางในการเชื่อมตัวเครือข่าย</h4>
        </div>
        <p className='meaning'>คำว่า อินเทอร์เน็ต (Internet) ย่อมาจากคำว่า International Network</p>
      </div>
    )

    const page6 = (
      <div className='page-6'>
        <div className='title'>
          <h1>ประโยชน์ของการใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className='content1'>
          <h4>คือ เครือข่ายคอมพิวเตอร์ขนาดใหญ่ที่เชื่อมโยงคอมพิวเตอร์ทั่วโลกเข้าไว้ด้วยกัน เพื่อให้สามารถแลกเปลี่ยนข้อมูลทั้งข้อความ ภาพ เสียง และวีดิโอ ร่วมกันได้โดยไม่จำกัดระยะทาง โดยระบบสื่อสารโทรคมนาคมเป็นตัวกลางในการเชื่อมตัวเครือข่าย</h4>
        </div>
        <p className='meaning'>คำว่า อินเทอร์เน็ต (Internet) ย่อมาจากคำว่า International Network</p>
      </div>
    )

    const page7 = (
      <div className='page-7'>
        <div className='title'>
          <h1>1. ด้านการศึกษา</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className="content1">
          <ul>
            <li>ทำหน้าที่เสมือนเป็นห้องสมุดขนาดใหญ่</li>
            <li>ทำหน้าที่เสมือนเป็นห้องสมุดขนาดใหญ่</li>
            <li>เป็นแหล่งค้นคว้าหาข้อมูลทางวิชาการ</li>
          </ul>
        </div>
      </div>
    )

    const page8 = (
      <div className='page-8'>
        <div className='title'>
          <h1>2. ด้านธุรกิจและเชิงพาณิชย์</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className="content1">
          <ul>
            <li>เป็นแหล่งค้นหาข้อมูลเพื่อช่วยในการตัดสินใจทางธุรกิจ</li>
            <li>สามารถซื้อ – ขายสินค้าผ่านระบบอินเทอร์เน็ต</li>
            <li>บริษัทหรือองค์กรต่างๆ สามารถให้บริการและสนับสนุนลูกค้าผ่านระบบเครือข่ายอินเทอร์เน็ตได้ เช่น การให้คำแนะนำ ตอบปัญหาต่างๆ ให้แก่ลูกค้า เป็นต้น</li>
            <li>ทำการตลาด การโฆษณาผ่านเครือข่ายอินเทอร์เน็ต</li>
            <li>สามารถทำธุรกรรมทางการเงินออนไลน์ได้</li>
          </ul>
        </div>
      </div>
    )

    const page9 = (
      <div className='page-9'>
        <div className='title'>
          <h1>3. ด้านความบันเทิง</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className="content1">
          <ul>
            <li>ฟังวิทยุผ่านเครือข่ายอินเทอร์เน็ตได้</li>
            <li>ดูข่าว ละคร ภาพยนตร์ออนไลน์ได้</li>
            <li>อ่านนิตยสาร หนังสือพิมพ์ บทความ และเรื่องราวต่างๆ ได้ฟรี</li>
            <li>สามารถพูดคุยกับผู้อื่นได้ผ่านสื่อสังคอมออนไลน์</li>
          </ul>
        </div>
      </div>
    )

    const page10 = (
      <div className='page-10'>
        <div className='title'>
          <h1>โทษของการใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className="content1">
          <ul>
            <li>เกิดปัญหาของการละเมิดลิขสิทธิ์
              <ul>
                <li>เกิดปัญหาของการละเมิดลิขสิทธิ์ </li>
                <li>การตัดต่อภายบุคคลสำคัญที่มีชื่อเสียงให้กลายเป็นภาพที่ส่อในทางอนาจารมาเผยแพร่ ทำให้บุคคลเหล่านั้นเสียหาย</li>
              </ul>
            </li>
            <li>ก่อให้เกิดปัญหาด้านอาชญากรรม เพราะการเล่นอินเทอร์เน็ต
              <ul>
                <li>การล่อลวงหญิงไปในทางไม่ดี</li>
              </ul>
            </li>
            <li>การล่อลวงหญิงไปในทางไม่ดี
              <ul>
                <li>การใช้เวลากับคอมพิวเตอร์มากเกินไปจนส่งผลเสียต่อสุขภาพ การเรียนและการงาน</li>
                <li>ลดการมีส่วนร่วมกับคนในครอบครัวหรือเพื่อน</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )

    const page11 = (
      <div className='page-11'>
        <div className='title'>
          <h1>โทษของการใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char2' />
        <div className="content1">
          <ul>
            <li>ติดไวรัสคอมพิวเตอร์
              <ul>
                <li>การดาวน์โหลดเพลง รูปภาพ หรือไฟล์ข้อมูลต่างๆ จากเว็บไซต์</li>
              </ul>
            </li>
            <li>เกิดการเลียนแบบพฤติกรรมที่ไม่ดี
              <ul>
                <li>การแสดงออกกับเพศตรงข้ามอย่างไม่เหมาะสม</li>
                <li>การตั้งแก๊งก่อเหตุต่างๆ </li>
              </ul>
            </li>
            <li>ได้รับข้อมูลข่าวสารที่ไม่ได้รับการกลั่นกรอง
              <ul>
                <li>การเปิดโอกาสให้ผู้ไม่หวังดีสร้างข่าวปลอมเข้ามาปะปนกับข่าวอื่นๆ บนโลกออนไลน์ จนทำให้ผู้อ่านหลงเชื่อข่าวปลอม ข่าวลือ หรือ ข่าวบิดเบือน</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )

    const page12 = (
      <div className='page-12'>
        <div className='title'>
          <h1>เรื่อง การใช้อินเทอร์เน็ต</h1>
        </div>
        <img src={char} alt='char' className='char' />

        <button className='start' onClick={() => changeScene(scene + 1)}>START GAME</button>
      </div>
    )

    return (
      <div className='scene-2'>
        {page === 1 && page1}
        {page === 2 && page2}
        {page === 3 && page3}
        {page === 4 && page4}
        {page === 5 && page5}
        {page === 6 && page6}
        {page === 7 && page7}
        {page === 8 && page8}
        {page === 9 && page9}
        {page === 10 && page10}
        {page === 11 && page11}
        {page === 12 && page12}

        {
          page > 0 && page <= 12 && (
            <Actions
              next={page !== 12}
              prev
              scene={page === 1 ? scene : page}
              page={page}
              changeScene={page === 1 ? changeScene : this.changePage}
              changePage={this.changePage}
              history={this.props.history}
            />
          )
        }
      </div>
    )
  }
}

export default Scene2
