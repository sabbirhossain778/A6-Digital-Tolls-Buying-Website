// import React from 'react';

// const Rating = () => {
//     return (
//         <div id='rating-bacground' className='w-12/12 max-w-360 mx-auto'>
//             <div className='flex flex-col md:flex-row items-center justify-between lg:w-8/12 w-10/12 mx-auto py-8 max-w-360'>

//                 <div>
//                     <h3 className='rating-h2'>50K+</h3>
//                     <p className='rating-p'>Active Users</p>
//                 </div>
//                 <div className={`divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30`}></div>
//                 <div>
//                     <h3 className='rating-h2'>200+</h3>
//                     <p className='rating-p'>Premium Tools</p>
//                 </div>
//                 <div className="divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30"></div>
//                 <div>
//                     <h3 className='rating-h2'>4.9</h3>
//                     <p className='rating-p text-center'>Rating</p>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default Rating;



import React from 'react';

const Rating = () => {
    return (
        <div id='rating-bacground' className='w-full max-w-360 mx-auto'>
            {/* মোবাইলে প্যাডিং একটু কমিয়ে py-6 করা হয়েছে */}
            <div className='flex flex-col md:flex-row items-center justify-between lg:w-8/12 w-10/12 mx-auto py-6 md:py-8 max-w-360 gap-4 md:gap-0'>

                <div className='text-center'>
                    {/* মোবাইলে text-2xl এবং বড় স্ক্রিনে আপনার rating-h2 এর সাইজ পাবে */}
                    <h3 className='rating-h2 text-2xl md:text-4xl'>50K+</h3>
                    <p className='rating-p text-sm md:text-lg'>Active Users</p>
                </div>

                {/* ডিভাইডারের হাইট (h) মোবাইলে কমানো হয়েছে: h-px এবং বড় স্ক্রিনে h-12 */}
                <div className="divider md:divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30 h-px md:h-12 w-1/2 md:w-px mx-auto"></div>

                <div className='text-center'>
                    <h3 className='rating-h2 text-2xl md:text-4xl'>200+</h3>
                    <p className='rating-p text-sm md:text-lg'>Premium Tools</p>
                </div>

                <div className="divider md:divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30 h-px md:h-12 w-1/2 md:w-px mx-auto"></div>

                <div className='text-center'>
                    <h3 className='rating-h2 text-2xl md:text-4xl'>4.9</h3>
                    <p className='rating-p text-sm md:text-lg text-center'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Rating;