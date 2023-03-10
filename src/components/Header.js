import Image from "next/image"
import { 
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline"

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue 
        p-1 flex-grow py-2"
        >
            <div className="mt-2 items-center flex-grow sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            {/*  Search */}

            <div className="hidden sm:flex items-center h-10 rounded-md 
            flex-grow bg-yellow-400 hover:bg-yellow-500">
                <input 
                    className="p-2 w-full w-6 flex-grow flex-shrink rounded-l-md 
                    focus:outline-none"
                    type="text" 
                />
                <SearchIcon className="h-12 p-4"/>
            </div>
            
            {/*  Right  */}

            <div className="text-white flex text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link">
                    <p>Hello, Durgendra</p>
                    <p className="font-extrabold md:text-sm ">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm ">& Orders</p>
                </div>
                <div className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-8 w-4 h-4 bg-yellow-400 rounded-full text-center text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm  ">Basket</p>
                </div>
            </div>

        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-6 bg-amazon_blue-light text-sm p-2 text-white ">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1" />
                All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Today's Deals</p>
            <p className="link">Amazon Business</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Grocery</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Prime</p>
        </div>
    </header>
  )
}

export default Header