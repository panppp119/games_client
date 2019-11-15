import React from 'react'

import Actions from 'components/Actions'

import s13_1 from '../imgs/s13-1.png'
import social_1 from '../imgs/social-1.jpg'
import social_2 from '../imgs/social-2.jpg'

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
          <h1>บทเรียนที่ 4</h1>
          <p>เรื่อง ภัยและการป้องกันภัยในการใช้เทคโนโลยี</p>
        </div>
        <img src={s13_1} alt='char' className='char' />
        <button className='start' onClick={() => this.changePage(page + 1)}>START</button>
      </div>
    )

    const page2 = (
      <div className='page-2'>
        <div className='title'>
          <h1>เรื่อง ภัยและการป้องกันภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char' />
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
          <h1>เรื่อง ภัยและการป้องกันภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char' />
        <h3>จุดประสงค์การเรียนรู้</h3>
        <ul>
          <li><p>1. บอกภัยในการใช้เทคโนโลยีได้</p></li>
          <li><p>2. บอกวิธีการป้องกันภัยในการใช้เทคโนโลยีได้</p></li>
        </ul>
      </div>
    )

    const page4 = (
      <div className='page-4'>
        <div className='title'>
          <h1>เรื่อง ภัยและการป้องกันภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char' />
        <h3>เนื้อหาบทเรียน</h3>
        <ul>
          <li><p>1. ภัยในการใช้เทคโนโลยี</p></li>
          <li><p>2. วิธีการป้องกันภัยในการใช้เทคโนโลยี</p></li>
        </ul>
      </div>
    )

    const page5 = (
      <div className='page-5'>
        <div className='title'>
          <h1>ภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />

        <h2 className='type'>แบ่งออก 3 ด้านใหญ่ๆ</h2>
        <p className='t1'>1. ภัยจากแชท</p>
        <p className='t2'>2. ภัยจากการเล่นเกมออนไลน์</p>
        <p className='t3'>3. ภัยจากการท่องเว็บไซต์</p>
      </div>
    )

    const page6 = (
      <div className='page-6'>
        <div className='title'>
          <h1>1. ภัยจากแชท</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <h4>การแชท เป็นการพูดคุยกันทางสื่อสังคมออนไลน์ เป็นภัยที่พบง่ายและบ่อยที่สุด</h4>
          <ul>
            <li>การแชท เป็นการพูดคุยกันทางสื่อสังคมออนไลน์ เป็นภัยที่พบง่ายและบ่อยที่สุด</li>
            <li>เผลอให้ข้อมูลส่วนตัว เช่น ชื่อ ที่อยู่ เบอร์โทรศัพท์ เลขบัตรประชาชน เลขบัตรเครดิต หมายเลขบัญชีธนาคาร อาจถูกโจรกรรมข้อมูลได้</li>
          </ul>
        </div>
        <img src={social_1} alt='social' className='social-1' />
        <img src={social_2} alt='social' className='social-2' />
      </div>
    )

    const page7 = (
      <div className='page-7'>
        <div className='title'>
          <h1>2. ภัยจากการเล่นเกมออนไลน์</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>บางเกมส่อไปในทางลามกอนาจาร มีการนำเสนอภาพที่รุนแรง</li>
            <li>โดนหลอกให้ซื้อของมีการขายของที่อยู่ในเกม</li>
            <li>เป็นตัวบั่นทอนทำให้เสียสุขภาพกาย สุขภาพจิต รวมถึงเสียการเรียน</li>
          </ul>
        </div>
      </div>
    )

    const page8 = (
      <div className='page-8'>
        <div className='title'>
          <h1>3. ภัยจากการท่องเว็บไซต์</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>การหลอกลวงขายสินค้า เช่น สั่งซื้อของจ่ายเงินแล้วแต่ไม่ได้ของ</li>
            <li>การดาวน์โหลดไฟล์  อาจได้ไวรัสคอมพิวเตอร์ติดมาด้วย</li>
            <li>ได้รับข่าวสารข้อมูลผิดๆ ถ้าไม่มีการกลั่นกรองข้อมูล</li>
          </ul>
        </div>
      </div>
    )

    const page9 = (
      <div className='page-9'>
        <div className='title'>
          <h1>วิธีการป้องกันภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />

        <h2 className='type'>แบ่งออก 3 ด้านใหญ่ๆ</h2>
        <p className='t1'>1. การป้องกันภัยที่อาจเกิดขึ้นกับตนเอง</p>
        <p className='t2'>2. การป้องกันภัยไม่ให้เกิดความเสียหายกับซอฟต์แวร์ในระบบคอมพิวเตอร์</p>
      </div>
    )

    const page10 = (
      <div className='page-10'>
        <div className='title'>
          <h1>1. การป้องกันภัยที่อาจเกิดขึ้นกับตนเอง</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>
              <h4>ได้รับข่าวสารข้อมูลผิดๆ ถ้าไม่มีการกลั่นกรองข้อมูล
                <span>เช่น ที่อยู่ หมายเลขโทรศัพท์ หมายเลขบัตรเครดิต ชื่อจริง ชื่อโรงเรียนให้กับบุคคลอื่นที่ไม่รู้จักทางอินเทอร์เน็ต</span>
              </h4>
            </li>
            <li>
              <h4>ไม่เปิดเผยข้อมูลส่วนตัวในการแสดงความคิดเห็นในเว็บไซต์ต่างๆ
                <span>ไม่ว่าจะเป็นการกระทำ หรือแม้กระทั่งแนวคิดก็ตาม เพราะอาจถูกนำไปใช้เป็นหลักฐานในการกล่าวอ้างในอนาคตได้</span>
              </h4>
            </li>
            <li>
              <h4>หากพบข้อความ รูปภาพ หรือสื่อที่ไม่เหมาะสม
                <span>ให้แจ้งครูหรือผู้ปกครองทราบเพื่อดำเนินการต่อไป</span>
              </h4>
            </li>
            <li>
              <h4>ไม่นัดหมายกับบุคคลแปลกหน้าที่สนทนาทางอินเทอร์เน็ต
                <span>เพราะอาจเป็นช่องทางให้ถูกล่อลวงได้ง่าย</span>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    )

    const page11 = (
      <div className='page-11'>
        <div className='title'>
          <h1>2. การป้องกันภัยไม่ให้เกิดความเสียหายกับซอฟต์แวร์ในระบบคอมพิวเตอร์</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li><h4>ไม่เปิดอีเมลหรือรับไฟล์ที่ส่งมาจากบุคคลที่ไม่รู้จัก</h4></li>
            <li>
              <h4>ระมัดระวังการเปิดอีเมลหรือรับไฟล์ที่ส่งมาจากบุคคลที่รู้จัก
                <span>เพราะอาจมีผู้แอบอ้างใช้ชื่อและอีเมลเดียวกันส่งไวรัสมาให้ ต้องมีการตรวจสอบให้แน่ใจก่อนว่าบุคคลที่รู้จะชักได้ส่งอีเมล์หรือไฟล์จริงมาให้</span>
              </h4>
            </li>
            <li><h4>ติดตั้งโปรแกรมป้องกันไวรัส เพื่อตรวจสอบไวรัสหรือโปรแกรมที่ได้รับมาก่อนทุกครั้ง</h4></li>
          </ul>
        </div>
      </div>
    )

    const page12 = (
      <div className='page-12'>
        <div className='title'>
          <h1>2. การป้องกันภัยไม่ให้เกิดความเสียหายกับซอฟต์แวร์ในระบบคอมพิวเตอร์</h1>
        </div>
        <img src={s13_1} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>
              <h4>ปรับปรุง (Update) โปรแกรมป้องกันไวรัสอย่างสม่ำเสมอ
                <span>เพื่อให้โปรแกรมรู้จักและสามารถป้องกันไวรัสใหม่ๆ ได้</span>
              </h4>
            </li>
            <li>
              <h4>ปรับปรุงระบบปฏิบัติการที่ใช้อย่างสม่ำเสมอ
                <span>เพราะว่าผู้ผลิตระบบปฏิบัติการจะมีการค้นพบช่องโหว่ของระบบปฏิบัติการของตนอยู่ตลอดเวลา  และจะมีการเขียนโปรแกรมเสริม (Updates หรือ Service Packs) ออกมาเพื่อแก้ไขช่องโหว่ดังกล่าวในระบบปฏิบัติการที่ใช้อยู่</span>
              </h4>
            </li>
            <li>
              <h4>การทำธุรกรรมบนเว็บที่ต้องใช้ ชื่อผู้ใช้ และรหัสผ่าน ต้องทำการตรวจสอบเว็บไซต์ให้ถูกต้อง
                <span>เพื่อป้องกันเว็บไซต์ปลอม (Phishing) ที่โจรกรรมชื่อผู้ใช้และรหัสผ่านไปใช้เพื่อทำให้เกิดความเสียหาย</span>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    )

    const page13 = (
      <div className='page-13'>
        <div className='title'>
          <h1>เรื่อง ภัยและการป้องกันภัยในการใช้เทคโนโลยี</h1>
        </div>
        <img src={s13_1} alt='char' className='char' />

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
        {page === 13 && page13}

        {
          page > 0 && page <= 13 && (
            <Actions
              next={page !== 13}
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
