import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='Search with order ID' value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder;