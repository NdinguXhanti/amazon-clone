import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
    const starNumber = props.avgRatings;
    const ratingNumber = props.ratings;

  return (
    <div className="flex">
        { Array.from ( { length: starNumber }, (_, i) => 
            <StarIcon key={i} className="stroke-star-yellow fill-star-yellow h-[20px]" />
        )}
          { Array.from ( { length: 5 - starNumber }, (_, i) => 
            <StarIcon key={i} className="stroke-star-yellow h-[20px]"/>)}
        <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>    
    </div>
  )
}

export default ProductRatings;