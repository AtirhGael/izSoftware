import React from 'react'
import { CareersPage, CareersPageMore } from '../../components/carousel/CarouselHead'

function More() {
  return (
    <div>
        <div style={{paddingBottom:10}}>
            <CareersPageMore/>
        </div>
        <div className='main-career'>
            <h1 style={{textAlign:'center'}}>WORKING WITH AGF</h1>
            <span style={{paddingBottom:10}}>African Guarantee Fund (AGF) recognizes that its staff is the most important resource and is key to the achievement of the organization’s objectives. The achievement of AGF strategic objectives is dependent on having the right number of staff with the right knowledge, skills and competencies deployed in the right roles.</span>
            <div style={{paddingBottom:10,paddingTop:10}}>
            By joining our team, you choose to work in a Pan-African environment with the best, highly qualified professionals of diverse cultures while pursuing a progressive career path with learning and development as an integral part of your career. We are committed to employing and retaining the best talent in Africa.
            </div>
            <div> The official languages of AGF are English and French. </div>
            <strong style={{paddingTop:10,paddingBottom:10}}>REMUNERATION</strong>
            <div>AGF offers a regionally competitive salary with an excellent benefits package. AGF prides itself on its collegial, supportive and gender sensitive working environment and believes that staff diversity promotes excellence.</div>
        </div>
    </div>
  )
}

export default More