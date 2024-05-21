import React, { useCallback } from 'react';
import UserOnline from '../atoms/UserOnline.tsx';

const iconWH: number = [20, 20];

const Header: React.FC = () => {

  useCallback(UserOnline, []);

  return (
    <header className='container-fluid bg-white py-2 d-flex justify-content-between align-items-center rounded'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-3" style={{width:iconWH[0], height:iconWH[1]}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>

      <div className='bg-light rounded-circle' style={{position: 'relative'}}>
        <img src='img/user.png' alt='user icon'/>
        <UserOnline active={true}/>
      </div>
    </header>
  )
}

export default React.memo(Header);