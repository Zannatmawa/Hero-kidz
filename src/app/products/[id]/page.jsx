import { getSingleProducts } from "@/actions/server/product";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";


const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const products = await getSingleProducts(id) || [];

    const {
        title,
        image,
        price,
        discount,
        ratings,
        reviews,
        sold,
        info,
        qna,
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



                    {/* Button */}
                    <button className="btn btn-primary w-full mt-4">
                        <FaShoppingCart className="mr-2" />
                        Add to Cart
                    </button>

                </div>
                <div className="col-span-full">

                    {/* Description */}
                    <p className="text-neutral leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Reviews */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                        <p className="text-gray-600">
                            Total Reviews: {reviews}
                        </p>
                    </div>
                    {/* Key Features */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">Key Features</h2>

                        {info?.length > 0 ? (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {info.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No features available</p>
                        )}
                    </div>

                    {/* Q&A Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Product Q&A</h2>

                        {qna?.length > 0 ? (
                            <div className="space-y-4">
                                {qna.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-base-100 p-4 rounded-lg shadow"
                                    >
                                        <p className="font-semibold">
                                            Q: {item.question}
                                        </p>
                                        <p className="text-gray-600 mt-1">
                                            A: {item.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">
                                No questions yet.
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
