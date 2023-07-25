import React, { memo } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products }) {
  const rows = [];
  let lateCategory = '';
  products.forEach((product) => {
    if (product.category !== lateCategory) {
      rows.push(
        <div key={product.category} className='border-box border-box--green  p-20 m-20'>
          <ProductCategoryRow name={product.category} />
        </div>
      )
      lateCategory= product.category;
    }
        rows.push(
            <ProductRow key={product.name}  product={product} />
          )

  })
  console.log('renderProductTable')
  return (
    <>
      <div className='border-box border-box--violet p-20 m-20'>
        <div className='flex w-400 '>
          <div className='flex jcenter w-part font-bold'>Name</div>
          <div className='flex jcenter w-part font-bold'>Price</div>
        </div>
        <div>{rows}</div>
      </div>
    </>
  )
}

export default memo(ProductTable)
