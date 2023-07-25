import React from 'react'

function SearchBar({filterText, inStockOnly, onChangeInStockOnly, onChangeSearchText}) {
  return (
    <>
      <div className='border-box border-box--blue p-20 m-20'>
        <input placeholder='Search...' value={filterText} onChange={(e)=>{onChangeSearchText(e.target.value)}}/>
        <br />
        <input type='checkbox' id='checkbox' checked={inStockOnly} onChange={()=>onChangeInStockOnly()}/>
        <label htmlFor='checkbox'>Only show product in stock</label>
      </div>
    </>
  )
}

export default SearchBar
