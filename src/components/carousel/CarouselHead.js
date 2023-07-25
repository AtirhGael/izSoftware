import React,{useEffect,useState,useCallback} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { animated } from 'react-spring';

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
   // Add more items as needed
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
