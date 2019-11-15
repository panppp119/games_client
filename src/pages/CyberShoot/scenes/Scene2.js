import React from 'react'

import Actions from 'components/Actions'

import gun from '../imgs/gun.png'

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
          <h1>บทเรียนที่ 2</h1>
          <p>เรื่อง การใช้ภาษาในการติดต่อสื่อสาร</p>
        </div>
        <img src={gun} alt='char' className='char' />
        <button className='start' onClick={() => this.changePage(page + 1)}>START</button>
      </div>
    )

    const page2 = (
      <div className='page-2'>
        <div className='title'>
          <h1>เรื่อง การใช้ภาษาในการติดต่อสื่อสาร</h1>
        </div>
        <img src={gun} alt='char' className='char' />
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
          <h1>เรื่อง การใช้ภาษาในการติดต่อสื่อสาร</h1>
        </div>
        <img src={gun} alt='char' className='char' />
        <h3>จุดประสงค์การเรียนรู้</h3>
        <p className='content'>วิเคราะห์คำที่ใช้ถูกตามหลักภาษา หรือคำที่สุภาพได้</p>
      </div>
    )

    const page4 = (
      <div className='page-4'>
        <div className='title'>
          <h1>เรื่อง การใช้ภาษาในการติดต่อสื่อสาร</h1>
        </div>
        <img src={gun} alt='char' className='char' />
        <h3>เนื้อหาบทเรียน</h3>
        <ul>
          <li><p>1. ข้อควรคำนึงในการใช้ภาษา</p></li>
          <li><p>2. มารยาทในการติดสื่อสาร</p></li>
          <li><p>3. การใช้คำสุภาพ คำแสลง คำวิบัติ</p></li>
        </ul>
      </div>
    )

    const page5 = (
      <div className='page-5'>
        <div className='title'>
          <h1>ข้อควรคำนึงในการใช้ภาษา</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>1. ใช้ภาษาสามัญ ง่าย ๆ สุภาพเข้าใจง่าย</li>
            <li>2. ใช้ถ้อยคำภาษาที่ตรงความหมายที่ต้องการ</li>
            <li>3. ใช้ถ้อยคำ ภาษาที่ถูกต้อง เหมาะสม ไม่ใช้ภาษาแสลง วิบัติ หรือคำต่ำกว่ามาตรฐาน</li>
            <li>4. ควรใช้คำที่เหมาะสมกับกาลเทศะและบุคคล ไม่ส่อเสียด ไม่ทับถมผู้อื่น</li>
            <li>5. ใช้ภาษาให้ถูกต้องตามแบบแผน ไม่ใช้ถ้อยคำที่ตัด หรือย่อที่รู้กันเฉพาะกลุ่ม</li>
          </ul>
        </div>
      </div>
    )

    const page6 = (
      <div className='page-6'>
        <div className='title'>
          <h1>มารยาทในการติดสื่อสาร</h1>
        </div>
        <img src={gun} alt='char' className='char2' />

        <h2 className='type'>แบ่งออก 2 ด้าน</h2>
        <p className='t1'>1. มารยาทในการใช้อีเมล</p>
        <p className='t2'>2. มารยาทในการใช้แชทและเครือข่ายสังคม</p>
      </div>
    )

    const page7 = (
      <div className='page-7'>
        <div className='title'>
          <h1>1. มารยาทในการใช้อีเมล</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>ใช้ภาษาสุภาพ ชัดเจน ตรงประเด็น เหมาะสมกับกาลเทศะ</li>
            <li>ใช้ตัวอักษรตัวหนาเฉพาะข้อความที่ตรงการเน้นเท่านั้น</li>
            <li>ระบุหัวเรื่อง ชื่อผู้ที่จะสื่อสารด้วย และระบุตัวตนของผู้ส่งอีเมลให้ชัดเจน</li>
            <li>ระบุชื่อหรือตำแหน่งของผู้ที่จะสื่อสารให้ถูกต้องและเหมาะสม</li>
          </ul>
        </div>
        <div className='content2'>
          <ul>
            <li>ระบุชื่อหรือตำแหน่งของผู้ที่จะสื่อสารให้ถูกต้องและเหมาะสม</li>
            <li>หลีกเลี่ยงการส่งอีเมลในการแนบไฟล์ที่มีขนาดใหญ่ ให้ใช้ลิงค์หรือโปรแกรมในการถ่ายโอนไฟล์แทน</li>
            <li>ไม่ลักลอบส่งอีเมลโดยการปลอมแปลงชื่อผู้ส่งที่ทำให้ผู้รับเข้าใจผิด</li>
            <li>ไม่ส่งอีเมลลูกโซ่</li>
            <li>ไม่ส่งอีเมลขายสินค้า โฆษณา หรือข้อความที่รบกวนผู้รับ</li>
          </ul>
        </div>
      </div>
    )

    const page8 = (
      <div className='page-8'>
        <div className='title'>
          <h1>2. มารยาทในการใช้แชทและเครือข่ายสังคม</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <ul>
            <li>ไม่ใช่ข้อความที่เป็นชนวนก่อให้เกิดปัญหาระหว่างบุคคล</li>
            <li>หลีกเลี่ยงการใช้อารมณ์ หรือความรู้สึกที่มากจนเกินไปทั้งในการอ่านหรือแสดงความคิดเห็น</li>
            <li>หลีกเลี่ยงการใช้อารมณ์ หรือความรู้สึกที่มากจนเกินไปทั้งในการอ่านหรือแสดงความคิดเห็น</li>
            <li>หลีกเลี่ยงการใช้อารมณ์ หรือความรู้สึกที่มากจนเกินไปทั้งในการอ่านหรือแสดงความคิดเห็น</li>
          </ul>
        </div>
      </div>
    )

    const page9 = (
      <div className='page-9'>
        <div className='title'>
          <h1>การใช้คำสุภาพ</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <h4>หมวดบุคคล</h4>
          <div style={{ display: 'flex' }}>
            <div>
              <h4>คำที่ไม่เหมาะสม</h4>
              <p>พ่อ</p>
              <p>แม่</p>
              <p>ผัว</p>
              <p>เมีย</p>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <h4>คำที่เหมาะสม</h4>
              <p>บิดา</p>
              <p>มากดา</p>
              <p>สามี</p>
              <p>ภรรยา</p>
            </div>
          </div>
        </div>
        <div className='content2'>
          <h4>หมวดการกระทำ</h4>
          <div style={{ display: 'flex' }}>
            <div>
              <h4>คำที่ไม่เหมาะสม</h4>
              <p>กิน</p>
              <p>อ้วก</p>
              <p>ตด</p>
              <p>ฉี่</p>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <h4>ศีรษะ</h4>
              <p>รับประทาน</p>
              <p>อาเจียน</p>
              <p>ผายลม</p>
              <p>ปัสสาวะ</p>
            </div>
          </div>
        </div>
      </div>
    )

    const page10 = (
      <div className='page-10'>
        <div className='title'>
          <h1>การใช้คำสุภาพ</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <h4>หมวดสถานที่</h4>
          <div style={{ display: 'flex' }}>
            <div>
              <h4>คำที่ไม่เหมาะสม</h4>
              <p>โรงพัก</p>
              <p>โรงหนัง</p>
              <p>ส้วม</p>
              <p>ท่ารถ</p>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <h4>คำที่เหมาะสม</h4>
              <p>สถานีตำรวจ</p>
              <p>โรงภาพยนตร์</p>
              <p>ห้องน้ำ</p>
              <p>สถานีขนส่ง</p>
            </div>
          </div>
        </div>
        <div className='content2'>
          <h4>หมวดร่างกาย</h4>
          <div style={{ display: 'flex' }}>
            <div>
              <h4>คำที่ไม่เหมาะสม</h4>
              <p>หัว</p>
              <p>ตีน</p>
              <p>ตูด</p>
              <p>นม</p>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <h4>คำที่เหมาะสม</h4>
              <p>ศีรษะ</p>
              <p>เท้า</p>
              <p>ก้น</p>
              <p>หน้าอก</p>
            </div>
          </div>
        </div>
      </div>
    )

    const page11 = (
      <div className='page-11'>
        <div className='title'>
          <h1>การใช้คำแสลง</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
        <div className='content1'>
          <h4>>>> คือ  สำนวนที่ใช้พูดกันแล้วเข้าใจเฉพาะกลุ่ม แต่ไม่ใช่ภาษาที่ยอมรับว่าถูกต้องเป็นทางการสำหรับทุกคน  เช่น</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <h4>คำที่ไม่เหมาะสม</h4>
                <p>ผู้</p>
                <p>ปั่น</p>
                <p>มะนาว</p>
                <p>เท</p>
              </div>
              <div style={{ paddingLeft: 16 }}>
                <h4>คำที่เหมาะสม</h4>
                <p>ผู้ชาย</p>
                <p>หลอก, สร้างกระแส</p>
                <p>มโน</p>
                <p>ทิ้ง</p>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div>
                <h4>คำที่ไม่เหมาะสม</h4>
                <p>หัวร้อน</p>
                <p>ลำไย</p>
                <p>มะม่วง</p>
                <p>ตะมุตะมิ</p>
              </div>
              <div style={{ paddingLeft: 16 }}>
                <h4>คำที่เหมาะสม</h4>
                <p>อารณ์์ร้อน</p>
                <p>รำคาญ</p>
                <p>โง่</p>
                <p>น่ารักน่าเอ็นดู</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    const page12 = (
      <div className='page-12'>
        <div className='title'>
          <h1>การใช้คำวิบัติ</h1>
        </div>
        <img src={gun} alt='char' className='char2' />
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
        <img src={gun} alt='char' className='char' />

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
