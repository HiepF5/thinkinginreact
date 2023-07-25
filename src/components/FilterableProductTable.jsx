import React, { useMemo, useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
const productJSON = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

function FilterableProductTable() {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [count, setCount] = useState(0)

  
  function handleInputFilterText(value) {
    setFilterText(value)
  }
  function handleCheckStock() {
    setInStockOnly(!inStockOnly)
  }
  function getFilteredProducts() {
    return productJSON.filter((product) => {
      const conditionSearchText = product.name.toLowerCase().includes(filterText.toLowerCase());
      const conditionInStockOnly = !inStockOnly ? true : product.stocked
      return (conditionSearchText && conditionInStockOnly )
    })
  }
  const filteredProduct = useMemo(getFilteredProducts, [filterText,inStockOnly ])


  return (
    <>
      <div className='border-box border-box--gray'>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onChangeSearchText={handleInputFilterText}
          onChangeInStockOnly={handleCheckStock}
        />
        <ProductTable products={filteredProduct} />
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        <p>{count}</p>
      </div>
    </>
  )
}

export default FilterableProductTable
