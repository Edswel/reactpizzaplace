import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Luigi Pizzeria</Link>

      <SearchOrder />

      <p>Ini</p>
    </header>
  )
}

export default Header;