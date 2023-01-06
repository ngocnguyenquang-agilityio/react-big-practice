// TODO: Sidebar Component

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col h-screen p-3 bg-slate-50   shadow w-60'>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <h2 className='text-xl font-bold'>Dashboard</h2>
          </div>
          <div className='flex-1'>
            <ul className='pt-2 pb-4 space-y-1 text-sm'>
              <li className='rounded-sm'>
                <Link to='/'>
                  <a className='flex items-center p-2 space-x-3 rounded-md'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                    </svg>
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link to='/collection'>
                  <div className='flex items-center p-2 space-x-3 rounded-md'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                    </svg>
                    <span>Collection</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
