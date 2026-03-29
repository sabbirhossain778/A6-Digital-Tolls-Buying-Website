import React from 'react';

import { FaRegDotCircle } from "react-icons/fa"

const Banner = () => {
    return (
        <div className={`flex justify-between items-center gap-14 my-20 w-10/12 max-w-360 mx-auto`}>
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
                    <button className={`bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-4xl font-bold`}>Explore Products</button>

                    <button className="gradient-border"><img src="/src/assets/Play.png" alt="" /> <span className='banner-gradient-text'>Watch Demo</span></button>
                </div>
            </div>

            <div className='flex flex-1 justify-end'>
                <img src="/src/assets/banner.png" className={`w-full max-w-[500px] h-auto object-cover rounded-lg`} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;