import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { getCartCount } = useCart();

  return (
    <header className="min-w-[1000px]">
        <div className="flex bg-amazonclone text-white h-[60px]">
            <div className="flex items-center">
                <div className="pr-4 pl-4">
                    <Link to="/">
                      <img 
                        className="h-[35px] w-[100px] m-2" 
                        src="/images/amazon.png" 
                        alt="Amazon"
                      />
                    </Link>
                </div>
                <div className="pr-6">
                    <div className="text-xs xl:text-sm">Deliver to</div>
                    <div className="text-sm xl:text-base font-bold">South Africa</div>
                </div>
            </div>
            <div className="flex grow relative items-center">
                <Search />
            </div>
            <div className="flex items-center m-4">
                <div className="pr-4 pl-4">
                    <div className="text-xs xl:text-sm">Hello, Sign in</div>
                    <div className="text-sm xl:text-base font-bold">Account & Lists</div>
                </div>
                <div className="pr-4 pl-4">
                    <div className="text-xs xl:text-sm">Returns</div>
                    <div className="text-sm xl:text-base font-bold">& Orders</div>
                </div>
                <Link to="/checkout">
                    <div className="flex pr-3 pl-3">
                        <div className="relative">
                            <ShoppingCartIcon className="h-8" />
                            <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                                {getCartCount()}
                            </div>
                        </div>
                        <div className="mt-7 text-xs xl:text-sm font-bold ml-1">
                            Cart
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-black space-x-3 text-xs xl:text-sm p-2 pl-6">
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default NavBar;