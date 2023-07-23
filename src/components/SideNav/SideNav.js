import React from 'react'
import './style.css'

function SideNav({one,two,three,four,five}) {
  return (
    <div className='sideNav'>
      <div className='content'>Table Of content</div>
      <div className='content_text'>{one}</div>
      <div className='content_text'>{two}</div>
      <div className='content_text'>{three}</div>
      <div className='content_text'>{four}</div>
      <div className='content_text'>{five}</div>
    </div>
  )
}

export default SideNav
