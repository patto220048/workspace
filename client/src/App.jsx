import { useState } from 'react';
import './app.scss'

import Navbar from './layout/navbar/Navbar'
import Sidebar from './layout/sidebar/Sidebar'
import Home from './pages/home/Home';



function App() {

  return (
   
    <div className="warpper-app">
      <Home/>
   
    </div>
      
    
   
  );
}

export default App;
