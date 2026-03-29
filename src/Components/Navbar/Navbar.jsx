import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className='flex justify-between w-10/12 max-w-360 mx-auto'>
                <div>
                <a className={`btn btn-ghost text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent`}>DigiTools</a>
                </div>

                <div className='flex gap-8'> 
                    {/* You can add this in CSS for responsive:- hidden md:flex */}
                    <h2 className="navTitle">Products</h2>
                    <h2 className="navTitle">Features</h2>
                    <h2 className="navTitle">Pricing</h2>
                    <h2 className="navTitle">Testimonials</h2>
                    <h2 className="navTitle">FAQ</h2>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-4">
                        <div className="indicator relative">
                        <FiShoppingCart />
                        <span className="badge badge-sm badge-info indicator-item absolute -top-1 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full text-white p-0">
                            0
                        </span>
                        </div>
                        <span className="font-semibold text-[#101727]">
                        Login
                        </span>

                    </div>

                    <div>
                    <button className={`btn bg-[#4F39F6] text-white font-semibold rounded-[25px]`}>Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;