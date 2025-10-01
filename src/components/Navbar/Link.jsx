import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10'>
           <a href={route.path}>{route.title}</a>
       </li>
    );
};

export default Link;