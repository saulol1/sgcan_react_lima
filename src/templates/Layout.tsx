import React from 'react';
import Header from '../organisms/Header.tsx';
import Navbar from '../organisms/Navbar.tsx';

const Layout: React.FC = ({children}) => {

  return (
    <div className='container-fluid'>
        <div className='row'>
            
            <main className='col-12 py-3'>
                <Header/>
                {children}
            </main>
        </div>
    </div>
  )
}

export default React.memo(Layout);