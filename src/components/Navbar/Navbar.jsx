import React, { useState } from 'react';
import Link from './Link';
import { PanelTopOpen,  Minimize } from 'lucide-react';

const navigateData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: "home"
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: "info"
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    icon: "briefcase"
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    icon: "mail"
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    icon: "book"
  }
]
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigateData.map(route => <Link key={route.id} route={route}></Link>)
    return (
      <nav className='flex justify-center mx-10 mt-5'>

        <span className='flex' onClick={() =>setOpen(!open)}>
          { open ? <Minimize className='md:hidden' /> : 
          <PanelTopOpen className='md:hidden' /> }

        <ul className={`md:hidden duration-1000 absolute ${open ? 'top-12' : '-top-32'} bg-gray-400 rounded-md`}>
          {links}
        </ul>

        <h3 className='ml-4'>My Navbar</h3>
        </span>

         <ul className='md:flex hidden'>
           { 
             links
           }
         </ul>
       
        {/* <ul className='flex'>
          {
            navigateData.map(route => <li className='mr-10'>
              <a href={route.path}>{route.title}</a></li>)
          }
        </ul> */}
        {/* <ul className='flex'>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="home">Home</a></li>
            <li className='mr-10'><a href="/blog">Blog</a></li>
        </ul>  */}
      </nav>
    );
};
export default Navbar;