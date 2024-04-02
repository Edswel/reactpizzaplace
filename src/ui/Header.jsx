import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className='flex items-center justify-between sm:px-6 border-b border-stone-200 bg-yellow-400 uppercase px-4 py-3 font-pizza'>
      <Link className='tracking-widest ' to='/'>Luigi Pizzeria</Link>

      <SearchOrder />

      <Username />
    </header>
  )
}

export default Header;