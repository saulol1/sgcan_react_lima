import React from 'react';
import Header from '../organisms/Header.tsx';
import Navbar from '../organisms/Navbar.tsx';

const Layout: React.FC = ({children}) => {

  //console.log("layout montado")

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-1 p-0'>
                <Navbar/>
            </div>
            <main className='col-11 py-3'>
                <Header/>
                {children}
            </main>
        </div>
    </div>
  )
}

export default React.memo(Layout);