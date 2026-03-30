import React from 'react';

const Rating = () => {
    return (
        <div id='rating-bacground'>
            <div className='flex justify-between w-10/12 mx-auto py-10 px-15 max-w-360'>
                <div>
                    <h2 className='rating-h2'>50K+</h2>
                    <p className='rating-p'>Active Users</p>
                </div>
                <div className="divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30"></div>
                <div>
                    <h2 className='rating-h2'>200+</h2>
                    <p className='rating-p'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal before:bg-[#FFFFFF] after:bg-[#FFFFFF] opacity-30"></div>
                <div>
                    <h2 className='rating-h2'>4.9</h2>
                    <p className='rating-p'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;