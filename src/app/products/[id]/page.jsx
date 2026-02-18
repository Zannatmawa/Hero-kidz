import { getProducts } from "@/actions/server/product";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";


const ProductDetailsPage = async ({ params }) => {
    const { id } = params;
    // const product = await getProductById(id);
    const products = await getProducts() || []

    const {
        title,
        image,
        price,
        discount,
        ratings,
        reviews,
        sold,
        description,
    } = products;

    const discountedPrice = Math.round(
        price - (price * discount) / 100
    );

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image */}
                <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={400}
                        className="rounded-xl object-cover w-full"
                    />
                </div>

                {/* Details */}
                <div className="space-y-4">

                    <h1 className="text-3xl font-bold">{title}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <FaStar className="text-warning" />
                        <span className="font-semibold">{ratings}</span>
                        <span className="text-gray-500">
                            ({reviews} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">
                            ৳{discountedPrice}
                        </span>
                        {discount > 0 && (
                            <span className="line-through text-gray-400">
                                ৳{price}
                            </span>
                        )}
                    </div>

                    {/* Sold */}
                    <p className="text-sm text-gray-500">
                        Sold: {sold}
                    </p>

                    {/* Description */}
                    <p className="text-neutral leading-relaxed">
                        {description}
                    </p>

                    {/* Button */}
                    <button className="btn btn-primary w-full mt-4">
                        <FaShoppingCart className="mr-2" />
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
