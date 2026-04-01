import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { toast } from 'react-toastify';

const SelectedCards = ({ cart, setCart }) => {
    
    const handleRemove = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        toast.error("Item removed from cart!", {
            theme: "colored"
        });
    };

    const handleCheckout = () => {
        setCart([]); 
        toast.success("Purchase successful! Thank you.", {
            theme: "light"
        });
    };

    const totalAmount = cart.reduce((sum, item) => { 
        return sum + Number(item.price);
    }, 0);

    return (
        <div className='space-y-6 p-10 bg-[#F9FAFC] shadow-md rounded-2xl'>
            <div>
                <h3 className='text-2xl font-bold text-[#101727]'>Your Cart</h3>
            </div>

            {
                cart.length === 0 ?
                (
                    <div className='w-40 h-50 mx-auto text-center py-10'>
                        <FiShoppingCart className='text-5xl text-gray-400 mx-auto mb-5'/>
                        <p className='text-[20px] text-gray-500'>Your cart is empty</p>
                    </div>
                ) :
                (
                    <div className='space-y-4'>
                        {cart.map((item, index) => { 
                            return (
                                <div className='flex gap-4 p-5 items-center bg-[#F2F2F2] shadow-sm rounded-xl' key={index}>
                                    <img src={item.icon} alt={item.name} className='w-12 h-12' />
                                    <div className='w-full'>
                                        <h3 className='font-semibold text-[#101727] text-[20px]'>
                                            {item.name}
                                        </h3>
                                        <p className='text-[#627382] text-[18px] font-medium'>${item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleRemove(item.id)} 
                                        className="btn btn-ghost font-bold text-[#FF3980]">
                                        Remove
                                    </button>
                                </div>
                            )
                        })}                
                        
                        <div className='flex justify-between pt-4 border-t border-gray-200 mt-6'>
                            <p className='text-[#627382] text-[18px]'>Total</p>
                            <h3 className='text-xl font-bold text-[#101727]'>${totalAmount}</h3>
                        </div>
                        
                        <div className='pt-4'>
                            <button 
                                onClick={handleCheckout}
                                className="btn btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold border-none">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )
            }            
        </div>
    );
};

export default SelectedCards;