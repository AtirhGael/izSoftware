import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/setup/store';
import About from './pages/About';
import IZNavBar from './components/Header/IZNavBar'
import Copyright from './components/Footer/Footer'
import Home from './pages/Home';
import Service from './pages/Services';
import DigitalTransform from './pages/Services/DigitalTransform';
import Health from './pages/Services/HealthCare/Health';

function App() {
  const [isSigning] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <IZNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/software-consulting' element={<Service/>}/>
        <Route path='/services/software-development' element={<DigitalTransform/>}/>
        <Route path='/healthcare/services' element={<Health/>}/>
      </Routes>
      <Copyright/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
