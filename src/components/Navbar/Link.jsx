import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10 lg:mr-10 px-4 hover:bg-cyan-600 rounded-sm'>
           <a href={route.path}>{route.title}</a>
       </li>
    );
};

export default Link;