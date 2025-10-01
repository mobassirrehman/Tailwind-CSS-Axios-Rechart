import React from 'react';
import Link from './Link';

const Navbar = () => {
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
    return (
      <nav>
         <ul className='flex'>
           { navigateData.map(route => <Link key={route.id} route={route}></Link>)}
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