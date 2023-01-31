import { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';

const Sidebar = () => {
  const { value } = useCollection();

  return (
    <div className='flex'>
      <div className='flex flex-col h-screen p-1 md:p-3 bg-slate-50 shadow w-24 md:w-60'>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <h2 className='text-sm md:text-xl font-bold'>Dashboard</h2>
          </div>
          <div className='flex-1'>
            <ul className='pt-2 pb-4 space-y-1 text-sm'>
              <li className='rounded-sm'>
                <NavLink to='/'>
                  {({ isActive }) => (
                    <div className={isActive ? 'rounded-md bg-slate-300' : ''}>
                      <div className='flex items-center p-2 md:space-x-3 rounded-md hover:bg-slate-300'>
                        <svg
                          className='w-4 h-4 md:w-6 md:h-6'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                        </svg>
                        <span className='text-xs md:text-lg'>Home</span>
                      </div>
                    </div>
                  )}
                </NavLink>
              </li>
              <li className='rounded-sm'>
                <NavLink to='/collection'>
                  {({ isActive }) => (
                    <div className={isActive ? 'rounded-md bg-slate-300' : ''}>
                      <div className='flex justify-between hover:bg-slate-300 p-2 md:space-x-3 rounded-md items-center'>
                        <div className='flex items-center md:space-x-3'>
                          <svg
                            className='w-4 h-4 md:w-6 md:h-6'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
                          </svg>

                          <span className='text-xs md:text-lg'>Collection</span>
                        </div>
                        <label className='bg-sky-500 rounded-full w-6 h-5 text-center'>{value.length}</label>
                      </div>
                    </div>
                  )}
                </NavLink>
              </li>

              <li className='rounded-sm'></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
