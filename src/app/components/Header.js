import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="flex justify-between items-center px-10 py-2 fixed w-full h-auto shadow-xl bg-amber-100 z-50">
        <div className="flex  items-center gap-4">
          <img className="h-14 w-14 rounded-full" src="./assets/icon.jpg" alt="icon" />
          <h1 className="text-xl text-amber-800 font-serif font-bold">ABC CoffeeShop</h1>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li className="text-lg text-amber-800 font-bold font-serif hover:border-b-2 hover:border-amber-700 hover:text-amber-700">Home</li>
            <li  className="text-lg text-amber-800 font-bold font-serif  hover:border-b-2 hover:border-amber-700 hover:text-amber-700">Menu</li>
            <li  className="text-lg text-amber-800 font-bold font-serif hover:border-b-2 hover:border-amber-700 hover:text-amber-700">Location</li>
          </ul>
          <button className="text-md font-bold border-2 border-amber-800 text-amber-800 px-6 py-2 rounded-3xl hover:bg-amber-800 hover:text-white">sign in</button>
        </div>
      </nav>
    </div>
  )
}

export default Header