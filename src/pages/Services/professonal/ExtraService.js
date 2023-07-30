import React from 'react'
import { CardCarousel } from '../../../components/carousel/CarouselHead'
import './pro.css'
import { Stats } from '../../../components/StatsItem/Stats'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Form from '../../../components/Form/Form';


function ExtraService() {
  return (
    <div>
        <div className='imma'>
            <div className='secoo'> 
            <div className='imma_title'>
                BI Implementation for an International Real Estate Developer
                <div className='flexSectiom'>
                <Stats
                title={'industry'}
                text={'Professional Services, Real Estate'}
                />
                <Stats
                title={'Technologies'}
                text={'MS SQL Server, Power BI, Python '}
                />
                </div>
                </div>
            </div>
        </div>
        <div className='mainSection_extra'>
            <h1 className='hp-title'>Customer</h1>
            <div className='ftext'>The Customer is a Texas-based company that helps its clients manage commercial and residential property taxes.</div>

            <h1 className='hp-title'>
                Challange
            </h1>
            <div className='ftext'>The Customer outgrew their ready-made web portal solution that allowed users to access their financial data. Legacy software would no longer meet their needs in terms of functionality and performance.</div>
            <h1 className='hp-title'>
                Solution
            </h1>
            <div className='ftext'>The Customer outgrew their ready-made web portal solution that allowed users to access their financial data. Legacy software would no longer meet their needs in terms of functionality and performance.
            To attract new clients and sustain the loyalty of the existing ones, the Customer needed to provide them convenient and easy access to the financial information with a more flexible and speedy 
            </div>
            <ul>
                <li>sign in</li>
                <li>with a more flexible and speedy</li>
                <li>terms of functionality </li>
                <li>outgrew their ready-made</li>
                <li>and sustain the loyalty</li>
                <li>Customer needed to provide</li>
                <li>information with a more flexible and speedy </li>
            </ul>
            <h1 className='hp-title'> Results </h1>
            <div className='ftext'>The Customer outgrew their ready-made web portal solution that allowed users to access their financial data. Legacy software would no longer meet their needs in terms of functionality and performance.
            To attract new clients and sustain the loyalty of the existing ones, the Customer needed to provide them convenient and easy access to the financial information with a more flexible and speedy 
            </div>

            <h1 className='hp-title'> Technologies and Tools </h1>
            <div className='ftext'>Microsoft SQL Server (DWH), Python (ETL), Microsoft Power BI (Reporting) 
            </div>
        </div>
        <div style={{backgroundColor: 'rgb(246, 248, 248)'}}>
            <h1 className='hp-title' style={{paddingLeft:'10%'}} >Need help with a similar project?</h1>
            <div className='last_sections'> 
        <div className='last_sec'>
                <Form/>
            </div>
        <div className='last_tion'> 
        <div style={{fontSize:22,fontWeight:'bold',paddingTop:8}}>Our contact details</div>
    <div>
    <div style={{display:'flex',gap:5}}> 
    <LocalPhoneIcon color='#005eb8'/>
    <div>
        <div style={{color:'#005eb8'}}> +892837397037  </div>
        <div style={{colorDescription

    :'#005eb8'}}>+892837397037</div>
    </div>
        </div>
        <div style={{display:'flex',gap:5}}> 
        <EmailIcon/>
        <span style={{color:'#005eb8'}}> contact@scnsoft.com </span>
        </div>
        
        
    </div>
        </div>
            </div>
        </div>
     
       
    </div>
  )
}

export default ExtraService