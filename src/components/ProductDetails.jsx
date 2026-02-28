import ProductBadge from './ProductBadge';
import ProductRatings from './ProductRatings';

const ProductDetails = ({product, ratings}) => {
  return (
    <div>
      <div className="text-xl xl:text-2xl font-medium mb-1">{product.title}</div>
      <div className="text-sm xl:text-base mb-1">by <span className="text-blue-500">{product.brand}</span></div>
      {ratings && (
        <div className="flex items-center">
          <ProductRatings avgRatings={product.avgRating} ratings={product.ratings} />
        </div>
      )}
      <ProductBadge badge={product.badge} />
    </div>
  )
}

export default ProductDetails;