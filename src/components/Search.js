import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const [ searchInput, setSearchInput ] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;