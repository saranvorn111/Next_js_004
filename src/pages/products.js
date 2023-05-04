import React from 'react'
import ProductTable from '@/components/ProductTable'

export default function products() {
  return (
    <>
     
     <div className='container mt-4 '>
        <h1>All products tables </h1>
        <div className='d-flex flex-column align-items-center '>
              <ProductTable/>    
        </div>
     </div>
    </>
  )
}

