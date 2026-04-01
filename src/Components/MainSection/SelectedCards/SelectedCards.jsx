import React from 'react';
import SingleCard from '../AvailableCard/SingleCard/SingleCard';

const SelectedCards = ({cart, setCart}) => {
    const handleRemove = (id)=>{
        const newCart = cart.filter(item => item.id !==id);
        setCart(newCart);
    }

    const totalAmount = cart.reduce((sum, item) =>{ 
        return sum + Number(item.price);
    },0);

    return (
        <div className='space-y-6 p-10 bg-[#F9FAFC] shadow:md rounded-2xl'>
            <div>
                <h3 className='text-2xl font-bold text-[#101727]'>Your Cart</h3>
            </div>

            {/*  */}

            {
                cart.length ===0?
                (<img src="/src/assets/products/shopping-cart.png" alt="" width={200} className='flex justify-center'/>) :
                (cart.map((item, index)=>{ 
                return(
                    <div className='flex gap-4 p-5 items-center bg-[#F2F2F2] shadow:sm' key={index}>
                        <img src={item.icon} alt="" />
                        <div className='w-full'>
                        <h3 className='font-semibold text-[#101727] text-[20px]'>
                            {item.name}
                        </h3>
                        <p className='text-[#627382 text-[18px] font-medium'>${item.price}</p>
                        </div>
                        <button onClick={()=> handleRemove(item.id)} 
                        className="btn btn-ghost font-bold text-[#FF3980]">Remove</button>
                    </div>
                  )
                }))
            }

            <div className='flex justify-between'>
                <p className='text-[#627382 text-[18px]'>Total</p>
                <h3 className='text-xl font-bold text-[#101727]'>${totalAmount}</h3>
            </div>
            <div>
                <button className="btn btn-block rounded-3xl  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
            </div>
            
        </div>
    );
};

export default SelectedCards;



// const SelectedCards = ({ cart, setCart }) => {
//     // চেক করার জন্য কনসোল
//     console.log("Cart Data in SelectedCards:", cart);

//     // রিমুভ ফাংশন
//     const handleRemove = (name) => {
//         const newCart = cart.filter(item => item.name !== name);
//         setCart(newCart);
//     };

//     // টোটাল প্রাইজ ক্যালকুলেশন
//     const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

//     return (
//         <div className='space-y-6 p-10 bg-[#F9FAFC]  shadow-md rounded-2xl'>
//             <h3 className='text-2xl font-bold text-[#101727]'>Your Cart ({cart.length})</h3>
            
//             {cart.length === 0 ? (
//                 <p className="text-gray-500">Your cart is empty!</p>
//             ) : (
//                 cart.map((item, index) => (

//                     <div key={index} className='flex gap-4 p-5
//                      items-center bg-white shadow-sm rounded-xl'>

//                         <img src={item.icon} alt={item.name} width={50} />
//                         <div className='w-full'>
//                         <h3 className='font-semibold text-[#101727] 
//                              text-[20px]'>{item.name}</h3>
//                         <p className='text-[#627382] text-[18px] font-medium'>
//                              ${item.price}</p>
//                      </div>
//                         <button 
//                             onClick={() => handleRemove(item.name)} 
//                             className="btn btn-ghost font-bold text-[#FF3980]">
//                             Remove
//                         </button>
//                      </div>
//                 ))
//             )}

//             <div className='flex justify-between'>
//                 <p className='text-[#627382] text-[18px]'>Total</p>
//                 <h3 className='text-xl font-bold text-[#101727]'>${total}</h3>
//             </div>
//             <button className="btn btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
//                 Proceed to Checkout
//             </button>
//         </div>
//     );
// };
