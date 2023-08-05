import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import IZNavBar from './components/Header/IZNavBar'
import Copyright from './components/Footer/Footer'
import Home from './pages/Home';
import Service from './pages/Services';
import DigitalTransform from './pages/Services/DigitalTransform';
import Health from './pages/Services/HealthCare/Health';
import Professional from './pages/Services/professonal/Professional';
import ExtraService from './pages/Services/professonal/ExtraService';
import CaseAtudy from './pages/caseStudy';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Careers from './pages/Careers/Careers';
import More from './pages/Careers/More';
import InitContent from './components/Main/MainContactUs/InitContent';
import Events from './pages/Event/Events';

function App() {
  const [isSigning] = useState(true);

  return (
 
      <BrowserRouter>
      <IZNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/software-consulting' element={<Service/>}/>
        <Route path='/services/software-development' element={<DigitalTransform/>}/>
        <Route path='/healthcare/services' element={<Health/>}/>
        <Route path='/professiona-services' element={<Professional/>}/>
        <Route path='/professiona-services-extra' element={<ExtraService/>}/>
        <Route path='/case-studies' element={<CaseAtudy/>}/>
        <Route path='/blog-post' element={<BlogPost/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/careers-more' element={<More/>}/>
        <Route path='/blog' 
         options={{title: 'Welcome'}}
        element={<Blog/>}/>
        <Route path="/contact-us" element={<InitContent />} />
        <Route path="/events" element={<Events/>} />
      </Routes>
      <Copyright/>
      </BrowserRouter>

  );
}

export default App;
