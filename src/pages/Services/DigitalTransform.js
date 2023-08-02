import React from 'react'
import SideNav from '../../components/SideNav/SideNav'
import { Optimal, SoftwareTypesCard, Transform } from '../../components/Extra'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimeLine from '../../components/Timeline/TimeLine';

export default function DigitalTransform() {
  return (
    <div className=''>
      <div className="icp-header-container">
        <div className="icp-header">
        <h1 className="icp-title">
        End-to-End Digital Transformation Services
        </h1>   
        <p className="icp-text">Digital transformation is the process of planning and executing an individual business strategy for digital adoption. Medium and large enterprises partner with ScienceSoft to find improvement opportunities in their business processes and launch digital transformation.</p>
        <div className="icp-header-phrase">
        {/* <p className='text'>Combining over 30 years of experience in IT and a great drive for innovation, ScienceSoft designs and builds software to rely on: secure, high-performing, scalable, and user-friendly.</p> */}
        </div>
        <div className="icp-header-link-wrapper">
        <button  className="icp" >
        Start Your Digital Tranformation
        </button>
        {/* <button className="icp2">
        Request software development
        </button> */}
        </div>
        
        </div>
        <div className="icp-image-wrapper ">
        <img  
        className='img' alt='nothing to show here'
        src="https://www.scnsoft.com/it-consulting/digital-transformation-services/cover-pic-digital-transformation-services.svg"/>
        </div>
        </div>
        <div className='main'>
          <div className='left'>
            <h1 className='hp-title'>True to Our CEO’s Word – See How We Can Apply Digital Transformation for You </h1>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
              <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
               <SoftwareTypesCard
                text={'We help companies digitalize up to 90% of corporate finance-related tasks and, thus, drive significant time and cost savings and improvements in financial data accuracy'}
              />
              
            </div>
            <h1 className='hp-title'>How We Unfold Digital Transformation</h1>
           

            <div>
              <TimeLine/>
            </div>
            <h1 className='hp-title'>Choosing an Optimal Pace for Your Project</h1>
            <Optimal/>
            <Optimal/>
            <h1 className='hp-title'>Digital Transformation Technologies We Use to Ensure Business Value </h1>
            <div style={{display:'flex',flexWrap:'wrap',gap:'7px',}}>
            <Transform/>
            <Transform/>
            <Transform/>
            <Transform/>
            </div>
          </div>
         
        </div>
    </div>
  )
}
