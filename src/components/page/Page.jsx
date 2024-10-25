import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Management from '../managenent/Management';
import {Route, Routes} from 'react-router-dom'
import Sign from '../signin/Sign';
import Footer from '../footer/Footer';

const Page = () => {
  return (
    <div className='page'>
        <Header />
        <div className='tunde'>
             <Sidebar />
           
             <div className='sidebarRight'>
             <Routes>

                <Route path='/management' element={<Management />}/>
                <Route path='/signin' element={<Sign />}/>
                
            </Routes>
                

             </div>
        </div>
        <Footer />
    </div>
  )
}

export default Page