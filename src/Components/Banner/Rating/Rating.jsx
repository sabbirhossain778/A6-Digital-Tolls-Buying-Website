import React from 'react';

const Rating = () => {
    return (
        <div id='rating-bacground' className='w-12/12 max-w-360 mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between lg:w-8/12 w-10/12 mx-auto py-8 max-w-360'>

                <div>
                    <h3 className='rating-h2'>50K+</h3>
                    <p className='rating-p'>Active Users</p>
                </div>
                <div className={`divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30`}></div>
                <div>
                    <h3 className='rating-h2'>200+</h3>
                    <p className='rating-p'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30"></div>
                <div>
                    <h3 className='rating-h2'>4.9</h3>
                    <p className='rating-p text-center'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Rating;