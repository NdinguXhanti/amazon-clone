import React from 'react'
import { useCart } from "../context/CartContext";
import { ZAR_CURRENCY } from "../utils/constants";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const cartTotal = getCartTotal();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-amazonclone-background min-h-screen">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-6 bg-white p-4 rounded">
              <h1 className="text-2xl font-bold border-b pb-2">Shopping Cart</h1>
              <div className="text-center py-8 text-gray-500">
                Your Amazon Cart is empty.
              </div>
              <div className="border-t pt-4 text-right">
                <p className="text-lg">Subtotal (0 items): R 0.00</p>
              </div>
            </div>
            <div className="col-span-2 bg-white p-4 rounded h-fit">
              <p className="text-lg mb-4">
                Subtotal (0 items): <span className="font-bold">R 0.00</span>
              </p>
              <button className="w-full bg-yellow-400 p-3 rounded hover:bg-yellow-500">
                Proceed to Buy
              </button>
              <div className="mt-4 text-sm text-gray-600">
                <p>Eligible for FREE Delivery</p>
                <p className="text-green-600 mt-2">FREE Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-amazonclone-background min-h-screen">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6 bg-white p-4 rounded">
            <h1 className="text-2xl font-bold border-b pb-2">Shopping Cart</h1>
            
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex py-4 border-b">
                  <div className="w-24 h-24 mr-4">
                    <img 
                      src={item.image_small || item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex items-center mt-2">
                      <select 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="border rounded p-1 mr-4 text-black"
                      >
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-blue-500 text-sm hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-black">
                    {ZAR_CURRENCY.format(item.price * item.quantity)}
                  </div>
                </div>
              ))}
              <div className="text-right pt-4">
                <p className="text-lg text-black">
                  Subtotal ({itemCount} items): <span className="font-bold">{ZAR_CURRENCY.format(cartTotal)}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 bg-white p-4 rounded h-fit">
            <p className="text-lg mb-4 text-black">
              Subtotal ({itemCount} items): <span className="font-bold">{ZAR_CURRENCY.format(cartTotal)}</span>
            </p>
            
            <button className="w-full bg-yellow-400 p-3 rounded hover:bg-yellow-500 text-black">
              Proceed to Buy
            </button>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>Eligible for FREE Delivery</p>
              <p className="text-green-600 mt-2">FREE Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout