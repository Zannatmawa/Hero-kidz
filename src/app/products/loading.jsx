import ProductsSkeleton from '@/components/skeleton/ProductsSkeleton'
import React from 'react'

const loading = () => {
    return (
        <div className=''>
            {[...Array(9).map((_, index) => {
                <ProductsSkeleton key={index}></ProductsSkeleton>
            })]}
        </div>
    )
}

export default loading