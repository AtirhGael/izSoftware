import React from 'react'
import './careers.css'
import { CareersPage } from '../../components/carousel/CarouselHead'
import ModalPopUp from '../../components/Modal/Modal'
import Share from '../../components/share/Share'

function Careers() {
  return (
    <div className=''>
      <div style={{marginBottom:20}}><CareersPage/></div>
    <div className='main-career'>
        <div className='career-title'> Career</div>
        <div className='job-opening'>job opening</div>
        <div className='career-container'>
            <div>
                <ul>
                    <li>VACANCY ANNOUNCEMENT – BUSINESS DEVELOPMENT OFFICER</li>
                </ul>
                <div style={{paddingLeft:20}}>
                    <div>lome, togo</div>
                   
                </div>
            </div>
            
            <ModalPopUp/>
            
        </div>
        <div className='career-container'>
            <div>
                <ul>
                    <li>VACANCY ANNOUNCEMENT – GROUP DIRECTOR OF MONITORING & EVALUATION</li>
                </ul>
                <div style={{paddingLeft:20}}>
                    <div>lome, togo</div>
                   
                </div>
            </div>
            
            <ModalPopUp/>
            
        </div>
        <div style={{paddingTop:50}}>
        <div className='job-opening'>Internship</div>
        <div className='career-container'>
            <div>
                <ul>
                    <li>VACANCY ANNOUNCEMENT – BUSINESS DEVELOPMENT OFFICER</li>
                </ul>
                <div style={{paddingLeft:20}}>
                    <div>lome, togo</div>
                   
                </div>
            </div>
            
            <ModalPopUp/>
            
        </div>
      
        </div>

        <div style={{paddingTop:50}}>
        <div className='job-opening'>consltancy</div>
        <div className='career-container'>
            <div>
                <ul>
                    <li>VACANCY ANNOUNCEMENT – BUSINESS DEVELOPMENT OFFICER</li>
                </ul>
                <div style={{paddingLeft:20}}>
                    <div>lome, togo</div>
                   
                </div>
            </div>
            
            <ModalPopUp/>
            
        </div>
      
        </div>
        <Share/>
    </div>
    </div>
  )
}
export default Careers
