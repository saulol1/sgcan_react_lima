import React from 'react';

const CreateFakeListItem: React.FC = () => {
  return (
    <a href='#'>
      <li className='list-group-item list-group-item-action'>
        <svg style={{width:'24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </li>
    </a>
  )
}

const Navbar: React.FC = () => {

  return (
    <nav className=''>
      <ul className='list-group'>
        <a href='#'>
          <li className='list-group-item list-group-item-action active'>
            <svg style={{width:'24px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </li>
        </a>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
        <CreateFakeListItem/>
      </ul>
    </nav>
  )
}

export default React.memo(Navbar);