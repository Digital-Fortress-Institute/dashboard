import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom'
import { myData } from '../../data';

const Sidebar = () => {
  return (
    <div className='siderbarContainer'>
        {myData.map((x) => (
             <Link to={x.route}>
                {x.name} <br />
             </Link>
        ))}
       
    </div>
  )
}

export default Sidebar