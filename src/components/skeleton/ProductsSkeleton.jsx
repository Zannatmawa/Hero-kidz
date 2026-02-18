const ProductCardSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-lg animate-pulse">

            {/* Image Skeleton */}
            <figure className="p-4">
                <div className="w-full h-50s bg-base-300 rounded-xl"></div>
            </figure>

            {/* Content */}
            <div className="card-body p-4 space-y-3">

                {/* Title */}
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
                <div className="h-4 bg-base-300 rounded w-1/2"></div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-base-300 rounded-full"></div>
                    <div className="h-4 w-20 bg-base-300 rounded"></div>
                </div>

                {/* Price */}
                <div className="flex gap-2">
                    <div className="h-5 w-24 bg-base-300 rounded"></div>
                    <div className="h-4 w-16 bg-base-300 rounded"></div>
                </div>

                {/* Sold */}
                <div className="h-4 w-28 bg-base-300 rounded"></div>

                {/* Button */}
                <div className="h-9 w-full bg-base-300 rounded-lg mt-2"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
