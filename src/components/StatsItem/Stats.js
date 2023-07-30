import React from 'react'
import { Stack } from '@mui/material'
import colors from '../../constants/colors'

export function Stats({title,text}) {
  return (
    <div style={{paddingTop:'13%'}}>
        <Stack spacing={1} borderLeft={'1px #ccc solid'} pl={2}>
    <span style={{color:'#fff',fontSize:'30px',marginBottom:0,lineHeight:1.7}}>{title}</span>
    <div style={{textAlign: 'start', color:'#fff',fontWeight:'300',fontSize:'20px'}}>{text}</div>
</Stack></div>
  )
}

