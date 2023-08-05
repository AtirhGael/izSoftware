import React from 'react'
import './events.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Upcoming from '../../components/Timeline/Upcoming';

function Events() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='main-events' >
        
        
        <div className='name'>Events</div>
            <div className='name-text'> Find what events are coming next.</div>
        <div className='events'> 
           
            <div  className='events-right'>
                <div className='events-right-top'> 
                    {/* <div>Showing 61 of 61</div> */}
                    <div> 
                        <FormControl sx={{ m: 1, minWidth: 140,backgroundColor:'#0065c5',}} size="small">
                <InputLabel id="demo-select-small-label" sx={{color:'#fff'}}>Event Type</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Event Type"
                    onChange={handleChange}
                >
                    <MenuItem value="">
               
                    </MenuItem>
                    <MenuItem value={10}>In Person</MenuItem>
                    <MenuItem value={20}>Webiner</MenuItem>

                </Select>
                </FormControl></div>
                </div>    
                <div>
                    <h1 className='events-upcomings'>Upcoming Events</h1>
                    <div style={{gap:'50px',display:'flex',flexDirection:'column'}}>
                    <Upcoming/>
                    <Upcoming/>
                    </div>
                </div>
            </div>    
         </div>
    </div>
  )
}

export default Events