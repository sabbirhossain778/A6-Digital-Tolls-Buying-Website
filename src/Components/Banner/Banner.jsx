// import React from 'react';

// import { FaRegDotCircle } from "react-icons/fa"
// import Rating from './Rating/Rating';

// const Banner = () => {
//     return (
//         <>
//         <div className={`flex flex-col lg:flex-row justify-between items-center gap-14 py-20 w-12/12 max-w-360 mx-auto px-20`}>
//             <div className='space-y-2 flex-1'>
//                 <p className="bannerText"><FaRegDotCircle className="text-[#4F39F6]"/>
//                 <span className="banner-gradient-text">New: AI-Powered Tools Available</span>
//                 </p>

//                 <h1 className='text-5xl font-extrabold text-[#101727] leading-16'>Supercharge Your <br /> Digital Workflow</h1>
//                 <p className='text-[#627382] text-[18px]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />
//                 Explore Products
//                 </p>
//                 <br />
//                 <div className='flex gap-4 '>
//                     <button className={`bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-4xl font-bold btn btn-soft`}>Explore Products</button>

//                     <button className="gradient-border btn "><img src="/src/assets/Play.png" alt="" /> <span className='banner-gradient-text'>Watch Demo</span></button>
//                 </div>
//             </div>

//             <div className='flex flex-1 justify-end'>
//                 <img src="/src/assets/banner.png" className={`w-full max-w-125 h-auto object-cover rounded-lg shadow-md opacity-100`} alt="Banner Image" />
//             </div>
//         </div>

//         <Rating></Rating>
//         </>
//     );
// };

// export default Banner;




import React from 'react';
import { FaRegDotCircle } from "react-icons/fa"
import Rating from './Rating/Rating';

const Banner = () => {
    return (
        <>
        {/* প্যাডিং রেসপন্সিভ করা হয়েছে: মোবাইলে px-6 এবং ল্যাপটপে px-10 */}
        <div className={`flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14 py-10 lg:py-20 w-full lg:w-11/12 mx-auto px-6 md:px-10`}>
            
            <div className='space-y-4 flex-1 text-center lg:text-left'>
                {/* AI Badge - মোবাইলে মাঝখানে আনার জন্য mx-auto যোগ করা হয়েছে */}
                <p className="bannerText flex items-center justify-center lg:justify-start gap-2">
                    <FaRegDotCircle className="text-[#4F39F6]"/>
                    <span className="banner-gradient-text">New: AI-Powered Tools Available</span>
                </p>

                {/* Heading - মোবাইলে টেক্সট সাইজ একটু কমানো হয়েছে (text-4xl) */}
                <h1 className='text-4xl md:text-5xl font-extrabold text-[#101727] leading-tight md:leading-[64px]'>
                    Supercharge Your <br className='hidden md:block' /> Digital Workflow
                </h1>
                
                <p className='text-[#627382] text-base md:text-[18px] max-w-lg mx-auto lg:mx-0'>
                    Access premium AI tools, design assets, templates, and productivity 
                    software—all in one place. Start creating faster today.
                </p>
                
                <div className='flex flex-wrap gap-4 justify-center lg:justify-start pt-4'>
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition">
                        Explore Products
                    </button>

                    <button className="gradient-border btn flex items-center gap-2">
                        <img src="/src/assets/Play.png" alt="play" className="w-5 h-5" /> 
                        <span className='banner-gradient-text'>Watch Demo</span>
                    </button>
                </div>
            </div>

            {/* ইমেজ পার্ট - মোবাইলে অটোমেটিক নিচে চলে আসবে এবং মাঝখানে থাকবে */}
            <div className='flex-1 flex justify-center lg:justify-end w-full'>
                <img 
                    src="/src/assets/banner.png" 
                    className="w-full max-w-sm md:max-w-md lg:max-w-xl h-auto object-cover rounded-2xl shadow-xl" 
                    alt="Banner Image" 
                />
            </div>
        </div>

        <Rating />
        </>
    );
};

export default Banner;