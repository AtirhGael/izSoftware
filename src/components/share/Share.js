import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


 

function Share() {
  return (
    <div>
      <div className="page-share">
            <p className="page-share-desc">Share:</p>
            <a className="page-share-link" href='/'>
          
            <FacebookIcon titleAccess="Youtube Account"/>  
            </a>
            <a className="page-share-link" href='/'>
            
           
            <TwitterIcon titleAccess="Twitter Account"/> 
           
            </a>
            <a className="page-share-link" href='/'>
           
            <LinkedInIcon titleAccess="Linkedin Account"/> 
            </a>
            </div>
      </div>
  )
}

export default Share