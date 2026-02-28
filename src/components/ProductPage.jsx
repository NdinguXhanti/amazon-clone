import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ZAR_CURRENCY } from "../utils/constants";
import ProductDetails from "./ProductDetails";
import { callAPI } from "../utils/CallApi";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        setLoading(true);
        callAPI(`data/products.json`)
        .then((productResults) => {
            const foundProduct = productResults[id];
            setProduct(foundProduct);
            setLoading(false);
        });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert("Added to cart!");
    };

    if (loading) return (
        <div className="h-screen bg-amazonclone-background flex items-center justify-center">
            <h1 className="text-black text-2xl">Loading Product ...</h1>
        </div>
    );

    if (!product) return (
        <div className="h-screen bg-amazonclone-background flex items-center justify-center">
            <h1 className="text-black text-2xl">Product Not Found</h1>
        </div>
    );

    return (
        <div className="min-h-screen bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-3 p-4 bg-white">
                        <div className="mb-4 border rounded-lg p-4 flex justify-center">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="max-h-[400px] object-contain"
                            />
                        </div>
                    </div>
                    <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                        <div className="mb-3">
                            <ProductDetails product={product} ratings={true}/>
                        </div>
                        <div className="text-base xl:text-lg mt-3 pt-3 text-black">
                            {product.description}
                        </div>
                    </div>
                    <div className="col-span-2 p-4 rounded bg-white">
                        <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                            {ZAR_CURRENCY.format(product.price)}
                        </div>
                        {product.oldPrice && (
                            <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                                RRP:<span className="line-through ml-1">{ZAR_CURRENCY.format(product.oldPrice)}</span>
                            </div>
                        )}
                        <div className="text-blue-500 mt-3">FREE Returns</div>
                        <div className="text-blue-500 mt-1">FREE Delivery</div>
                        <div className="text-base xl:text-lg font-semibold text-green-500 mt-1">In Stock</div>
                        <div className="text-base xl:text-lg mt-3 text-black">
                            Quantity:
                            <select 
                                className="ml-2 p-1 bg-white border rounded-md focus:border-indigo-600 text-black"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            >
                               <option>1</option>
                               <option>2</option> 
                               <option>3</option>  
                               <option>4</option>
                               <option>5</option>
                               <option>6</option>
                               <option>7</option>
                               <option>8</option>
                               <option>9</option>
                               <option>10</option>
                               <option>11</option>
                               <option>12</option>
                               <option>13</option>
                            </select>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-4 text-black"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;