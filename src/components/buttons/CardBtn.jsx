import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CardBtn = ({ product }) => {
    return (
        <button className="btn btn-primary btn-sm w-full">
            <FaShoppingCart className="mr-2" />
            Add to Cart
        </button>
    )
}

export default CardBtn