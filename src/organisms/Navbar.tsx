import React from 'react';

const Navbar: React.FC = () => {

 // console.log("Navbar montado");

  return (
    <nav className=''>
      <ul className='list-group'>
        <a href='#'><li className='list-group-item list-group-item-action active'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
        <a href='#'><li className='list-group-item list-group-item-action'>aa</li></a>
      </ul>
    </nav>
  )
}

export default React.memo(Navbar);