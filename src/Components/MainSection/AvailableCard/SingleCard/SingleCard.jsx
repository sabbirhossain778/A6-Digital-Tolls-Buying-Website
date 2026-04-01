import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { TbDisabled } from 'react-icons/tb';

const SingleCard = ({tool, cart, setCart, isAdded}) => {
    const handleAdd = () =>{
        if (!isAdded){
            setCart([...cart, tool]);
        }
    }
    
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-2">
                <span className={`badge ${tool.tagType} custom-badge`}>{tool.tag}</span>

                <img src={tool.icon} alt={tool.name} width={38} className='m-3 p-1'/>

                <h4 className="text-3xl font-bold">{tool.name}</h4>

                <p className='text-[#627382]'>{tool.description}</p>

                <h3 className="text-2xl font-bold text-[#101727]">
                    ${tool.price}/<span id='text'>{tool.period}</span>
                </h3>

                <ul className="flex flex-col gap-2 text-xs">
                    {tool.features.map((feature, index) => (
                        <li className='flex gap-1' key={index}>
                            <IoMdCheckmark className='text-green-600 text-xl'/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                       
                <div>
                    <button
                        onClick={handleAdd} disabled={isAdded}
                        className={`btn btn-block rounded-3xl text-white ${isAdded ? 'bg-green-500' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}>
                        {isAdded ? (<span className="flex items-center justify-center gap-2">
                            <IoMdCheckmark className='text-white text-xl' />Added to Cart!
                        </span>) : ('Buy Now')}
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default SingleCard;