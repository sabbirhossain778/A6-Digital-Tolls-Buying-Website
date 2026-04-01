import React from 'react';

const SelectedCards = () => {
    return (
        <div className='space-y-6 p-10 bg-[#F9FAFC] shadow:md rounded-2xl'>
            <div>
                <h3 className='text-2xl font-bold text-[#101727]'>Your Cart</h3>
            </div>
            
            <div className='flex gap-4 p-5 items-center bg-[#F2F2F2] shadow:sm'>
                <img src="/src/assets/products/writing_2327400 1.png" alt="" />
                <div className='w-full'>
                    <h3 className='font-semibold text-[#101727] text-[20px]'>AI Writing Pro</h3>
                    <p className='text-[#627382 text-[18px] font-medium'>$29</p>
                </div>
                <button className="btn btn-ghost font-bold text-[#FF3980]">Remove</button>
            </div>

            <div className='flex justify-between'>
                <p className='text-[#627382 text-[18px]'>Total</p>
                <h3 className='text-xl font-bold text-[#101727]'>$97</h3>
            </div>
            <div>
                <button className="btn btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
            </div>

        </div>
    );
};

export default SelectedCards;