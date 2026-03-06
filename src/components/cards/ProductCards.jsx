import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    console.log(product._id)
    const {
        _id,
        title,
        image,
        price,
        discount,
        ratings,
        reviews,
        sold,
    } = product;

    const discountedPrice = Math.round(
        price - (price * discount) / 100
    );

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">

            {/* Image */}
            <figure className="p-4">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded-xl object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-4">

                {/* Title */}
                <h2 className="card-title text-base font-semibold line-clamp-2">
                    {title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                    <FaStar className="text-warning" />
                    <span className="font-medium">{ratings}</span>
                    <span className="text-gray-500">
                        ({reviews} reviews)
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-primary">
                        ৳{discountedPrice}
                    </span>
                    {discount > 0 && (
                        <span className="text-sm line-through text-gray-400">
                            ৳{price}
                        </span>
                    )}
                </div>

                {/* Sold */}
                <p className="text-sm text-gray-500">
                    Sold: {sold}
                </p>

                {/* Button */}
                <div className="card-actions mt-3">
                    <button className="btn btn-primary btn-sm w-full">
                        <FaShoppingCart className="mr-2" />
                        Add to Cart
                    </button>
                    <Link className="btn btn-primary btn-sm w-full" href={`/products/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
