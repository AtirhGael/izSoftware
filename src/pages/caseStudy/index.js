import React from 'react'
import { CaseStudy } from '../../components/carousel/CarouselHead'

function CaseAtudy() {
  return (
    <div className='main-case-study'>
        <h1 style={{color:'#000'}}>Selected Success Stories from Our 3,600-Project Portfolio</h1>
        <div style={{gap:5}}>
        <CaseStudy/><CaseStudy/><CaseStudy/>
        </div>
    </div>
  )
}

export default CaseAtudy