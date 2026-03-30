import React from 'react';

const StepsSection = () => {
    return (
        <div className='w-12/12 max-w-360 mx-auto'>
            <div className=' bg-[#F9FAFC] py-25 space-y-10'>
                <div className='flex flex-col text-center'>
                    <h2 className='font-extrabold text-5xl'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382] leading-10'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='w-10/12 mx-auto grid grid-cols-3 gap-7'>

                    <div className='steps-card space-y-4'>
                        <p className='badge-gradient'>01</p>
                        <img src="/src/assets/user.png" alt="user icon" className='bg-[#f0e7f5] flex mx-auto p-6 w-25 rounded-full'/>
                        <h4 className='text-2xl font-semibold text-[#101727]'>Create Account</h4>
                        <p className='px-6 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className='steps-card space-y-4'>
                        <p className='badge-gradient'>02</p>
                        <img src="/src/assets/package.png" alt="user icon" className='bg-[#f0e7f5] flex mx-auto p-6 w-25 rounded-full'/>
                        <h4 className='text-2xl font-semibold text-[#101727]'>Choose Products</h4>
                        <p className='px-6 text-[#627382]'>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>

                    <div className='steps-card space-y-4'>
                        <p className='badge-gradient'>03</p>
                        <img src="/src/assets/rocket.png" alt="user icon" className='bg-[#f0e7f5] flex mx-auto p-6 w-25 rounded-full'/>
                        <h4 className='text-2xl font-semibold text-[#101727]'>Start Creating</h4>
                        <p className='px-6 text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>

                </div> 
            </div>
        </div>
    );
};

export default StepsSection;