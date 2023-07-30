import React,{useEffect,useState,useCallback} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { animated } from 'react-spring';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const items = [
   {
     name: 'Image 1',
     description: 'Hello World!',
     imageUrl: 'https://www.worldbeachguide.com/photos/side-beach-turkey.jpg',
   },
   {
     name: 'Image 2',
     description: 'Lorem ipsum dolor sit amet',
     imageUrl: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
   },
];
const data = [
  {
    name: 'Development of a Records Management System for a Legal Firm',
    description: 'BI solution delivered by ScienceSoft allowed the Customer to integrate the data from disparate sources and better understand their business with a comprehensive financial analysis.',
    imageUrl: 'https://www.worldbeachguide.com/photos/side-beach-turkey.jpg',
  },
  {
    name: 'An enterprise portal that offers advanced team collaboration and project management functionality and supports regulatory compliance.',
    description: 'An enterprise portal that offers advanced team collaboration and project management functionality and supports regulatory compliance.',
    imageUrl: 'https://www.scnsoft.com/images-for-slider-with-content/custom-software-dev/enterprise-portal-development-for-a-financial-advisory-firm.jpg',
  },
  {
    name:'Development of a Records Management System for a Legal Firm',
    description: 'A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents.',
    imageUrl:'https://www.scnsoft.com/images-for-slider-with-content/custom-software-dev/customer-portal-development-for-a-tax-consultation-agency.jpg',
  },
  {
    name:'Development of a Records Management System for a Legal Firm',
    description: 'A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents.',
    imageUrl: 'https://www.scnsoft.com/images-for-slider-with-content/sh-and-o365/development-of-a-sharepoint-records-management-system-for-a-us-legal-firm.jpg',
  },
];
export const BackgroundCarousel = () => {
  return (
    <Carousel autoPlay={true} animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};



const Item = ({ item }) => {
    const [text, setText] = useState('');

    const animateText = useCallback((direction) => {
      const description = "Lorem ipsum dolor sit amet...";
      const max = description.length;
  
      for (let index = 0; index < max; index++) {
        const startIndex = direction ? 0 : max;
        const endIndex = direction ? index : max - index;
        setTimeout(() => {
          setText(description.substring(startIndex, endIndex));
        }, index * 50);
      }
    }, []);
  
    useEffect(() => {
      animateText(true);
    }, [animateText]);
  return (
    <Paper
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     }}
    >
       <div className="sb-title-wrap">
            <div className="sb-title">
                <p>We</p>
            </div>
            <div className="sb-animated-inner" style={{ width: "210px" }}>
                <div className="sb-animated-label">Action</div>
                <div ><animated.span className="sb-animated-word">{text}</animated.span></div>
            </div>
            <div className="sb-title">
                <p>digital success</p>
            </div>
            </div>
    </Paper>
  );
};



export const CareersPage = () => {
  return (
    <Carousel autoPlay={true} animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {items.map((item, index) => (
        <Itema key={index} item={item} />
      ))}
    </Carousel>
  );
};



const Itema = ({ item }) => {
  return (
    <Paper
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     }}
    >
      <div style={{gap:20,display:'flex',flexDirection:'column',textAlign:'center'}}>
        <div style={{color:'#fff',fontSize:60,fontWeight:'bolder'}}>Careers</div>
        <div  style={{color:'#fff',fontSize:50,fontWeight:'bolder'}}>Work with IzSoftware</div>
        <div style={{color:'#fff',maxWidth:1000}}>AGF recognises that its’ staff are its most important resource and are key to the achievement of AGF’s objectives. The achievement of AGF’s strategic objectives is dependent on having the right number of staff, with the right knowledge, skills and competencies deployed in the right roles.</div>
        <div className='read-more'>Read More</div>
      </div>
    </Paper>
  );
};


export const CardCarousel = () => {
  const [text, setText] = useState('');

  const animateText = useCallback((direction) => {
    // Replace 'description' with the text you want to animate
    const description = "Lorem ipsum dolor sit amet...";
    const max = description.length;

    for (let index = 0; index < max; index++) {
      const startIndex = direction ? 0 : max;
      const endIndex = direction ? index : max - index;
      setTimeout(() => {
        setText(description.substring(startIndex, endIndex));
      }, index * 50);
    }
  }, []);

  useEffect(() => {
    animateText(true);
  }, [animateText]);
  return (
    <Carousel animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {data.map((item, index) => (
        <Paper
       className='pepperSection'
      >
         <div className='imageSection'> 
          <img alt='nothing' style={{height:'70%',width:'80%'}} className='imageSectionsm' src={item.imageUrl}/>
         </div>
         <div className='textsection'> 
         <div className='txt_title'> {item.name} </div>
         {item.description}
         
         <div className='details'> 
         <Link to={'professiona-services-extra'}>
          Project Details
         </Link>
         
         <ArrowForwardIcon sx={{
              color: "white",
            
            }}/>
         </div>
         </div>
      </Paper>
      ))}
    </Carousel>
  );
};

export const CaseStudy = () =>{
  return(
    <div
    className='pepperSection1'
   >
      <div className='imageSection'> 
       <img alt='nothing' style={{height:'100%',width:'100%'}} className='imageSectionsm' src='https://www.scnsoft.com/images-for-slider-with-content/custom-software-dev/customer-portal-development-for-a-tax-consultation-agency.jpg'/>
      </div>
      <div className='textsection1'> 
      <div className='hp-title' style={{marginTop:-35}}> Development of a Records Management System for a Legal Firm </div>
      A SharePoint-based records management system with document profiling and calendaring capabilities. The system ensures records immutability and facilitates management of large volumes of legal documents
      
      <div className='details1'> 
      <Link to={'professiona-services-extra'}>
       Learn More
      </Link>
      
      <ArrowForwardIcon sx={{
           color: "white",
         
         }}/>
      </div>
      </div>
   </div>
  )
}

export const CareersPageMore = () => {
  return (
    <Carousel autoPlay={true} animation="slide" 
    indicatorIconButtonProps={{
        style: {
          display: 'none',
        },
      }}
    stopAutoPlayOnHover={false}>
      {items.map((item, index) => (
        <More key={index} item={item} />
      ))}
    </Carousel>
  );
};



const More = ({ item }) => {
  return (
    <Paper
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     }}
    >
      <div className='more-page'>
        <div className='more-pages-head'>Work With IzSoftware</div>
        <div className='more-pages-text'>
                 AGF recognises that its’ staff are its most important resource and are key to the achievement of AGF’s objectives. The achievement of AGF’s strategic objectives is dependent on having the right number of staff, with the right knowledge, skills and competencies deployed in the right roles. </div>
      </div>
    </Paper>
  );
};
