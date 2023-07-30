import React from 'react'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SideNav from '../../components/SideNav/SideNav';
import Share from '../../components/share/Share';

function BlogPost() {
  return (
    <div className='main_blog'>

    <div >
      <h1>Startup Consulting Services and Reasons Business Founders Need Them </h1>
      <div style={{display:'flex',justifyContent:'center',paddingTop:30,}}>
      <Avatar alt="Remy Sharp" src="https://www.scnsoft.com/_default_upload_bucket/image-thumb__18869__author_page-photo/lebedzeva-tatsiana-1~-~media--ec369c47--query@2x.webp" 
      sx={{
        width: 60, height: 60
      }}/>
      </div>
      <div style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>John Doe</div>
      <div style={{textAlign:'center',fontSize:20,color:'#6c6e70',lineHeight:3,marginBottom:29}}>Senior software engineer, IZsoftware</div>
    </div>
    <div className='blog-post'>
      <div className='firstsec'>
        <div>Software Engineer</div>
        <div style={{display:'flex',gap:20}}>
            <div style={{display:'flex',gap:10,alignItems:'center'}}>
                <AccessTimeIcon/>
                <div style={{color:'##6c6e70'}}>3 min read</div>
            </div>
            <div style={{color:'##6c6e70'}}> Publiched jul 12 2020</div>
        </div>
         </div>
    </div>
    <div className='bellow'>
        <div  className='bellow1'>
            <span style={{fontWeight:'bolder',fontSize:23}}> Editors Note:</span>
            <div style={{paddingBottom:20}}>
            Tanya provides an overview of startup consulting, describes the major team roles, and explains the benefits of consulting services for business founders. If you need expert help navigating the early stages of your business development, reach out to ScienceSoft for our startup consulting services.
            </div>
            <div>Startup consulting services are a live-saver for entrepreneurs that need quick access to industry knowledge and professional advice to get their business off the ground. Startup consultants provide expert guidance and support in various aspects such as business strategy, product development, team management, branding, finance, sales, and more. To cover such a broad range of competencies, a startup consulting company usually provides a multi-skilled team of specialists from different business domains. </div>
            <img alt='nothing' src='https://www.scnsoft.com/blog-pictures/custom-service-marketplace-development/startup-consulting.png'
            style={{height:'60vh',width:'90%'}}
            />
            <h1 className='hp-title'>Key Features of Law CRM</h1>
            <ul>
              <li style={{color:'#000',fontWeight:'bolder'}}> Customer data centralization.</li>
              <div> As your legal practice grows, you will need a CRM to organize existing clients and leads and store their contact information. Law CRMs consolidate all communications, documents, and tasks associated with each lead and client, allowing your entire team to access those details anytime. Having a clear view of your customers and their changing needs will put you ahead of the game. </div>
              <li style={{color:'#000',fontWeight:'bolder'}}> Customer data centralization.</li>
              <div> As your legal practice grows, you will need a CRM to organize existing clients and leads and store their contact information. Law CRMs consolidate all communications, documents, and tasks associated with each lead and client, allowing your entire team to access those details anytime. Having a clear view of your customers and their changing needs will put you ahead of the game. </div>
            </ul>
            <h1 className='hp-title'>Top CRM Solutions for Legal Firms</h1>
            <div style={{color:"#000",fontWeight:'bolder',fontSize:29}}>Microsodt Dinamic 365</div>

            <div>
            Dynamics 365 is a software suite for customer relationship management developed by Microsoft. There are solutions for effective management and automation of marketing, sales, and customer service processes. The bundle allows law firms to handle caseloads time-effectively by centralizing contact information, scheduling activities, and facilitating customer outreach via different channels. The platform provides instant visibility into the goals of client acquisition and retention, and related analytics.
            </div>
            <ul>
              <li>Sales solution – from $65 per user/month.</li>
              <li>Marketing solution – from $1,500 per tenant/month.</li>
              <li>Customer service solution – from $50 per user/month. </li>
            </ul>
        </div>
        <div className='bellow2'>
           <SideNav
           one={'Roles Needee'}
           two={'benefits'}
           three={'how izsoftware can help'}
           />
        </div>
        <Share/>
    </div>
    </div>
  )
}

export default BlogPost
