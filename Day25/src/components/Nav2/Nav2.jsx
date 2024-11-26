import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


const Nav2 = () => {
    const [open,setOpen]= useState(false)
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'About Us',
          path: '/about',
        },
        {
          id: 3,
          name: 'Services',
          path: '/services',
        },
        {
          id: 4,
          name: 'Contact',
          path: '/contact',
        },
        {
          id: 5,
          name: 'Profile',
          path: '/profile/:id',
        },
      ];
      
     
      
    return (
        <nav className="text-black p-6">
          <div className="md:hidden" onClick={()=>setOpen(!open)}>
            {
              open===true?<AiOutlineClose></AiOutlineClose>:<IoMenu className="text-2xl "></IoMenu>
            }
            
          </div>
            <ul className={`md:flex md:static absolute px-6 shadow-lg duration-1000 ${open?'':'hidden'}`}>
            {
                routes.map(route=><Link  key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Nav2;