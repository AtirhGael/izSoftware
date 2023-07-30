import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, Popover, Stack } from '@mui/material'
import StatsItem from '../../components/StatsItem'
import './styles.css'
import { process,partnership } from '../Data/HomeData';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import React, { useState } from 'react';
import { Backend, Framework, Frontend, database, mobile } from '../Data/serviceMap';
import {Box} from '@mui/material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import Stacks from '../carousel/stacks';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';




export function Extra({bgCollor}) {
  return (
    <div style={{ height:'7px',width:'100%',backgroundColor:bgCollor }}>

    </div>
  )
}

export function FlexContainer(){
  return(
    <div className='flex-comtainer'> 
    <div className='contain'>
            <div className='image'>
              <img src='	https://www.scnsoft.com/software-development-services/software-development/cro/custom-software.svg'
              className='flex-container-img'
              />
            </div>
            <div className='title'>Custom software development</div>
            <div className='textContent'>We create software with long-term business value – tailored uniquely to your business processes and adjustable to future needs.</div>
            

    </div>
          </div>
  )
}

export function ServiceCompany(){
  return(
    <div className='flex-comtainer_service'> 
    <div className='contain'>
            <div className='image'>
              <img src='https://www.scnsoft.com/professional-services/crm.svg'
              className='flex-container-img' alt='nthing'
              />
            </div>
            <div className='titles'>CRM</div>
            <div className='textContent'>We create software with.</div>
            <ul>
              <li>Building brand awareness. .</li>
              <li>Content marketing. .</li>
              <li>Omnichannel lead generation. .</li>
              <li>Customer journey management. .</li>
            </ul>
            <div className='textContent'>Sales</div>
            <ul>
              <li>Long-cycle sales. .</li>
              <li>Account development. .</li>
              <li>Building brand awareness.</li>
              <li>Building brand.</li>
            </ul>
            <div className='textContent'>Technologies / Platform</div>
            <div className='contents_last'>
              <div className='bground'>Dynamics 365 Marketing .</div>
              <div className='bground'>Dynamics 365 Sales </div>
            </div>
            <div className='seeMore'>
              See More
            </div>
    </div>
          </div>
  )
}
export function ITService(){
  return(
    <div className='flex-comtainer_service'> 
    <div className='contain'>
            <div className='image'>
              <img src='https://www.scnsoft.com/professional-services/crm.svg'
              className='flex-container-img' alt='nthing'
              />
            </div>
            <div className='titles'>CRM</div>
            <div className='textContent'>We create software with.</div>
            <ul>
              <li>Building brand awareness. .</li>
              <li>Content marketing. .</li>
              <li>Omnichannel lead generation. .</li>
              <li>Customer journey management. .</li>
            </ul>
            <div className='textContent'>Sales</div>
            <ul>
              <li>Long-cycle sales. .</li>
              <li>Account development. .</li>
              <li>Building brand awareness.</li>
              <li>Building brand.</li>
            </ul>
          <div className='implementation'>Request Emplementation</div>
    </div>
          </div>
  )
}


export function SoftwareTypesCard({text}){
  return(
    <div className='softwareTypeCard'>
      <div className='softwareTypeCard_img'>
        <img src='https://www.scnsoft.com/software-development-services/software-development/service_team-augmentation.svg
' alt='immm' 
style={{height:'80px',width:'80px'}}
className='softwareTypeCard_imgg'/>
      </div>
      <div className='softwareTypeCard_title'> Business & project management </div>
      <div style={{maxWidth:'300px',textAlign:'center'}}> {text}</div>

      <div className='softwareTypeCard_text'>
        <ul>
          <li>Project management</li>
          <li>ERP</li>
          <li>Task management</li>
          <li>Risk and Issue management</li>
          <li>Document management</li>
        </ul>
      </div>
    </div>
  )
}


export function Transform(){
return(
  <div className='trans_container'>
    <img alt='nothing' src='https://www.scnsoft.com/blue-outline-icons/ml-1.svg'
    style={{height:'70px',width:'70px'}}
    />
    <div className='trans_text' >Machine And Dep Learning</div>
  </div>
)
}

export function SoftwareForAdvancedBusiness(){
  return(
    <div className='softwareType'>
     <div style={{padding:'25px'}}>
      <div className='software_title'> Business & project management </div>
      <div className='softwareCard_text'>
      Software that can find sophisticated patterns in data and continuously learn to deliver more accurate results. Read more on https://www.scnsoft.com/services/software-development
      </div>
    <div style={{textAlign:'end',color:'#005eb8',display:'flex',alignItems:'center',justifyContent:'end'}}>
      Our Expertise in Ai
<ArrowForwardSharpIcon style={{color:'#005eb8'}} />
    </div>
     </div>
    </div>
  )
}
export function CArdComponent({onpress}){
  return (
    <Card sx={{ maxWidth: 450 }}
   
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="	https://www.scnsoft.com/blog-pictures/crm-pics/law-crm.png"
      />
      <CardContent>
        <div className='ty'>CRM</div>
        <Typography gutterBottom variant="h5" component="div" className='card_C_title'>
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Button size="small">Share</Button>
        {/* <Button   onPress={onpress} size="small">Learn More</Button> */}
        <Link to={'blog-post'}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

export function Technologies(){
  const [isHovered, setIsHovered] = useState(false)
  return(
    <div className='capability_section'>
          <div className='backend'>
            Backend Programming Languages
          </div>
          <div 
          className='item_of_lanuage'
         >
            {Backend.map((item) => (
              <Box className='item_group'
                style={{
                  '&:hover': {
                    boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
                    zIndex:0,
                    // backgroundColor:{isHovered?'red':'yellow+'}
                  },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <PopupState className='pop'>
                  {(popupState) => (
                    <div>
                      <div className='images'
                        {...bindTrigger(popupState)}>
                       <img src={item.image} width={55} height={48} />

                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Box>
            ))}

            {/* <button className='toggle_btn' ></button> */}
          </div>

         
          <div className='fronend_framework'> 
          <div className='backend'>
            Frontend Programming Languages
          </div>

          <div className='languages_title'> Languages </div>
          <div className='item_of_lanuage'>
            {Frontend.map((item) => (
              <div className='item_group'

              >

                <PopupState className='pop' >
                  {(popupState) => (
                    <div >
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={48} />
                      </div>
                      
                    
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>

          <div className='languages_title'>
             javascript Frameworks
          </div>
          <div className='item_of_lanuage'>
            {Framework.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={34} height={48} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>
          </div>

          {/* mobile application section */}
          <div className='backend'>
            Mobile
          </div>
          <div className='item_of_lanuage'>
            {mobile.map((item) => (
              <Box className='item_group'
                style={{
                  '&:hover': {
                    boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
                    zIndex:0,
                    // backgroundColor:{isHovered?'red':'yellow+'}
                  },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                       <img src={item.image} width={55} height={48} />

                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Box>
            ))}

            {/* <button className='toggle_btn' ></button> */}
          </div>
          {/* Mobile section ends here */}

          {/* Databases / data storages */}
          <div className='fronend_framework'> 
          <div className='backend'>
          Databases / data storages 
          </div>

          <div className='languages_title'> SQL </div>
          <div className='item_of_lanuage'>
            {database.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={48} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>

          <div className='languages_title'>
            Nosql
          </div>
          <div className='item_of_lanuage'>
            {database.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                      <img src={item.image} width={55} height={48} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>
          </div>

          {/* database section ends here */}
                        <Stacks/>
        </div>
  )
}

export function Optimal(){
 
  return(
    <div className='optimal'>
       
    <div> <img src='https://www.scnsoft.com/icons-tritone/scrum.svg' style={{height:'80px',width:'80px'}} alt='nothing' /></div>
    <div> 
      <div style={{fontWeight:'bold',fontSize:'30px',padding:'15px 0px 15px'}}> Scrum development </div>
      <div className='h'>  Software development is done in Sprints, 2–3-week iterations with identified granular goals and backlogs. We ensure process transparency via sprint planning meetings, daily stand-ups, sprint review (and demo), retrospective, backlog refinement (grooming). </div>
      {/* <img src='https://www.scnsoft.com/software-development-services/software-development/cro/methodologies-scrum.svg' style={{height:'80px',width:'80px'}} alt='nothing' /> */}
      <div>Best for: any product development project with a need to test the idea, midsize projects in custom software development where software requirements cannot be accurately defined, incremental development of large complex software (which is easy to divide into small functional parts) to start getting value fast.</div>
    </div>
    </div>
  )
}




export function Industries({image,text}){
  const [isHovered, setIsHovered] = useState(false);

 
  const lineStyles = {
    with:'100%',
    transition: '0.5s',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    border:'1px',
    height:'4px',
    backgroundColor:'#005eb8'
  };
  const textStyle ={
    color:isHovered? '#005eb8':'',
    alignItems:'center'
  }
  return(
    <div >
        <div className='inner'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <div className='icon' >    
          {!isHovered? <ArrowOutwardIcon fontSize='12px' sx={{color:'#005eb8'}}/> : <ArrowForwardIcon fontSize='12px' sx={{color:'#005eb8'}}/>}
           </div>
           
          <div className='second' > 
          <div className='item_aditable_image'>
            <img src={image} alt='nothing to show'
            height={100}
            width={100}
            />
          </div>
          <div 
          className='editable_text'
          style={textStyle}>{text}</div>
           </div>
           <div style={lineStyles}></div>
        </div>
        
  </div>
  )
}




export function SOlutions({item}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <Card className='solutions'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" textAlign={'center'}>
          {item}
        </Typography>
        <Typography  variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: -2, right: 5 }}>
        {!isHovered? <SouthEastIcon color='#005eb8' fontSize='12px'/> : <ArrowForwardIcon color='#005eb8' fontSize='12px'/>}
        </Typography>
      </CardContent>
    </Card>
  )
}


export function SOlutions2({item}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <Card className='solutions2'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" textAlign={'center'} className='solutions_text'>
          {item}
        </Typography>
        <Typography  variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: -2, right: 5 }}>
        {!isHovered? <SouthEastIcon color='#005eb8' fontSize='12px'/> : <ArrowForwardIcon color='#005eb8' fontSize='12px'/>}
        </Typography>
      </CardContent>
    </Card>
  )
}


export function Policy({item}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <Card
  className='policy_iner'
    style={{ minWidth: 200,height:'100px',
      marginBottom: 2 ,border: '1px solid #dadfe3',
      transition: 'box-shadow 0.3s ease-in-out,border-color .3s ease-in-out',
      position: 'relative',
      flexBasis: 'calc(30% - 30px)',
     textAlign:'center',
     justifyContent:'center',
     alignItems:'center',
      display:'flex',
      flexDirection:'row',
      left: 0,
       right: 0,
      // flexWrap:'wrap',
    '&:hover': {
      boxShadow: '0 2px 5px 0 rgba(0,0,0,.2)',
      zIndex:0,
      
    },
    
    }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" textAlign={'center'} className='policy_box'>
          {item}
        </Typography>
      </CardContent>
    </Card>
  )
}

export function POpovers({practice,year,projects,amount,workforce,number,text}){
  return(
    <Typography sx={{ p: 2 }} className='poping' >
        <div style={{display:'flex',
        justifyContent:'space-between',
        alignItems:'stretch', 
      }}>
          <div style={{ flex:'1 1 auto',justifyContent:'start' }}>
             <p className='column_title'> {practice} </p>
             <p className='column_value'> {year}</p>
          </div>
          <div className='separator'> </div>
          <div style={{ flex:'1 1 auto' }}>
          <p className='column_title'> {projects} </p>
             <p className='column_value'> {amount}</p>
          </div>
          <div className='separator'> </div>
          <div style={{ flex:'1 1 auto' }}>
          <p className='column_title'> {workforce} </p>
             <p className='column_value'> {number}</p>
          </div>
         
        </div>
        <div className='popup_description'>
         <p> {text}</p>
        </div>
         <div className='popup_button'>
          Learn More
         </div>
         
    </Typography>
  )
}

export function Processes(){
  return(
    <div className="swiper-slide p-3 " data-swiper-slide-index="6" style={{width: '100%',gap:10}}>
    {process.map((items)=>(
   <div class="card-box">
    <div class="title-box d-flex align-items-center flex-column justify-content-center text-center">
    <img class="img-fluid" src={items.image} alt="development"/>
    <h3 class="h6 my-3 w-100"><b>{items.title}</b></h3>
    <p class="desc m-0">{items.text}</p>
    </div>
</div>
    ))}
    </div>
  )

}

export function Partnership(){
  return(
    <div className="swiper-slide p-3 " data-swiper-slide-index="6" style={{width: '100%', marginRight: '10px',gap:10}}>
    {partnership.map((items)=>(
   <div class="card-box">
    <div class="title-box d-flex align-items-center flex-column justify-content-center text-center">
    <img class="img-fluid" src={items.image} alt="development"/>
    <h3 class="h6 my-3 w-100"><b>{items.title}</b></h3>
    <p class="desc m-0">{items.text}</p>
    </div>
</div>
    ))}
    </div>
  )}