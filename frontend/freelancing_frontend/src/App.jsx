import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx';
import Maincontent from './components/Maincontent.jsx';



function App() {
  
  
  return (


      <div className='container'>
        <div>
            <Sidebar></Sidebar>
        </div>

        <div>
            <Maincontent></Maincontent>
        </div>
      </div>
  )

}

export default App;
