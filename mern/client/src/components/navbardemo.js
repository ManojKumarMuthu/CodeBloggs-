import React, { useStaet } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from  'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import './navbar.css';
import { IconContext } from 'react-icon';

function Navbardemo() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <Link to='#' classeName='menu-bars'>
                    <FaIcons.Fabar onclick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onclick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                                </Link>
                                </li>
                                {SidebarData.map((item, index) => {
                                        return (
                                            <li key={index} classeName={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                   </Link>
                                                   </li> 
                                        );
                                })}
                                </ul>
                                </nav>
                                </IconContext.Provider>
                                </>
    );
 }

export default Navbardemo