import React from 'react'
import Grid from '@mui/material/Grid';

function Upcoming() {
  return (
    <Grid item xs={12} sm={12} md={10}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
           <div className='events-row'>
           <div className='events-date-row'>
                <div className='events-date'>jun</div>
                <div className='events-day'>30</div>
            </div>
            <div style={{ borderLeft: "2px solid rgb(226, 232, 240)", height: "240px" }}></div>
            <div className='events-right-section'>
                <div className='Inperson'> in Person </div>
                <div className='Inperson-title'> Developers Day:Pune</div>
                    <div className='Inperson-text'> Calling all Indian Trailblazers! Join us at Developer Days in India happening in August and September 2023. Register now for an incredible opportunity to learn, connect, have fun, and elevate your skills. See you there! 
                    </div>
                    <div className='dited'> friday,august 24,2023 at ED</div>
                    <div className='dited'> 10:30 to 12:00</div>
                </div>
           </div>
        </Grid>
    </Grid>
  )
}

export default Upcoming
