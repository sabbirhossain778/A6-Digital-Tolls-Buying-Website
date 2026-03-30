import React from 'react';

import { FaRegDotCircle } from "react-icons/fa"
import Rating from './Rating/Rating';

const Banner = () => {
    return (
        <>
        <div className={`flex justify-between items-center gap-14 py-20 w-12/12 max-w-360 mx-auto px-20`}>
            <div className='space-y-2 flex-1'>
                <p className="bannerText"><FaRegDotCircle className="text-[#4F39F6]"/>
                <span className="banner-gradient-text">New: AI-Powered Tools Available</span>
                </p>

                <h1 className='text-5xl font-extrabold text-[#101727] leading-16'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[#627382] text-[18px]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />
                Explore Products
                </p>
                <br />
                <div className='flex gap-4 '>
                    <button className={`bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-4xl font-bold btn btn-soft`}>Explore Products</button>

                    <button className="gradient-border btn btn-soft"><img src="/src/assets/Play.png" alt="" /> <span className='banner-gradient-text'>Watch Demo</span></button>
                </div>
            </div>

            <div className='flex flex-1 justify-end'>
                <img src="/src/assets/banner.png" className={`w-full max-w-125 h-auto object-cover rounded-lg shadow-md opacity-100`} alt="Banner Image" />
            </div>
        </div>

        <Rating></Rating>
        </>
    );
};

export default Banner;