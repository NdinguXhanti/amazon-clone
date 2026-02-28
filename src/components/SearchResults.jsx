import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageCard from "./HomePageCard";
import { callAPI } from "../utils/CallApi";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  
  const query = searchParams.get('q') || '';

  useEffect(() => {
    callAPI("data/products.json").then((data) => {
      setProducts(data.All || []);
    });
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-amazonclone-background min-h-screen">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for "{query}"
        </h1>
        <p className="mb-4 text-gray-600">
          {filteredProducts.length} results found
        </p>
        
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <HomePageCard 
              key={product.id}
              title={product.title}
              img={product.image_small || product.image}
              link={"View Product"}
              author={product.brand}
              isBook={true}
              id={product.id}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;