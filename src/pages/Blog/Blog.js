import React from 'react'
import { CArdComponent } from '../../components/Extra'
import './blog.css'

function Blog() {
  return (
    <div className='main_blog'>
      <h1 className='hp-title'>Blog</h1>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
      <CArdComponent/><CArdComponent/><CArdComponent/><CArdComponent/><CArdComponent/>
      </div>
    </div>
  )
}

export default Blog
