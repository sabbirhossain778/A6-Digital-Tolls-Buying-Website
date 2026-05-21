// import React from 'react';
// import { FiShoppingCart } from "react-icons/fi";

// const Navbar = ({count}) => {
//     return (
//         <div className="navbar bg-base-100 shadow-sm ">
//             <div className='flex justify-between w-10/12 max-w-360 mx-auto items-center'>
//                 <div>
//                 <a className={`btn btn-ghost text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent`}>DigiTools</a>
//                 </div>

//                 <div className='flex gap-8 hidden md:flex'> 
//                     {/* You can add this in CSS for responsive:- hidden md:flex */}
//                     <h2 className="navTitle">Products</h2>
//                     <h2 className="navTitle">Features</h2>
//                     <h2 className="navTitle">Pricing</h2>
//                     <h2 className="navTitle">Testimonials</h2>
//                     <h2 className="navTitle">FAQ</h2>
//                 </div>

//                 <div className="flex gap-4 items-center">
//                     <div className="flex items-center gap-4">

//                         <div className="indicator relative">
//                         <FiShoppingCart />
//                         {count > 0 && (
//                             <span className="badge badge-sm badge-error indicator-item absolute -top-1 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full text-white p-0">
//                             {count}
//                         </span>
//                         )}
                        
//                         </div>
                        
//                         <span className="font-semibold text-[#101727]">
//                         Login
//                         </span>

//                     </div>

//                     <div>
//                     <button className={`btn bg-[#4F39F6] text-white font-semibold rounded-[25px]`}>Get Started</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Navbar;


import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ count }) => {
    // মেনু আইটেমগুলো
    const navItems = (
        <>
            <li><a className="navTitle">Products</a></li>
            <li><a className="navTitle">Features</a></li>
            <li><a className="navTitle">Pricing</a></li>
            <li><a className="navTitle">Testimonials</a></li>
            <li><a className="navTitle">FAQ</a></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
            <div className="navbar-start">
                {/* মোবাইল ড্রপডাউন - শুধু লার্জ স্ক্রিনের নিচে (lg:hidden) দেখাবে */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                
                {/* লোগো */}
                <a className="btn btn-ghost text-xl md:text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent p-0">
                    DigiTools
                </a>
            </div>

            {/* মাঝখানের মেনু - শুধুমাত্র লার্জ স্ক্রিনে (lg:flex) দেখাবে */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>

            {/* ডান পাশের অংশ - এটি সব সময় (All time) থাকবে */}
            <div className="navbar-end gap-3 md:gap-5">
                <div className="flex items-center gap-3 md:gap-4">
                    {/* কার্ট আইকন */}
                    <div className="indicator relative text-xl cursor-pointer">
                        <FiShoppingCart />
                        {count > 0 && (
                            <span className="badge badge-sm badge-error indicator-item absolute -top-2 -right-2 text-[10px] w-4 h-4 flex items-center justify-center rounded-full text-white p-0">
                                {count}
                            </span>
                        )}
                    </div>
                    
                    {/* লগইন বাটন - এটি এখন সব স্ক্রিনেই থাকবে */}
                    <span className="font-semibold text-[#101727] cursor-pointer text-sm md:text-base">
                        Login
                    </span>
                </div>

                <button className="btn bg-[#4F39F6] text-white font-semibold rounded-[25px] border-none px-3 md:px-6 btn-sm md:btn-md">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;