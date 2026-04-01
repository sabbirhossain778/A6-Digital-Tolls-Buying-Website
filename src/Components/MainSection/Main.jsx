import React, { useState } from 'react';
import Card from './Card/Card';
import { Suspense } from 'react';
import SelectedCards from './SelectedCards/SelectedCards';
const Main = ({ fetchPromise }) => {
    const [selected, setSelected] = useState('products');
    // console.log(selected,'Available');
    
    return (
        <div className=' w-12/12 max-w-360 mx-auto'>
            <div className='w-10/12 mx-auto max-w-360 my-20 space-y-10'>
                <div className='flex flex-col items-center space-y-4 py-2'>
                    <h2 className='text-5xl font-extrabold text-[#101727] text-center'>Premium Digital Tools</h2>
                    <p className='text-[#00000081] text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex bg-base-200 px-4 py-2 rounded-4xl shadow-sm gap-2'>
                        <button onClick={() => setSelected('products')} className={`btn btn-soft rounded-4xl font-bold px-6 ${selected ==='products'? 'btn-style' : ''}`}>Products</button>

                        <button onClick={() => setSelected('cart')} className={`btn btn-soft rounded-4xl font-bold px-7 ${selected ==='cart'? 'btn-style' : ''}`}>Cart (2)</button>
                    </div>
                </div>

                <Suspense fallback={
                    <div className="flex justify-center ">
                        <span className="loading loading-spinner w-10 h-10 text-primary py-6"></span>
                    </div>}>

                    {selected ==='products'? <Card fetchPromise={fetchPromise} /> : <SelectedCards />} 
                </Suspense>
            </div>

        </div>
    );
};

export default Main;