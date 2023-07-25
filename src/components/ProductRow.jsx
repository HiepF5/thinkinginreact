import React from 'react'

function ProductRow({ product }) {
  return (
    <>
      <div className='flex w-400 border-box border-box--yellow p-20 m-20'>
        <div className='flex jcenter w-part font-bold' 
        style={{ color: !product.stocked ? 'red' : 'black' }}>
          {product.name}
        </div>
        <div className='flex jcenter w-part font-bold'>{product.price}</div>
      </div>
    </>
  )
}

export default ProductRow
