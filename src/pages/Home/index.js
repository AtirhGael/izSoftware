import React, {  useCallback, useEffect,useState } from 'react'
import './home.css'
// import { Partnerships } from '../../components/slider'
import ExplorOffering from '../../components/ExplorOffering/ExplorOffering'
import { Partnerships, Review, SwipeableText } from '../../components/carousel'
import OurOfferings from '../../components/ourOfferings'
import Title from '../../components/Title'
import { Box, Grid, Hidden, Stack, Typography } from '@mui/material'
import { Partnership, Processes, SOlutions, SOlutions2, Technologies } from '../../components/Extra'
import { data2 } from '../../components/Data/serviceMap'
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Extra, Industries, POpovers, Policy} from '../../components/Extra'
import { Backend, Framework, Frontend,data3, database, mobile, policy, serviceData } from '../../components/Data/serviceMap'
import Stacks from '../../components/carousel/stacks'
import InitContent from '../../components/Main/MainContactUs/InitContent'
import { useSpring, animated } from 'react-spring';
import Form from '../../components/Form/Form'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BackgroundCarousel } from '../../components/carousel/CarouselHead'

function Home() {
    const [isHovered, setIsHovered] = useState(false)
   
  return (
    <div>
       <BackgroundCarousel/>
        <div className="container">
        <h1 className="hp-title">Software consulting and development   for your digital success</h1>
        </div>

    <div className='container'>
        <div className='middle_text'>
        Since 1989. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.
        </div>
{/* <Partnerships/> */}
    </div>

    <div className='main_container'>
        <Partnerships/>
    </div>
    <div>
        <OurOfferings/>
    </div>
    <div className='solu' style={{width:'100%',backgroundColor:'#004485',paddingBottom:'3%',paddingLeft:'12%',paddingRight:'8%'}} >
       
       <h1 className='hp-title' style={{color:'#fff'}}> Solutions We deliver</h1>
       
        <div className='solution_text' style={{ fontSize: 20,  color:'#fff' }}> With over 34 years in Information Technology, we have built up expertise in dozens of domains, including: </div>

        <div 
        className='solutions_box2'
        >
          {data2.map((item, index) => (
            <SOlutions2
              item={item}
            />
          ))}
        </div>
      </div>
      <div  >
        {/* <Title text={' Our Capabilities and Technological Expertise'} textAlign={'start'} size='h4' mb={5} mt={10} /> */}
        <h1 className='hp-title' style={{ fontSize: 40, paddingTop: 2, paddingBottom: 18,marginTop:30,paddingLeft:'15%'
         }}> Technologies and Platforms We Work With </h1>
        <Technologies/>
<div style={{backgroundColor:'#FCFCFC'}}>
  <div className='container'>
    <div className='row'>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <h1 className='hp-title'>Process We Follow</h1>
      </div>
      <div className='processes'>
        <Processes/>
      </div>
    </div>
  </div>
</div>

<div style={{backgroundColor:'#FFF'}}>
  <div className='container'>
    <div className='row'>
    <h1 className='hp-title'>Partnership Models</h1>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <p className="desc mb-0">Hyperlink InfoSystem a leading mobile app development company in USA &amp; India offers custom app development services to wide range of industries and businesses. Know more about our partnership models.</p>
      </div>
      <Hidden smDown>

      <div className='carousel'>
      <Partnership/>
      </div>
  </Hidden>
    </div>
  </div>
</div>

      </div>
      

      <div className='txt-slider'>
      <div className="container">
        <h1 className="hp-title">Our Customers Say </h1>
        </div>
        <Hidden smDown>
            <div className='carousel'>
        <SwipeableText/>
              </div>  
            </Hidden>
      </div>
      
      <div  style={{backgroundColor:'rgb(240, 249, 255)'}}>
        <div className='Choose-science'>
        <h1 className="hp-title">Why Businesses Choose ScienceSoft </h1>
        <div className='Busines_schoose' >
          <ul >
            <li className='box_geography_text'> 3,600+ success stories </li>
            <li className='box_geography_text'> 1,220+ happy clients. </li>
            <li className='box_geography_text'> An inspired, close-knit team of 750+ IT specialists, including IT consultants, project managers, technical architects, developers, QA engineers, security </li>
          </ul>
          <ul >
            <li className='box_geography_text'> Partnerships with Microsoft and AWS. </li>
            <li className='box_geography_text'>A quality-first approach based on a mature ISO 9001-certified quality management system. </li>
            <li className='box_geography_text'> ISO 27001-certified security management based on field-tested security knowledge, ever-green policies, effective processes,</li>
          </ul>
        </div>
        </div>
        </div>

      

        <div style={{backgroundColor:'#FFF',paddingBottom:20}}>
  <div className='container'>
    <div className='row'>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 left-content">
      <h1 className="hp-title">Industry Expertise</h1>
      </div>
      <div className='industry_processes'>
      <div className='box_industry_expertise'>
          {serviceData.map((item, index) => (
            <div>
            <Industries
              image={item.image}
              text={item.title}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
    
      
    </div>
  )
}

export default Home
