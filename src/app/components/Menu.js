import React from 'react'

const Menu = () => {
  return (
    <div className="my-10 mx-20 m">
        <div>
            <div className="flex gap-20 px-10">
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/blackcoffee.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Black coffee</h1>
                    <h1 className="text-xl font-bold text-green-800">$20.00</h1>
                </div>
              </div>
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/coffeewithmilk.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Coffee with Milk</h1>
                    <h1 className="text-xl font-bold text-green-800">$20.00</h1>
                </div>
              </div>
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/breadcoffee.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Bread Coffee</h1>
                    <h1 className="text-xl font-bold text-green-800">$20.00</h1>
                </div>
              </div>
               
            </div>
           <div className="flex gap-20 px-10 mt-10">
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/milocoffee.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Milo Coffee</h1>
                    <h1 className="text-xl font-bold text-green-800">$50.00</h1>
                </div>
              </div>
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/starbaucks.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Starbaucks</h1>
                    <h1 className="text-xl font-bold text-green-800">$1400.00</h1>
                </div>
              </div>
              <div className="border-2 border-amber-950 w-[300px] px-6 py-6 rounded-2xl">
                <img className="w-66 h-82" src="./assets/filtercoffee.jpg" alt="image"/>
                <div className="flex items-center gap-6 mt-6">
                    <h1 className="text-xl font-bold text-amber-950 pl-6">Filter Coffee</h1>
                    <h1 className="text-xl font-bold text-green-800">$30.00</h1>
                </div>
              </div>
               
            </div>
        </div>
    </div>
  )
}

export default Menu