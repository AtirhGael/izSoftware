import React from 'react'
import { CArdComponent } from '../../components/Extra'
import './blog.css'
import { useNavigate} from 'react-router-dom'

function Blog() {
  const navigate = useNavigate()
  const pressable = ()=>{
    navigate('/blog-post')
  }
  return (
    <div className='main_blog'>
      <h1 className='hp-title'>Blog</h1>
      <div style={{display:'flex',gap:30,flexWrap:'wrap'}}>
      <CArdComponent
      onpress={pressable}
      />
      <CArdComponent/>
      <CArdComponent/>
      <CArdComponent/>
      <CArdComponent/>
      </div>
    </div>
  )
}

export default Blog
